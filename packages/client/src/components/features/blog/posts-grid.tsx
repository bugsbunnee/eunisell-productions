import type { PublicBlogPost } from '../../../services/public-blog.service';

import { Stagger, StaggerItem } from '../../common/motion';
import { Skeleton } from '../../ui/skeleton';

import arrowUpRightIcon from '../../../assets/icons/blog/arrow-up-right.svg';

const PostCard: React.FC<{ post: PublicBlogPost }> = ({ post }) => (
  <article className="flex flex-col gap-5 items-start">
    <div className="h-60 w-full rounded-lg overflow-hidden">
      <img src={post.coverImage} alt="" className="size-full object-cover" />
    </div>

    <div className="flex flex-col gap-3 items-start w-full">
      <p className="font-bold text-secondary text-xs uppercase">{post.category}</p>
      <h3 className="font-semibold text-accent text-2xl leading-[1.3]">{post.title}</h3>
      <p className="font-normal text-navy-subtle text-sm leading-normal line-clamp-2">{post.excerpt}</p>

      <div className="flex items-center justify-between w-full pt-2">
        <span className="font-normal text-navy-subtle text-xs">{post.readTime}</span>
        <img src={arrowUpRightIcon} alt="" className="w-3.5 h-4" />
      </div>
    </div>
  </article>
);

const PostCardSkeleton: React.FC = () => (
  <div className="flex flex-col gap-5 items-start">
    <Skeleton className="h-60 w-full rounded-lg" />
    <div className="flex flex-col gap-3 items-start w-full">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-7 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

interface PostsGridProps {
  posts: PublicBlogPost[];
  isLoading: boolean;
  hasMore: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts, isLoading, hasMore, isLoadingMore, onLoadMore }) => {
  return (
    <section className="flex flex-col gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-20 w-full">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-navy-subtle text-base">No insights match this filter yet — try a different category or search term.</p>
      ) : (
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 w-full">
          {posts.map((post) => (
            <StaggerItem key={post.id} hover>
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {hasMore && (
        <button
          type="button"
          onClick={onLoadMore}
          disabled={isLoadingMore}
          className="border-2 border-secondary rounded-full px-10 py-4 font-bold text-secondary text-base disabled:opacity-50 disabled:pointer-events-none"
        >
          {isLoadingMore ? 'Loading…' : 'Load More Insights'}
        </button>
      )}
    </section>
  );
};

export default PostsGrid;
