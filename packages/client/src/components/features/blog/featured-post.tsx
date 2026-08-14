import { FadeIn } from '../../common/motion';
import clockIcon from '../../../assets/icons/blog/clock.svg';
import arrowRightIcon from '../../../assets/icons/blog/arrow-right-lg.svg';
import { FEATURED_POST } from './blog.constants';

const FeaturedPost: React.FC = () => {
  return (
    <section className="px-9 md:px-16 lg:px-36 pb-16 lg:pb-20">
      <FadeIn className="bg-ice-blue grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-[0px_32px_32px_-16px_rgba(0,32,55,0.08)]">
        <div className="h-80 lg:h-130 w-full">
          <img src={FEATURED_POST.image} alt="Aerial view of an offshore oil production platform at dusk" className="size-full object-cover" />
        </div>

        <div className="flex flex-col items-start justify-center gap-6 px-9 md:px-16 lg:px-20 py-12 lg:py-0">
          <p className="font-bold text-secondary text-sm tracking-[1.4px] uppercase">{FEATURED_POST.category}</p>

          <h2 className="font-semibold text-accent text-3xl md:text-4xl leading-[1.2] tracking-[-0.07px]">{FEATURED_POST.title}</h2>

          <p className="font-normal text-navy-subtle text-base leading-[1.6]">{FEATURED_POST.excerpt}</p>

          <div className="flex gap-6 items-center pt-3">
            <div className="flex gap-2 items-center">
              <img src={clockIcon} alt="" className="size-3.5" />
              <span className="font-normal text-navy-subtle text-sm">{FEATURED_POST.readTime}</span>
            </div>

            <button type="button" className="flex gap-3 items-center group">
              <span className="font-bold text-secondary text-sm tracking-[0.7px] uppercase">Read Article</span>
              <img src={arrowRightIcon} alt="" className="w-3 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default FeaturedPost;
