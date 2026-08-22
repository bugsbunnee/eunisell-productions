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
import DOMPurify from 'dompurify';

import ctaWatermark from '../assets/icons/blog/detail-cta-watermark.svg';
import arrowRightWhite from '../assets/icons/blog/arrow-right-white.svg';

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

          <h1 className="font-light text-accent text-[40px] md:text-[50px] lg:text-[60px] leading-[1.32] max-w-4xl">{post.title}</h1>

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

      <section className="relative bg-accent overflow-hidden flex flex-col items-center px-9 md:px-16 lg:px-25 py-16 lg:py-30">
        <img src={ctaWatermark} alt="" className="absolute top-0 right-0 w-125 h-250 opacity-10 pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-310 w-full px-8">
          <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight text-center max-w-200 pb-6">Improve Your Production Performance</h2>

          <p className="font-normal text-navy-subtle text-base md:text-lg lg:text-xl leading-8 text-center max-w-162.5 pb-12">
            Partner with Nigeria&apos;s leading production solutions company to enhance your asset reliability and maximize your production targets.
          </p>

          <div className="flex flex-wrap gap-6 items-center justify-center">
            <Link
              to={paths.contact}
              className="bg-secondary rounded-full px-10 py-5 flex gap-3 items-center justify-center font-bold text-white text-sm md:text-base uppercase whitespace-nowrap"
            >
              Contact Our Production Solutions Team
              <img src={arrowRightWhite} alt="" className="w-3.5 h-4" />
            </Link>

            <Link
              to={paths.contact}
              className="border border-white rounded-full px-10 py-5 flex items-center justify-center font-bold text-white text-sm md:text-base uppercase whitespace-nowrap"
            >
              Request a Technical Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
