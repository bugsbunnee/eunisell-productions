import { Router } from 'express';
import { knowledgeResourceSchema, updateKnowledgeResourceSchema } from '../infrastructure/schemas/index.js';

import knowledgeResource from '../controllers/knowledge-resource.controller.js';
import validate from '../middleware/validate.js';
import auth from '../middleware/auth.js';
import paginate from '../middleware/paginate.js';
import upload from '../services/multer.service.js';

const router = Router();

router.use(auth);

const uploadFields = upload.fields([
  { name: 'coverImage', maxCount: 1 },
  { name: 'file', maxCount: 1 },
]);

router.get('/', [paginate], knowledgeResource.list);
router.get('/stats', knowledgeResource.stats);
router.get('/:id', knowledgeResource.get);
router.post('/', [uploadFields, validate(knowledgeResourceSchema)], knowledgeResource.create);
router.put('/:id', [uploadFields, validate(updateKnowledgeResourceSchema)], knowledgeResource.update);
router.delete('/:id', knowledgeResource.remove);

export default router;
