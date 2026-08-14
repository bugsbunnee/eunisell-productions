import express, { type Express } from 'express';

import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import auth from '../routes/auth.routes.js';
import contact from '../routes/contact.routes.js';

import error from '../middleware/error.js';

const registerRoutes = (app: Express) => {
  app.use(
    cors({
      origin: [process.env.CLIENT_URL ?? 'http://localhost:5173'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  );

  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));

  app.use('/api/v1/auth', auth);
  app.use('/api/v1/contact', contact);

  app.use(error);
};

export default registerRoutes;
