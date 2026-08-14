import { Router } from 'express';

import publicBlog from '../controllers/public-blog.controller.js';
import paginate from '../middleware/paginate.js';

const router = Router();

router.get('/', [paginate], publicBlog.list);
router.get('/featured', publicBlog.featured);
router.get('/categories', publicBlog.categories);

export default router;
