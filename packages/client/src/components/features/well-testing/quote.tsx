import decor1 from '../../../assets/icons/well-testing/quote-decor-1.svg';
import decor2 from '../../../assets/icons/well-testing/quote-decor-2.svg';
import quoteIcon from '../../../assets/icons/well-testing/quote-icon.svg';

const Quote: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgb(255, 255, 255) 1.6667%, rgba(255, 255, 255, 0) 1.6667%), linear-gradient(90deg, rgb(255, 255, 255) 1.6667%, rgba(255, 255, 255, 0) 1.6667%)',
        }}
      />
      <img src={decor1} alt="" className="absolute -right-20 -top-20 size-100 opacity-3" />
      <img src={decor2} alt="" className="absolute -left-15 -bottom-15 size-75 opacity-3" />

      <div className="relative flex flex-col gap-10 items-center w-full">
        <div className="bg-secondary h-0.5 w-20" />
        <div className="bg-secondary rounded-xl flex items-center justify-center shrink-0 size-16">
          <img src={quoteIcon} alt="" className="w-7 h-4" />
        </div>
        <p className="font-light text-white text-2xl md:text-3xl lg:text-[40px] text-center leading-[1.45] max-w-275">
          &quot;EUNISELL EDGE: Test data feeds directly into facility design — no hand-off delay between testing and development.&quot;
        </p>
      </div>
    </section>
  );
};

export default Quote;
