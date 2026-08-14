import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { scrollToView } from '../../../lib/utils';
import heroImg from '/contact/hero-control-room.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center px-9 md:px-16 lg:px-[144px] py-16 lg:py-0 lg:min-h-[800px] overflow-hidden">
      <div className="absolute bg-surface opacity-50 -right-100 -top-50 rounded-full size-200 pointer-events-none" />

      <div className="relative flex flex-col gap-8 items-start w-full lg:max-w-[700px] lg:shrink-0">
        <div className="flex gap-3 items-center">
          <Link to={paths.home} className="font-light text-secondary text-sm tracking-[0.02px]">
            Home
          </Link>
          <span className="font-light text-muted text-sm">/</span>
          <span className="font-light text-muted text-sm tracking-[-0.03px]">Contact Us</span>
        </div>

        <div className="flex flex-col gap-4 items-start min-w-0 w-full">
          <p className="font-light text-secondary text-base tracking-[4px] uppercase">Contact</p>

          <h1 className="font-light text-accent text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-2px]">
            Contact Our
            <br />
            Production
            <br />
            <span className="text-secondary">Solutions Team</span>
          </h1>

          <p className="font-light text-navy-subtle text-lg lg:text-xl leading-8 tracking-[-0.06px] max-w-135">
            Expert guidance for your energy assets. Reach out to discuss technical requirements or operational support.
          </p>
        </div>

        <div className="flex gap-6 items-center pt-2">
          <button
            type="button"
            onClick={() => scrollToView('enquiry-form')}
            className="bg-secondary rounded-full px-10 py-5 font-light text-white text-base tracking-[0.05px] whitespace-nowrap"
          >
            Request a Technical Consultation
          </button>
          <div className="bg-secondary h-0.5 w-12 hidden sm:block" />
        </div>
      </div>

      <div className="relative flex-1 w-full min-w-0">
        <div className="w-full relative h-100 md:h-125 lg:h-[600px] rounded-3xl overflow-hidden shadow-[0px_32px_64px_0px_rgba(0,16,32,0.1)]">
          <img src={heroImg} alt="Petroleum engineers in a control room discussing technical operations" className="absolute inset-0 size-full object-cover" />
        </div>

        <div className="hidden md:flex absolute -bottom-10 -left-10 max-w-70 flex-col items-start bg-white border border-line pl-6 pr-9 py-6 rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <p className="font-light text-accent text-sm leading-[1.5]">Direct collaboration with our lead engineers in the field.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
