import express from 'express';
import logger from './startup/logger.js';
import registerApp from './startup/index.js';

import 'dotenv/config';

const app = registerApp();
const port = Number(process.env.PORT) || 8080;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

export default app;
