import Hero from '../components/features/blog/hero';
import FeaturedPost from '../components/features/blog/featured-post';
import CategoryFilter from '../components/features/blog/category-filter';
import PostsGrid from '../components/features/blog/posts-grid';
import NewsletterCta from '../components/features/blog/newsletter-cta';

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedPost />
      <CategoryFilter />
      <PostsGrid />
      <NewsletterCta />
    </div>
  );
};

export default BlogPage;
