import { FadeIn } from '../../common/motion';

import quoteBg from '/management-team/quote-bg.jpg';
import quoteIcon from '../../../assets/icons/management-team/quote-icon.svg';

const Quote: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <img src={quoteBg} alt="" className="absolute inset-0 size-full object-cover mix-blend-overlay opacity-20" />

      <FadeIn className="relative flex flex-col gap-6 items-center max-w-260 w-full">
        <img src={quoteIcon} alt="" className="w-10.5 h-12" />

        <p className="font-semibold italic text-white text-4xl text-center leading-[1.4]">
          &quot;Chika Ikenga provides leadership and strategic direction for the company, fostering a culture of innovation and unwavering commitment to client success.&quot;
        </p>

        <div className="bg-secondary h-1 w-15" />
      </FadeIn>
    </section>
  );
};

export default Quote;
