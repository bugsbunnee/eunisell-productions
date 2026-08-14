import prisma from '../../prisma/index.js';

import type { IEnquiry } from '../infrastructure/schemas/index.js';

export const contactRepository = {
  createEnquiry(data: IEnquiry) {
    return prisma.contactEnquiry.create({ data });
  },
};
