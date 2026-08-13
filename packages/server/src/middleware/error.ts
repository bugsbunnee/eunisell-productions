import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

import logger from '../startup/logger.js';

function error(error: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(error);

  return res.status(HttpStatusCode.InternalServerError).json({ message: error.message });
}

export default error;
