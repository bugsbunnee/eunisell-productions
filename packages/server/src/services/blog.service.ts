import moment from 'moment';
import * as cloudinaryService from './cloudinary.service.js';

const BLOG_FOLDER = 'eunisell/blog';

class BlogService {
  slugify(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  async uploadCoverImage(buffer: Buffer) {
    const result = await cloudinaryService.uploadStream(buffer, BLOG_FOLDER);
    if (!result) throw new Error('Failed to upload cover image');

    return { coverImage: result.secure_url, coverImageId: result.public_id };
  }

  async deleteCoverImage(publicId?: string | null) {
    if (!publicId) return;
    await cloudinaryService.deleteFile(publicId).catch(() => undefined);
  }

  bucketByMonth(dates: { createdAt: Date }[], months: number) {
    const buckets = new Map<string, number>();
    const now = moment();

    for (let i = months - 1; i >= 0; i--) {
      buckets.set(now.clone().subtract(i, 'months').format('YYYY-MM'), 0);
    }

    for (const { createdAt } of dates) {
      const key = moment(createdAt).format('YYYY-MM');
      if (buckets.has(key)) buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }

    return Array.from(buckets.entries()).map(([key, count]) => ({
      month: moment(key, 'YYYY-MM').format('MMM'),
      posts: count,
    }));
  }
}

export default new BlogService();
