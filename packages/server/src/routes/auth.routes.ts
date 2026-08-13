import { Router } from 'express';
import { authSchema, registerSchema } from '../infrastructure/schemas/index.js';

import auth from '../controllers/auth.controller.js';
import validate from '../middleware/validate.js';

const router = Router();

router.post('/login', [validate(authSchema, 'body')], auth.login);
router.post('/register', [validate(registerSchema, 'body')], auth.register);

export default router;
