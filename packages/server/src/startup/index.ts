import express from 'express';
import registerConfig from './config.js';
import registerRoutes from './routes.js';

const registerApp = () => {
  const app = express();

  registerConfig();
  registerRoutes(app);

  return app;
};

export default registerApp;
