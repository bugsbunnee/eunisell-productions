import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';
import chevronRight from '../../../assets/icons/blog/chevron-right.svg';
import heroImg from '/blog/hero-control-room.png';

const Hero: React.FC = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row gap-12 lg:gap-25 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-24">
      <FadeIn className="flex flex-col gap-8 items-start flex-1 min-w-0 w-full">
        <div className="flex flex-col gap-3 items-start w-full">
          <nav className="flex gap-3 items-center">
            <Link to={paths.home} className="font-medium text-navy-subtle text-sm tracking-[0.7px] uppercase">
              Home
            </Link>
            <img src={chevronRight} alt="" className="w-1.5 h-2.5" />
            <span className="font-medium text-secondary text-sm tracking-[0.7px] uppercase">Blog</span>
          </nav>

          <p className="font-bold text-secondary text-sm tracking-[2.8px] uppercase">Insights</p>

          <h1 className="font-bold text-accent text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1]">
            Insights &amp;
            <br />
            Perspectives
          </h1>
        </div>

        <p className="font-normal text-navy-subtle text-lg leading-[1.6] max-w-140">
          Deep dives into engineering excellence and production operations. Explore how we&rsquo;re optimizing assets and driving technical innovation across the African energy
          landscape.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="relative flex-1 min-w-0 w-full">
        <div className="relative h-100 md:h-120 rounded-lg overflow-hidden">
          <img src={heroImg} alt="Engineers in a high-tech control room monitoring oil and gas facility operations" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="hidden md:block absolute inset-y-4 left-4 -right-4 -bottom-4 border-b-2 border-r-2 border-secondary/20 pointer-events-none" />
      </FadeIn>
    </section>
  );
};

export default Hero;
