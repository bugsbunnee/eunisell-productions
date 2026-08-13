import { HttpStatusCode } from 'axios';

import type { NextFunction, Request, Response } from 'express';
import type { Admin } from '../../prisma/generated/client.js';

import authService from '../services/auth.service.js';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized Request!' });
  }

  try {
    req.admin = authService.decodeToken(token) as Admin;

    next();
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ token: 'Invalid token' });
  }
};

export default auth;
