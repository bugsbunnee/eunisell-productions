import { Router } from 'express';
import { enquirySchema } from '../infrastructure/schemas/index.js';

import contact from '../controllers/contact.controller.js';
import validate from '../middleware/validate.js';

const router = Router();

router.post('/enquiries', [validate(enquirySchema, 'body')], contact.submitEnquiry);

export default router;
