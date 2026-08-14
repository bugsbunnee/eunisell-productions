import { motion } from 'motion/react';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const steps = [
  { number: '01', title: 'Submit Enquiry', description: 'Your technical or commercial request is received by our desk team.' },
  { number: '02', title: 'Internal Review', description: 'Lead engineers assess your requirements against our capabilities.' },
  { number: '03', title: 'Team Response', description: 'A dedicated technical specialist contacts you within 24-48 hours.' },
];

const Process: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-16 lg:gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <FadeIn className="flex flex-col items-center">
        <p className="font-light text-secondary text-sm text-center tracking-[3px] uppercase">Process</p>
        <h2 className="font-light text-accent text-[32px] lg:text-[48px] leading-[1.5] text-center">What Happens Next?</h2>
      </FadeIn>

      <div className="relative max-w-300 w-full">
        <div className="absolute hidden sm:block left-[15%] right-[15%] top-8 h-0.5 bg-line" />
        <motion.div
          className="absolute hidden sm:block left-[15%] right-1/2 top-8 h-0.5 bg-secondary origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        <Stagger className="flex flex-col sm:flex-row items-start justify-center w-full">
          {steps.map(({ number, title, description }, index) => (
            <StaggerItem key={number} className="flex flex-1 flex-col items-center gap-6 relative">
              <div
                className={`flex items-center justify-center size-16 rounded-full shrink-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] ${
                  index === 0 ? 'bg-secondary border-4 border-white' : 'bg-white border border-line'
                }`}
              >
                <span className={`font-light text-base ${index === 0 ? 'text-white' : 'text-secondary'}`}>{number}</span>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <h4 className="font-light text-accent text-xl leading-[1.5]">{title}</h4>
                <p className="font-light text-navy-subtle text-[15px] leading-[1.5] max-w-70">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Process;
