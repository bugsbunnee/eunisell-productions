import type { NextFunction, Request, Response } from 'express';

const paginate = (req: Request, _res: Response, next: NextFunction) => {
  const page = Math.max(1, parseInt(req.query.page as string) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 10));

  req.pagination = { page, limit, skip: (page - 1) * limit };

  next();
};

export default paginate;
