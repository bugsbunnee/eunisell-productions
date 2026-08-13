import z from 'zod';

import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

type Target = 'body' | 'query';

const validate = (schema: z.ZodObject, target: Target = 'body') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.safeParse(req[target]);

    if (!validation.success) {
      return res.status(HttpStatusCode.BadRequest).json({ error: z.formatError(validation.error) });
    }

    if (target === 'body') {
      req[target] = validation.data;
    }

    next();
  };
};

export default validate;
