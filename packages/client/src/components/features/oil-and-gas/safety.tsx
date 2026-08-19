import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import refineryBg from '/oil-and-gas/safety-refinery-night.jpg';
import fieldPersonnelImg from '/oil-and-gas/safety-field-personnel.jpg';
import checkIcon from '../../../assets/icons/oil-and-gas/safety-check.svg';

const points = [
  'Zero-incident culture across all operational sites.',
  'Rigorous environmental impact mitigation protocols.',
  'Regular safety training and certification for all personnel.',
  'Compliance with international HSEQ standards.',
];

const Safety: React.FC = () => {
  return (
    <section className="relative flex items-center overflow-hidden px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <img src={refineryBg} alt="Industrial night scene of an oil refinery" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-accent/80" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-360 w-full mx-auto">
        <FadeIn className="flex flex-col gap-8 items-start">
          <h2 className="font-inter font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.5]">
            Safety Drives Every
            <br />
            Operation
          </h2>

          <Stagger className="flex flex-col gap-5 items-start w-full">
            {points.map((point) => (
              <StaggerItem key={point} className="flex gap-4 items-start">
                <img src={checkIcon} alt="" className="size-4 mt-2 shrink-0" />
                <p className="font-inter text-white/80 text-lg leading-normal">{point}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn className="h-75 lg:h-100 rounded-[16px] overflow-hidden">
          <img src={fieldPersonnelImg} alt="African field personnel in full high-visibility PPE, helmets and protective glasses" className="size-full object-cover" />
        </FadeIn>
      </div>
    </section>
  );
};

export default Safety;
