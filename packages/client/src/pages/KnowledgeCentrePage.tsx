import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import publicKnowledgeResourceService from '../services/public-knowledge-resource.service';

import Hero from '../components/features/knowledge-centre/hero';
import FeaturedBrochure from '../components/features/knowledge-centre/featured-brochure';
import Filter, { ALL_BROCHURES } from '../components/features/knowledge-centre/filter';
import ResourcesGrid from '../components/features/knowledge-centre/resources-grid';
import FinalCta from '../components/features/knowledge-centre/final-cta';

const PAGE_SIZE = 6;

const KnowledgeCentrePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_BROCHURES);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timeout);
  }, [search]);

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['public-knowledge-resource-categories'],
    queryFn: publicKnowledgeResourceService.categories,
  });

  const { data: featuredResource, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['public-knowledge-resource-featured'],
    queryFn: publicKnowledgeResourceService.featured,
  });

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['public-knowledge-resource-list', activeCategory, debouncedSearch],
    queryFn: ({ pageParam }) =>
      publicKnowledgeResourceService.list({
        page: pageParam,
        limit: PAGE_SIZE,
        category: activeCategory === ALL_BROCHURES ? undefined : activeCategory,
        search: debouncedSearch || undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined),
  });

  const resources = (data?.pages ?? []).flatMap((batch) => batch.data);

  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedBrochure resource={featuredResource} isLoading={isFeaturedLoading} />
      <Filter categories={categories ?? []} isLoading={isCategoriesLoading} active={activeCategory} onSelect={setActiveCategory} search={search} onSearchChange={setSearch} />
      <ResourcesGrid resources={resources} isLoading={isLoading} hasMore={!!hasNextPage} isLoadingMore={isFetchingNextPage} onLoadMore={() => fetchNextPage()} />
      <FinalCta />
    </div>
  );
};

export default KnowledgeCentrePage;
