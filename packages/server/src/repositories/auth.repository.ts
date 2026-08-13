import _ from 'lodash';
import prisma from '../../prisma/index.js';

import type { IRegister } from '../infrastructure/schemas/index.js';

export const authRepository = {
  getAdminByEmail(email: string) {
    return prisma.admin.findUnique({ where: { email } });
  },

  createAdmin(data: Omit<IRegister, 'confirmPassword'>) {
    return prisma.admin.create({ data });
  },
};
