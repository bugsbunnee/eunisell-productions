import { HttpStatusCode } from 'axios';
import z from 'zod';

import { knowledgeResourceRepository } from '../repositories/knowledge-resource.repository.js';
import { ActivityAction, ActivityCategory, activityRepository } from '../repositories/activity.repository.js';
import { knowledgeResourceListQuerySchema } from '../infrastructure/schemas/index.js';
import { KNOWLEDGE_RESOURCE_FILE_MAX_BYTES } from '../infrastructure/utils/constants.js';

import knowledgeResourceService from '../services/knowledge-resource.service.js';

import type { Request, Response } from 'express';
import type { IKnowledgeResource, IUpdateKnowledgeResource } from '../infrastructure/schemas/index.js';

type UploadedFiles = Record<'coverImage' | 'file', Express.Multer.File[] | undefined>;

class KnowledgeResourceController {
  async list(req: Request, res: Response) {
    const query = knowledgeResourceListQuerySchema.safeParse(req.query);
    if (!query.success) return res.status(HttpStatusCode.BadRequest).json({ error: z.formatError(query.error) });

    const { resources, total } = await knowledgeResourceRepository.findMany(query.data, req.pagination.skip, req.pagination.limit);

    return res.json({ data: resources, total, page: req.pagination.page, limit: req.pagination.limit, totalPages: Math.max(1, Math.ceil(total / req.pagination.limit)) });
  }

  async stats(_req: Request, res: Response) {
    const [total, published, draft] = await knowledgeResourceRepository.stats();
    return res.json({ total, published, draft });
  }

  async get(req: Request, res: Response) {
    const resource = await knowledgeResourceRepository.findById(req.params.id as string);
    if (!resource) return res.status(HttpStatusCode.NotFound).json({ error: 'Resource not found' });

    return res.json(resource);
  }

  async create(req: Request, res: Response) {
    const body = req.body as IKnowledgeResource;
    const files = req.files as UploadedFiles;
    const coverFile = files?.coverImage?.[0];
    const brochureFile = files?.file?.[0];

    if (!coverFile) {
      return res.status(HttpStatusCode.BadRequest).json({ error: 'A cover image is required' });
    }

    if (!brochureFile) {
      return res.status(HttpStatusCode.BadRequest).json({ error: 'A resource file is required' });
    }

    if (brochureFile.size > KNOWLEDGE_RESOURCE_FILE_MAX_BYTES) {
      return res.status(HttpStatusCode.BadRequest).json({ error: `The resource file must be under ${Math.round(KNOWLEDGE_RESOURCE_FILE_MAX_BYTES / 1024)}KB` });
    }

    const [coverImageFields, fileFields] = await Promise.all([
      knowledgeResourceService.uploadCoverImage(coverFile.buffer),
      knowledgeResourceService.uploadFile(brochureFile.buffer),
    ]);

    const resource = await knowledgeResourceRepository.create({
      ...body,
      ...coverImageFields,
      ...fileFields,
      fileType: knowledgeResourceService.fileTypeFromName(brochureFile.originalname),
      publishedAt: body.status === 'PUBLISHED' ? new Date() : null,
      author: req.admin ? { connect: { id: req.admin.id } } : undefined,
    });

    activityRepository.recordActivity({
      adminId: req.admin?.id,
      action: ActivityAction.Created,
      category: ActivityCategory.KnowledgeResource,
      description: `Created knowledge resource "${resource.title}"`,
    });

    return res.status(HttpStatusCode.Created).json(resource);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const body = req.body as IUpdateKnowledgeResource;
    const files = req.files as UploadedFiles;
    const coverFile = files?.coverImage?.[0];
    const brochureFile = files?.file?.[0];

    const existingResource = await knowledgeResourceRepository.findById(id);
    if (!existingResource) return res.status(HttpStatusCode.NotFound).json({ error: 'Resource not found' });

    if (brochureFile && brochureFile.size > KNOWLEDGE_RESOURCE_FILE_MAX_BYTES) {
      return res.status(HttpStatusCode.BadRequest).json({ error: `The resource file must be under ${Math.round(KNOWLEDGE_RESOURCE_FILE_MAX_BYTES / 1024)}KB` });
    }

    let coverImageFields: { coverImage: string; coverImageId: string | null } | undefined;
    let fileFields: { file: string; fileId: string | null; fileSizeBytes: number; fileType: string } | undefined;

    if (coverFile) {
      coverImageFields = await knowledgeResourceService.uploadCoverImage(coverFile.buffer);
      await knowledgeResourceService.deleteCoverImage(existingResource.coverImageId);
    }

    if (brochureFile) {
      const uploaded = await knowledgeResourceService.uploadFile(brochureFile.buffer);
      fileFields = { ...uploaded, fileType: knowledgeResourceService.fileTypeFromName(brochureFile.originalname) };
      await knowledgeResourceService.deleteFile(existingResource.fileId);
    }

    const becomingPublished = body.status === 'PUBLISHED' && existingResource.status !== 'PUBLISHED';

    const resource = await knowledgeResourceRepository.update(id, {
      ...body,
      ...coverImageFields,
      ...fileFields,
      publishedAt: becomingPublished ? new Date() : undefined,
    });

    activityRepository.recordActivity({
      adminId: req.admin?.id,
      action: ActivityAction.Updated,
      category: ActivityCategory.KnowledgeResource,
      description: `Updated knowledge resource "${resource.title}"`,
    });

    return res.json(resource);
  }

  async remove(req: Request, res: Response) {
    const id = req.params.id as string;

    const resource = await knowledgeResourceRepository.findById(id);
    if (!resource) return res.status(HttpStatusCode.NotFound).json({ error: 'Resource not found' });

    await knowledgeResourceRepository.remove(id);
    await Promise.all([knowledgeResourceService.deleteCoverImage(resource.coverImageId), knowledgeResourceService.deleteFile(resource.fileId)]);

    activityRepository.recordActivity({
      adminId: req.admin?.id,
      action: ActivityAction.Deleted,
      category: ActivityCategory.KnowledgeResource,
      description: `Deleted knowledge resource "${resource.title}"`,
    });

    return res.status(HttpStatusCode.NoContent).send();
  }
}

export default new KnowledgeResourceController();
