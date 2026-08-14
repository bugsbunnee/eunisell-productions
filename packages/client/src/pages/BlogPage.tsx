import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import publicBlogService from '../services/public-blog.service';

import Hero from '../components/features/blog/hero';
import FeaturedPost from '../components/features/blog/featured-post';
import CategoryFilter, { ALL_CATEGORIES } from '../components/features/blog/category-filter';
import PostsGrid from '../components/features/blog/posts-grid';
import NewsletterCta from '../components/features/blog/newsletter-cta';

const PAGE_SIZE = 9;

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timeout);
  }, [search]);

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['public-blog-categories'],
    queryFn: publicBlogService.categories,
  });

  const { data: featuredPost, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['public-blog-featured'],
    queryFn: publicBlogService.featured,
  });

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['public-blog-list', activeCategory, debouncedSearch],
    queryFn: ({ pageParam }) =>
      publicBlogService.list({
        page: pageParam,
        limit: PAGE_SIZE,
        category: activeCategory === ALL_CATEGORIES ? undefined : activeCategory,
        search: debouncedSearch || undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined),
  });

  const posts = (data?.pages ?? []).flatMap((batch) => batch.data).filter((post) => post.id !== featuredPost?.id);

  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedPost post={featuredPost} isLoading={isFeaturedLoading} />
      <CategoryFilter
        categories={categories ?? []}
        isLoading={isCategoriesLoading}
        active={activeCategory}
        onSelect={setActiveCategory}
        search={search}
        onSearchChange={setSearch}
      />
      <PostsGrid posts={posts} isLoading={isLoading} hasMore={!!hasNextPage} isLoadingMore={isFetchingNextPage} onLoadMore={() => fetchNextPage()} />
      <NewsletterCta />
    </div>
  );
};

export default BlogPage;
