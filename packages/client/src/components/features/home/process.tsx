import { motion } from 'motion/react';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import discoverIcon from '../../../assets/icons/home/process-discover.svg';
import executeIcon from '../../../assets/icons/home/process-execute.svg';
import commissionIcon from '../../../assets/icons/home/process-commission.svg';
import supportIcon from '../../../assets/icons/home/process-support.svg';
import downloadIcon from '../../../assets/icons/home/download-icon.svg';

const steps = [
  { number: '01', icon: discoverIcon, title: 'Discover', description: 'Understanding operational challenges and project objectives.' },
  { number: '01', icon: discoverIcon, title: 'Design', description: 'Developing practical engineering solutions.' },
  { number: '02', icon: executeIcon, title: 'Execute', description: 'Safe, efficient project implementation.' },
  { number: '03', icon: commissionIcon, title: 'Commission', description: 'Testing, verification, and successful startup.' },
  { number: '04', icon: supportIcon, title: 'Support', description: 'Long-term operations, maintenance, and optimization.' },
];

const Process: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-center px-9 md:px-16 lg:px-24 py-24 lg:py-35">
      <div className="flex flex-col gap-20 items-start max-w-312.5 w-full">
        <FadeIn className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-lg text-center tracking-[3.85px] uppercase">Our Process</p>
          <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] text-center tracking-[0.05px]">Our Project Delivery Approach</h2>
          <div className="bg-secondary h-0.75 w-10 mt-2" />
        </FadeIn>

        <div className="relative flex flex-col items-center w-full">
          <motion.div
            className="hidden lg:block absolute bg-line h-px left-[5%] right-[5%] top-16 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {steps.map(({ number, icon, title, description }, index) => (
              <StaggerItem key={`${title}-${index}`} className="flex flex-col items-center gap-6">
                <div className="relative bg-white border border-line rounded-2xl drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center shrink-0 size-32">
                  <div className="bg-ice-blue rounded-xl flex items-center justify-center shrink-0 size-16">
                    <img src={icon} alt="" className="size-8" />
                  </div>
                  <div className="absolute -right-3.25 -top-3.25 bg-secondary border-4 border-sidebar rounded-full flex items-center justify-center size-10">
                    <span className="font-light text-white text-lg">{number}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 text-center">
                  <h3 className="font-light text-accent text-xl leading-[30px]">{title}</h3>
                  <p className="font-light text-navy-subtle text-[15px] leading-6">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeIn delay={0.2} className="flex items-center justify-center w-full pt-4">
          <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="border-2 border-secondary rounded-full flex gap-3 items-center px-7 py-3.5">
            <span className="font-light text-secondary text-[15px] tracking-[0.03px]">Download Process Framework</span>
            <img src={downloadIcon} alt="" className="size-3.75" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Process;
