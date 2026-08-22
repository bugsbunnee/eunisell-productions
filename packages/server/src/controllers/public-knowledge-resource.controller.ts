import { HttpStatusCode } from 'axios';
import z from 'zod';

import { knowledgeResourceRepository } from '../repositories/knowledge-resource.repository.js';
import { knowledgeResourceListQuerySchema } from '../infrastructure/schemas/index.js';

import type { Request, Response } from 'express';

class PublicKnowledgeResourceController {
  async list(req: Request, res: Response) {
    const query = knowledgeResourceListQuerySchema.safeParse(req.query);

    if (!query.success) {
      return res.status(HttpStatusCode.BadRequest).json({ error: z.formatError(query.error) });
    }

    const response = await knowledgeResourceRepository.publicList(query.data, req.pagination.skip, req.pagination.limit);

    return res.json({
      data: response.resources,
      total: response.total,
      page: req.pagination.page,
      limit: req.pagination.limit,
      totalPages: Math.max(1, Math.ceil(response.total / req.pagination.limit)),
    });
  }

  async featured(_req: Request, res: Response) {
    const resource = await knowledgeResourceRepository.featured();
    return res.json({ data: resource });
  }

  async categories(_req: Request, res: Response) {
    const categories = await knowledgeResourceRepository.publishedCategories();
    return res.json({ data: categories });
  }
}

export default new PublicKnowledgeResourceController();
