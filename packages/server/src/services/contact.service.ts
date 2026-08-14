import React from 'react';
import EnquiryNotificationEmail from '../infrastructure/emails/enquiry-notification.js';

import dayjs from 'dayjs';
import emailService from './email.service.js';
import logger from '../startup/logger.js';

import { render } from '@react-email/components';
import type { ContactEnquiry } from '../../prisma/generated/client.js';
import { EMAILS } from '../infrastructure/utils/constants.js';

class ContactService {
  async sendEnquiryNotification(enquiry: ContactEnquiry) {
    const html = await render(
      React.createElement(EnquiryNotificationEmail, {
        fullName: enquiry.fullName,
        companyName: enquiry.companyName,
        jobTitle: enquiry.jobTitle ?? undefined,
        email: enquiry.email,
        phone: enquiry.phone ?? undefined,
        country: enquiry.country,
        serviceOfInterest: enquiry.serviceOfInterest,
        projectLocation: enquiry.projectLocation ?? undefined,
        projectStage: enquiry.projectStage,
        subject: enquiry.subject ?? undefined,
        message: enquiry.message,
        submittedAt: dayjs(enquiry.createdAt).format('D MMMM YYYY, h:mm A'),
      })
    );

    try {
      await emailService.sendMail({
        to: EMAILS.ADMIN,
        replyTo: enquiry.email,
        subject: `New Project Enquiry — ${enquiry.companyName}`,
        html,
      });
    } catch (error) {
      logger.info('Failed to send enquiry notification email', error);
    }
  }
}

export default new ContactService();
