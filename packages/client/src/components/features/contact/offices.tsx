import { motion } from 'motion/react';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import worldMap from '/contact/world-map.png';
import pinIcon from '../../../assets/icons/footer/pin.svg';
import phoneIcon from '../../../assets/icons/footer/phone.svg';
import mailIcon from '../../../assets/icons/footer/mail.svg';

interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const offices: Office[] = [
  {
    name: 'Lagos Headquarters',
    address: '209, Muri Okunola street, Victoria Island, Lagos.',
    phone: '+234 908 765 9938',
    email: 'info@eunisellproductionsolutions.com',
  },
  {
    name: 'Port Harcourt Hub',
    address: 'Plot 234, Trans Amadi Industrial Layout, Port Harcourt.',
    phone: '+234 908 765 9939',
    email: 'ph@eunisellproductionsolutions.com',
  },
];

const Offices: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="grid grid-cols-1 lg:grid-cols-[500fr_860fr] gap-12 lg:gap-20 w-full">
        <Stagger className="flex flex-col gap-10 items-start">
          <FadeIn className="flex flex-col gap-2 items-start">
            <p className="font-light text-secondary text-sm tracking-[3px] uppercase">Our Offices</p>
            <h2 className="font-light text-accent text-[32px] lg:text-[40px] leading-[1.5]">Global Headquarters &amp; Regional Hubs</h2>
          </FadeIn>

          {offices.map(({ name, address, phone, email }) => (
            <StaggerItem key={name} hover className="flex flex-col gap-3 items-start bg-white border border-line rounded-2xl p-8 w-full shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <h4 className="font-light text-accent text-xl leading-[1.5]">{name}</h4>

              <div className="flex flex-col gap-3 items-start w-full">
                <div className="flex gap-3 items-start">
                  <img src={pinIcon} alt="" className="size-3.75 mt-0.75 shrink-0" />
                  <p className="font-light text-navy-subtle text-[15px] leading-[1.5]">{address}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={phoneIcon} alt="" className="size-3.75 shrink-0" />
                  <p className="font-light text-navy-subtle text-[15px] leading-[1.5]">{phone}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={mailIcon} alt="" className="size-3.75 shrink-0" />
                  <p className="font-light text-navy-subtle text-[15px] leading-[1.5]">{email}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15} className="relative h-100 lg:h-150 rounded-3xl overflow-hidden bg-line">
          <div className="absolute inset-0 opacity-80">
            <img src={worldMap} alt="Global map of Eunisell energy hubs and offshore platforms" className="size-full object-cover" />
            <div className="absolute inset-0 bg-white mix-blend-saturation" />
          </div>
          <div className="absolute inset-0 bg-accent/10" />

          <div className="absolute left-[45%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <motion.div
              className="absolute bg-secondary rounded-full size-10"
              animate={{ scale: [1, 1.8, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />
            <div className="bg-secondary border-2 border-white rounded-full size-3" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Offices;
