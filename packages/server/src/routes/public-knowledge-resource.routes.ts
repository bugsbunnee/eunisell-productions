import { Router } from 'express';

import publicKnowledgeResource from '../controllers/public-knowledge-resource.controller.js';
import paginate from '../middleware/paginate.js';

const router = Router();

router.get('/', [paginate], publicKnowledgeResource.list);
router.get('/featured', publicKnowledgeResource.featured);
router.get('/categories', publicKnowledgeResource.categories);

export default router;
