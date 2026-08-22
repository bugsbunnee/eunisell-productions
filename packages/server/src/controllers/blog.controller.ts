import { HttpStatusCode } from 'axios';
import moment from 'moment';
import z from 'zod';

import { blogRepository } from '../repositories/blog.repository.js';
import { ActivityAction, ActivityCategory, activityRepository } from '../repositories/activity.repository.js';
import { blogListQuerySchema } from '../infrastructure/schemas/index.js';
import { BLOG_IMAGE_MAX_BYTES } from '../infrastructure/utils/constants.js';

import blogService from '../services/blog.service.js';

import type { Request, Response } from 'express';
import type { IBlogPost, IUpdateBlogPost } from '../infrastructure/schemas/index.js';

const STATS_MONTHS = 6;

class BlogController {
  async list(req: Request, res: Response) {
    const query = blogListQuerySchema.safeParse(req.query);
    if (!query.success) return res.status(HttpStatusCode.BadRequest).json({ error: z.formatError(query.error) });

    const { posts, total } = await blogRepository.findMany(query.data, req.pagination.skip, req.pagination.limit);

    return res.json({ data: posts, total, page: req.pagination.page, limit: req.pagination.limit, totalPages: Math.max(1, Math.ceil(total / req.pagination.limit)) });
  }

  async stats(_req: Request, res: Response) {
    const [total, published, draft] = await blogRepository.stats();
    const since = moment()
      .subtract(STATS_MONTHS - 1, 'months')
      .startOf('month')
      .toDate();

    const [recentActivity, monthly, categoryBreakdown] = await Promise.all([
      blogRepository.recentActivity(5),
      blogRepository.createdSince(since),
      blogRepository.categoryBreakdown(),
    ]);

    return res.json({
      total,
      published,
      draft,
      recentActivity,
      monthlyPosts: blogService.bucketByMonth(monthly, STATS_MONTHS),
      monthlyBreakdown: blogService.bucketByMonthAndStatus(monthly, STATS_MONTHS),
      categoryBreakdown,
    });
  }

  async get(req: Request, res: Response) {
    const post = await blogRepository.findById(req.params.id as string);
    if (!post) return res.status(HttpStatusCode.NotFound).json({ error: 'Blog post not found' });

    return res.json(post);
  }

  async create(req: Request, res: Response) {
    const body = req.body as IBlogPost;

    if (!req.file) return res.status(HttpStatusCode.BadRequest).json({ error: 'A cover image is required' });
    if (req.file.size > BLOG_IMAGE_MAX_BYTES) return res.status(HttpStatusCode.BadRequest).json({ error: 'The cover image must be under 5MB' });

    const existing = await blogRepository.findBySlug(body.slug);
    if (existing) return res.status(HttpStatusCode.Conflict).json({ error: 'A blog post with this slug already exists' });

    const { coverImage, coverImageId } = await blogService.uploadCoverImage(req.file.buffer);

    const post = await blogRepository.create({
      ...body,
      coverImage,
      coverImageId,
      publishedAt: body.status === 'PUBLISHED' ? new Date() : null,
      author: req.admin ? { connect: { id: req.admin.id } } : undefined,
    });

    activityRepository.recordActivity({
      adminId: req.admin?.id,
      action: ActivityAction.Created,
      category: ActivityCategory.Blog,
      description: `Created blog post "${post.title}"`,
    });

    return res.status(HttpStatusCode.Created).json(post);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const body = req.body as IUpdateBlogPost;

    const existingPost = await blogRepository.findById(id);
    if (!existingPost) return res.status(HttpStatusCode.NotFound).json({ error: 'Blog post not found' });

    if (body.slug) {
      const slugTaken = await blogRepository.findBySlug(body.slug, id);
      if (slugTaken) return res.status(HttpStatusCode.Conflict).json({ error: 'A blog post with this slug already exists' });
    }

    let imageFields: { coverImage: string; coverImageId: string | null } | undefined;

    if (req.file) {
      if (req.file.size > BLOG_IMAGE_MAX_BYTES) return res.status(HttpStatusCode.BadRequest).json({ error: 'The cover image must be under 5MB' });
      imageFields = await blogService.uploadCoverImage(req.file.buffer);
      await blogService.deleteCoverImage(existingPost.coverImageId);
    }

    const becomingPublished = body.status === 'PUBLISHED' && existingPost.status !== 'PUBLISHED';

    const post = await blogRepository.update(id, {
      ...body,
      ...imageFields,
      publishedAt: becomingPublished ? new Date() : undefined,
    });

    activityRepository.recordActivity({
      adminId: req.admin?.id,
      action: ActivityAction.Updated,
      category: ActivityCategory.Blog,
      description: `Updated blog post "${post.title}"`,
    });

    return res.json(post);
  }

  async uploadImage(req: Request, res: Response) {
    if (!req.file) return res.status(HttpStatusCode.BadRequest).json({ error: 'An image file is required' });
    if (req.file.size > BLOG_IMAGE_MAX_BYTES) return res.status(HttpStatusCode.BadRequest).json({ error: 'The image must be under 5MB' });

    const { url } = await blogService.uploadContentImage(req.file.buffer);
    return res.status(HttpStatusCode.Created).json({ url });
  }

  async remove(req: Request, res: Response) {
    const id = req.params.id as string;

    const post = await blogRepository.findById(id);
    if (!post) return res.status(HttpStatusCode.NotFound).json({ error: 'Blog post not found' });

    await blogRepository.remove(id);
    await blogService.deleteCoverImage(post.coverImageId);

    activityRepository.recordActivity({
      adminId: req.admin?.id,
      action: ActivityAction.Deleted,
      category: ActivityCategory.Blog,
      description: `Deleted blog post "${post.title}"`,
    });

    return res.status(HttpStatusCode.NoContent).send();
  }
}

export default new BlogController();
