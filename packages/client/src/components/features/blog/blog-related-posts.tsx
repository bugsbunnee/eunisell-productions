import { Link } from 'react-router-dom';
import { Stagger, StaggerItem } from '../../common/motion';
import { paths } from '../../../lib/data';
import type { PublicBlogPost } from '../../../services/public-blog.service';

import arrowUpRightIcon from '../../../assets/icons/blog/arrow-up-right.svg';
import arrowRightIcon from '../../../assets/icons/blog/arrow-right-lg.svg';

interface BlogRelatedPostsProps {
  posts: Omit<PublicBlogPost, 'featured'>[];
}

const BlogRelatedPosts: React.FC<BlogRelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <section className="bg-surface flex flex-col gap-12 px-9 md:px-16 lg:px-36 py-16 lg:py-20">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-end justify-between">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-secondary text-sm tracking-[1.4px] uppercase">More from Eunisell</p>
          <h2 className="font-bold text-accent text-3xl md:text-4xl lg:text-5xl tracking-[-0.09px]">Continue Reading</h2>
        </div>

        <Link to={paths.blog} className="flex gap-3 items-center group shrink-0">
          <span className="font-bold text-secondary text-base uppercase whitespace-nowrap">View All Insights</span>
          <img src={arrowRightIcon} alt="" className="w-3.5 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {posts.map((post) => (
          <StaggerItem key={post.id} hover>
            <Link to={paths.blogPost(post.slug)} className="flex flex-col bg-white border border-line rounded-2xl shadow-xs overflow-hidden h-full">
              <div className="h-60 w-full">
                <img src={post.coverImage} alt="" className="size-full object-cover" />
              </div>

              <div className="flex flex-col gap-4 p-8">
                <p className="font-bold text-navy-subtle text-xs tracking-[0.6px] uppercase">{post.category}</p>
                <h3 className="font-semibold text-accent text-2xl leading-[1.3]">{post.title}</h3>

                <span className="flex gap-3 items-center">
                  <span className="font-semibold text-secondary text-base">Read Article</span>
                  <img src={arrowUpRightIcon} alt="" className="w-3 h-3.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default BlogRelatedPosts;
