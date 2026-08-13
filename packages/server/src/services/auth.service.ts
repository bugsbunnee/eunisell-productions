import React from 'react';

import WelcomeEmail from '../infrastructure/emails/welcome.js';
import RecentLoginEmail from '../infrastructure/emails/recent-login.js';

import _ from 'lodash';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import emailService from './email.service.js';
import logger from '../startup/logger.js';

import type { Admin } from '../../prisma/generated/client.js';
import { render } from '@react-email/components';

export interface LoginContext {
  loginTime: string;
  location: string;
  device: string;
  activityUrl?: string;
  secureAccountUrl?: string;
}

class AuthService {
  decodeToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!);
  }

  signPayload(payload: object, options?: jwt.SignOptions) {
    return jwt.sign(payload, process.env.JWT_SECRET!, options);
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async sendOnboardingEmail(admin: Admin, tempPassword: string) {
    const loginUrl = `${process.env.CLIENT_URL}/admin/login`;
    const html = await render(React.createElement(WelcomeEmail, { firstName: admin.firstName, tempPassword, loginUrl }));

    try {
      await emailService.sendMail({
        to: admin.email,
        subject: 'Welcome to Eunisell Admin Dashboard',
        html,
      });
    } catch (error) {
      logger.info('Failed to send the email', error);
    }
  }

  async sendLoginAlert(admin: Admin, ctx: LoginContext) {
    const element = React.createElement(RecentLoginEmail, {
      firstName: admin.firstName,
      loginTime: ctx.loginTime,
      location: ctx.location,
      device: ctx.device,
      activityUrl: ctx.activityUrl ?? `${process.env.CLIENT_URL}/admin/activity`,
      secureAccountUrl: ctx.secureAccountUrl ?? `${process.env.CLIENT_URL}/admin/security`,
    });

    const html = await render(element);

    try {
      await emailService.sendMail({
        to: admin.email,
        subject: 'New Login Detected — Eunisell Admin',
        html,
      });
    } catch (error) {
      logger.info('Failed to send login alert email', error);
    }
  }
}

export default new AuthService();
