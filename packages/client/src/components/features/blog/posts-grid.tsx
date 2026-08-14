import { Stagger, StaggerItem } from '../../common/motion';
import arrowUpRightIcon from '../../../assets/icons/blog/arrow-up-right.svg';
import { POSTS, type Post } from './blog.constants';

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex flex-col gap-5 items-start">
    <div className="h-60 w-full rounded-lg overflow-hidden">
      <img src={post.image} alt="" className="size-full object-cover" />
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

const PostsGrid: React.FC = () => {
  return (
    <section className="flex flex-col gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-20 w-full">
      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 w-full">
        {POSTS.map((post) => (
          <StaggerItem key={post.title} hover>
            <PostCard post={post} />
          </StaggerItem>
        ))}
      </Stagger>

      <button type="button" className="border-2 border-secondary rounded-full px-10 py-4 font-bold text-secondary text-base">
        Load More Insights
      </button>
    </section>
  );
};

export default PostsGrid;
