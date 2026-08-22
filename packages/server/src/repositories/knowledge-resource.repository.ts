import prisma from '../../prisma/index.js';
import type { Prisma } from '../../prisma/generated/client.js';
import type { IKnowledgeResourceListQuery } from '../infrastructure/schemas/index.js';

export const knowledgeResourceRepository = {
  async findMany(filters: IKnowledgeResourceListQuery, skip: number, take: number) {
    const where: Prisma.KnowledgeResourceWhereInput = {
      status: filters.status,
      category: filters.category,
      ...(filters.search
        ? {
            OR: [
              { title: { contains: filters.search, mode: 'insensitive' } },
              { category: { contains: filters.search, mode: 'insensitive' } },
              { description: { contains: filters.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [resources, total] = await Promise.all([
      prisma.knowledgeResource.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: filters.sort },
        include: { author: { select: { firstName: true, lastName: true } } },
      }),
      prisma.knowledgeResource.count({ where }),
    ]);

    return { resources, total };
  },

  findById(id: string) {
    return prisma.knowledgeResource.findUnique({ where: { id }, include: { author: { select: { firstName: true, lastName: true } } } });
  },

  create(data: Prisma.KnowledgeResourceCreateInput) {
    return prisma.knowledgeResource.create({ data });
  },

  update(id: string, data: Prisma.KnowledgeResourceUpdateInput) {
    return prisma.knowledgeResource.update({ where: { id }, data });
  },

  remove(id: string) {
    return prisma.knowledgeResource.delete({ where: { id } });
  },

  stats() {
    return prisma.$transaction([
      prisma.knowledgeResource.count(),
      prisma.knowledgeResource.count({ where: { status: 'PUBLISHED' } }),
      prisma.knowledgeResource.count({ where: { status: 'DRAFT' } }),
    ]);
  },

  async publicList(filters: { search?: string; category?: string; sort: 'asc' | 'desc' }, skip: number, take: number) {
    const where: Prisma.KnowledgeResourceWhereInput = {
      status: 'PUBLISHED',
      category: filters.category,
      ...(filters.search
        ? {
            OR: [
              { title: { contains: filters.search, mode: 'insensitive' } },
              { category: { contains: filters.search, mode: 'insensitive' } },
              { description: { contains: filters.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const select = {
      id: true,
      title: true,
      category: true,
      description: true,
      coverImage: true,
      file: true,
      fileType: true,
      fileSizeBytes: true,
      featured: true,
      publishedAt: true,
      createdAt: true,
    } satisfies Prisma.KnowledgeResourceSelect;

    const [resources, total] = await Promise.all([
      prisma.knowledgeResource.findMany({ where, skip, take, orderBy: { publishedAt: filters.sort }, select }),
      prisma.knowledgeResource.count({ where }),
    ]);

    return { resources, total };
  },

  featured() {
    return prisma.knowledgeResource.findFirst({
      where: { status: 'PUBLISHED', featured: true },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        category: true,
        description: true,
        coverImage: true,
        file: true,
        fileType: true,
        fileSizeBytes: true,
        publishedAt: true,
      },
    });
  },

  async publishedCategories() {
    const rows = await prisma.knowledgeResource.groupBy({ by: ['category'], where: { status: 'PUBLISHED' } });
    return rows.map((row) => row.category).sort((a, b) => a.localeCompare(b));
  },
};
