import { Router } from 'express';
import { blogPostSchema, updateBlogPostSchema } from '../infrastructure/schemas/index.js';

import blog from '../controllers/blog.controller.js';
import validate from '../middleware/validate.js';
import auth from '../middleware/auth.js';
import paginate from '../middleware/paginate.js';
import upload from '../services/multer.service.js';

const router = Router();

router.use(auth);

router.get('/', [paginate], blog.list);
router.get('/stats', blog.stats);
router.get('/:id', blog.get);
router.post('/upload-image', [upload.single('image')], blog.uploadImage);
router.post('/', [upload.single('coverImage'), validate(blogPostSchema)], blog.create);
router.put('/:id', [upload.single('coverImage'), validate(updateBlogPostSchema)], blog.update);
router.delete('/:id', blog.remove);

export default router;
