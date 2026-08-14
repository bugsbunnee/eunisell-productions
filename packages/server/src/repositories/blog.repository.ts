import prisma from '../../prisma/index.js';
import type { Prisma } from '../../prisma/generated/client.js';
import type { IBlogListQuery } from '../infrastructure/schemas/index.js';

export const blogRepository = {
  async findMany(filters: IBlogListQuery, skip: number, take: number) {
    const where: Prisma.BlogPostWhereInput = {
      status: filters.status,
      category: filters.category,
      ...(filters.search
        ? {
            OR: [
              { title: { contains: filters.search, mode: 'insensitive' } },
              { category: { contains: filters.search, mode: 'insensitive' } },
              { excerpt: { contains: filters.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: filters.sort },
        include: { author: { select: { firstName: true, lastName: true } } },
      }),
      prisma.blogPost.count({ where }),
    ]);

    return { posts, total };
  },

  findById(id: string) {
    return prisma.blogPost.findUnique({ where: { id }, include: { author: { select: { firstName: true, lastName: true } } } });
  },

  findBySlug(slug: string, excludeId?: string) {
    return prisma.blogPost.findFirst({ where: { slug, id: excludeId ? { not: excludeId } : undefined } });
  },

  create(data: Prisma.BlogPostCreateInput) {
    return prisma.blogPost.create({ data });
  },

  update(id: string, data: Prisma.BlogPostUpdateInput) {
    return prisma.blogPost.update({ where: { id }, data });
  },

  remove(id: string) {
    return prisma.blogPost.delete({ where: { id } });
  },

  stats() {
    return prisma.$transaction([prisma.blogPost.count(), prisma.blogPost.count({ where: { status: 'PUBLISHED' } }), prisma.blogPost.count({ where: { status: 'DRAFT' } })]);
  },

  recentActivity(take: number) {
    return prisma.blogPost.findMany({
      take,
      orderBy: { updatedAt: 'desc' },
      select: { id: true, title: true, status: true, updatedAt: true, createdAt: true },
    });
  },

  createdSince(since: Date) {
    return prisma.blogPost.findMany({ where: { createdAt: { gte: since } }, select: { createdAt: true, status: true } });
  },

  async categoryBreakdown() {
    const rows = await prisma.blogPost.groupBy({ by: ['category'], _count: { _all: true } });
    return rows.map((row) => ({ category: row.category, count: row._count._all })).sort((a, b) => b.count - a.count);
  },

  async publicList(filters: { search?: string; category?: string; sort: 'asc' | 'desc' }, skip: number, take: number) {
    const where: Prisma.BlogPostWhereInput = {
      status: 'PUBLISHED',
      category: filters.category,
      ...(filters.search
        ? {
            OR: [
              { title: { contains: filters.search, mode: 'insensitive' } },
              { category: { contains: filters.search, mode: 'insensitive' } },
              { excerpt: { contains: filters.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const select = {
      id: true,
      title: true,
      slug: true,
      category: true,
      excerpt: true,
      readTime: true,
      coverImage: true,
      featured: true,
      publishedAt: true,
      createdAt: true,
    } satisfies Prisma.BlogPostSelect;

    const [posts, total] = await Promise.all([prisma.blogPost.findMany({ where, skip, take, orderBy: { publishedAt: filters.sort }, select }), prisma.blogPost.count({ where })]);

    return { posts, total };
  },

  publicFindBySlug(slug: string) {
    return prisma.blogPost.findFirst({
      where: { slug, status: 'PUBLISHED' },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        excerpt: true,
        content: true,
        readTime: true,
        coverImage: true,
        publishedAt: true,
        createdAt: true,
        author: { select: { firstName: true, lastName: true } },
      },
    });
  },

  publicRelated(category: string, excludeId: string, take: number) {
    return prisma.blogPost.findMany({
      where: { status: 'PUBLISHED', category, id: { not: excludeId } },
      orderBy: { publishedAt: 'desc' },
      take,
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        excerpt: true,
        readTime: true,
        coverImage: true,
        publishedAt: true,
      },
    });
  },

  featured() {
    return prisma.blogPost.findFirst({
      where: { status: 'PUBLISHED', featured: true },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        excerpt: true,
        readTime: true,
        coverImage: true,
        publishedAt: true,
      },
    });
  },

  async publishedCategories() {
    const rows = await prisma.blogPost.groupBy({ by: ['category'], where: { status: 'PUBLISHED' } });
    return rows.map((row) => row.category).sort((a, b) => a.localeCompare(b));
  },
};
