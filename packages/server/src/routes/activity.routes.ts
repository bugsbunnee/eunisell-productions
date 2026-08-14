import { Router } from 'express';

import activity from '../controllers/activity.controller.js';
import auth from '../middleware/auth.js';

const router = Router();

router.use(auth);
router.get('/recent', activity.recent);

export default router;
