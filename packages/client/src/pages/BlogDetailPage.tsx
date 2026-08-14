import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FadeIn } from '../components/common/motion';
import { paths } from '../lib/data';

import chevronRight from '../assets/icons/blog/chevron-right.svg';
import publicBlogService from '../services/public-blog.service';

import BlogMetaBar from '../components/features/blog/blog-meta-bar';
import BlogRelatedPosts from '../components/features/blog/blog-related-posts';
import BlogDetailSkeleton from '../components/features/blog/blog-detail-skeleton';
import Cta from '../components/features/service-detail/cta';
import DOMPurify from 'dompurify';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['public-blog-post', slug],
    queryFn: () => publicBlogService.get(slug as string),
    enabled: !!slug,
  });

  const sanitizedContent = useMemo(() => {
    return data?.post ? DOMPurify.sanitize(data.post.content) : '';
  }, [data]);

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  if (!data?.post) {
    return (
      <div className="flex flex-col items-center gap-6 px-9 py-32 text-center">
        <h1 className="font-bold text-accent text-3xl">Post not found</h1>
        <p className="text-navy-subtle text-base max-w-md">This article may have been moved or unpublished. Head back to the blog to keep reading.</p>
        <Link to={paths.blog} className="bg-secondary rounded-full px-8 py-3 text-sm font-bold text-white uppercase tracking-[0.7px]">
          Back to Blog
        </Link>
      </div>
    );
  }

  const { post, related } = data;
  const authorName = post.author ? `${post.author.firstName} ${post.author.lastName}` : 'Eunisell Editorial Team';

  return (
    <div className="flex flex-col">
      <section className="bg-surface flex flex-col items-center pt-10 pb-20 px-9 md:px-16 lg:px-36">
        <FadeIn className="flex flex-col gap-6 items-start w-full">
          <nav className="flex gap-3 items-center flex-wrap">
            <Link to={paths.home} className="text-sm text-navy-subtle">
              Home
            </Link>
            <img src={chevronRight} alt="" className="w-1.5 h-2.5" />
            <Link to={paths.blog} className="text-sm text-navy-subtle">
              Blog
            </Link>
            <img src={chevronRight} alt="" className="w-1.5 h-2.5" />
            <span className="text-sm font-medium text-secondary">{post.category}</span>
          </nav>

          <span className="inline-flex items-start bg-secondary text-white font-bold text-xs tracking-[0.6px] uppercase rounded-xs px-3 py-1">{post.category}</span>

          <h1 className="font-bold text-accent text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-tight max-w-4xl">{post.title}</h1>

          <p className="font-semibold text-navy-subtle text-xl md:text-2xl leading-[1.35] max-w-3xl">{post.excerpt}</p>

          <div className="h-72 md:h-96 lg:h-154 w-full rounded-2xl overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <img src={post.coverImage} alt="" className="size-full object-cover" />
          </div>
        </FadeIn>
      </section>

      <BlogMetaBar publishedAt={post.publishedAt} readTime={post.readTime} authorName={authorName} />

      <article className="flex flex-col px-9 md:px-16 lg:px-36 py-16">
        <div className="blog-article-content max-w-200 mx-auto w-full" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </article>

      <BlogRelatedPosts posts={related} />

      <Cta
        heading="Improve Your Production Performance"
        description="Partner with Nigeria's leading production solutions company to enhance your asset reliability and maximize your production targets."
        primaryLabel="Contact Our Production Solutions Team"
        secondaryLabel="Request a Technical Consultation"
        badges={[]}
      />
    </div>
  );
};

export default BlogDetailPage;
