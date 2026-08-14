import { HttpStatusCode } from 'axios';
import z from 'zod';

import { blogRepository } from '../repositories/blog.repository.js';
import { blogListQuerySchema } from '../infrastructure/schemas/index.js';

import type { Request, Response } from 'express';

class PublicBlogController {
  async list(req: Request, res: Response) {
    const query = blogListQuerySchema.safeParse(req.query);

    if (!query.success) {
      return res.status(HttpStatusCode.BadRequest).json({ error: z.formatError(query.error) });
    }

    const response = await blogRepository.publicList(query.data, req.pagination.skip, req.pagination.limit);

    return res.json({
      data: response.posts,
      total: response.total,
      page: req.pagination.page,
      limit: req.pagination.limit,
      totalPages: Math.max(1, Math.ceil(response.total / req.pagination.limit)),
    });
  }

  async featured(_req: Request, res: Response) {
    const post = await blogRepository.featured();
    return res.json({ data: post });
  }

  async categories(_req: Request, res: Response) {
    const categories = await blogRepository.publishedCategories();
    return res.json({ data: categories });
  }

  async get(req: Request, res: Response) {
    const post = await blogRepository.publicFindBySlug(req.params.slug as string);

    if (!post) {
      return res.status(HttpStatusCode.NotFound).json({ error: 'Post not found' });
    }

    const related = await blogRepository.publicRelated(post.category, post.id, 3);

    return res.json({ data: post, related });
  }
}

export default new PublicBlogController();
