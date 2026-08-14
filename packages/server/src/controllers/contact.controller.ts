import { HttpStatusCode } from 'axios';

import { contactRepository } from '../repositories/contact.repository.js';
import contactService from '../services/contact.service.js';

import type { Request, Response } from 'express';
import type { IEnquiry } from '../infrastructure/schemas/index.js';

class ContactController {
  async submitEnquiry(req: Request, res: Response) {
    const body = req.body as IEnquiry;
    const enquiry = await contactRepository.createEnquiry(body);

    contactService.sendEnquiryNotification(enquiry);

    return res.status(HttpStatusCode.Created).json(enquiry);
  }
}

export default new ContactController();
