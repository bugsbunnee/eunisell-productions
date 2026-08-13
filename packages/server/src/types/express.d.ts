import type { Admin } from '../../prisma/generated/client.js';
import type { Pagination } from '../infrastructure/utils/entities.js';

export type {};

declare global {
  namespace Express {
    interface Request {
      admin?: Admin;
      pagination: Pagination;
    }
  }
}
