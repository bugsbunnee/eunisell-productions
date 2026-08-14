import { FadeIn } from '../../common/motion';
import { Skeleton } from '../../ui/skeleton';
import type { PublicBlogPost } from '../../../services/public-blog.service';

import clockIcon from '../../../assets/icons/blog/clock.svg';
import arrowRightIcon from '../../../assets/icons/blog/arrow-right-lg.svg';

interface FeaturedPostProps {
  post: PublicBlogPost | null | undefined;
  isLoading: boolean;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, isLoading }) => {
  if (!isLoading && !post) return null;

  return (
    <section className="px-9 md:px-16 lg:px-36 pb-16 lg:pb-20">
      <FadeIn className="bg-ice-blue grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-[0px_32px_32px_-16px_rgba(0,32,55,0.08)]">
        <div className="h-80 lg:h-130 w-full">
          {isLoading || !post ? <Skeleton className="size-full rounded-none" /> : <img src={post.coverImage} alt="" className="size-full object-cover" />}
        </div>

        <div className="flex flex-col items-start justify-center gap-6 px-9 md:px-16 lg:px-20 py-12 lg:py-0">
          {isLoading || !post ? (
            <div className="flex w-full flex-col gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : (
            <>
              <p className="font-bold text-secondary text-sm tracking-[1.4px] uppercase">{post.category}</p>

              <h2 className="font-semibold text-accent text-3xl md:text-4xl leading-[1.2] tracking-[-0.07px]">{post.title}</h2>

              <p className="font-normal text-navy-subtle text-base leading-[1.6]">{post.excerpt}</p>

              <div className="flex gap-6 items-center pt-3">
                <div className="flex gap-2 items-center">
                  <img src={clockIcon} alt="" className="size-3.5" />
                  <span className="font-normal text-navy-subtle text-sm">{post.readTime}</span>
                </div>

                <button type="button" className="flex gap-3 items-center group">
                  <span className="font-bold text-secondary text-sm tracking-[0.7px] uppercase">Read Article</span>
                  <img src={arrowRightIcon} alt="" className="w-3 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default FeaturedPost;
