import { motion } from 'motion/react';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import projectIcon from '../../../assets/icons/well-testing/delivery-project.svg';
import recurringIcon from '../../../assets/icons/well-testing/delivery-recurring.svg';
import rentalIcon from '../../../assets/icons/well-testing/delivery-rental.svg';
import consultancyIcon from '../../../assets/icons/well-testing/delivery-consultancy.svg';
import manpowerIcon from '../../../assets/icons/well-testing/delivery-manpower.svg';

const models = [
  { icon: projectIcon, label: 'Project-Based' },
  { icon: recurringIcon, label: 'Recurring Contract' },
  { icon: rentalIcon, label: 'Rental / Lease' },
  { icon: consultancyIcon, label: 'Consultancy / Advisory' },
  { icon: manpowerIcon, label: 'Manpower Supply' },
];

const DeliveryModels: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-20 w-full max-w-360 mx-auto">
        <FadeIn className="flex flex-col gap-4 items-start">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[13px] tracking-[4px] uppercase">Delivery Model For This Line</p>
          </div>
          <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] leading-[1.3]">Commercial Delivery Models</h2>
        </FadeIn>

        <div className="relative w-full">
          <motion.div
            className="hidden lg:block absolute bg-secondary/30 h-0.5 left-[10%] right-[10%] top-9.75 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 w-full">
            {models.map(({ icon, label }) => (
              <StaggerItem key={label} className="flex flex-col gap-4 items-center z-50">
                <div className="bg-ice-blue rounded-xl flex items-center justify-center shrink-0 size-14">
                  <img src={icon} alt={label} className="size-6" />
                </div>
                <div className="relative bg-secondary border-3 border-white rounded-full shrink-0 size-6.5">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-[0px_0px_0px_3px_rgba(0,131,206,0.25)] size-5" />
                </div>
                <p className="font-light text-accent text-[15px] text-center leading-[22px]">{label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModels;
