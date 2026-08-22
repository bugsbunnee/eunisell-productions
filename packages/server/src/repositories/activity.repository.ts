import prisma from '../../prisma/index.js';

export enum ActivityAction {
  Login = 'login',
  Created = 'created',
  Updated = 'updated',
  Deleted = 'deleted',
}

export enum ActivityCategory {
  Auth = 'auth',
  Blog = 'blog',
  KnowledgeResource = 'knowledge-resource',
}

export interface ActivityData {
  adminId?: string | null;
  category: ActivityCategory;
  action: ActivityAction;
  description: string;
}

export const activityRepository = {
  async recordActivity(data: ActivityData) {
    return prisma.activityLog.create({
      data: {
        adminId: data.adminId || null,
        action: data.action,
        category: data.category,
        description: data.description,
      },
    });
  },

  async recent(limit: number) {
    return prisma.activityLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: { id: true, action: true, category: true, description: true, createdAt: true },
    });
  },
};
