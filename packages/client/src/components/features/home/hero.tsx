import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';
import { BackgroundVideo } from '../../common/background-video';

const HERO_VIDEOS = ['/home/production.mp4'];

import assetLifecycleIcon from '../../../assets/icons/home/asset-lifecycle.svg';
import engineeringExpertiseIcon from '../../../assets/icons/home/engineering-expertise.svg';
import productionOptimizationIcon from '../../../assets/icons/home/production-optimization.svg';
import safeOperationsIcon from '../../../assets/icons/home/safe-operations.svg';

interface Capability {
  icon: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  { icon: assetLifecycleIcon, title: 'Asset Lifecycle Support', description: 'End-to-end production asset management' },
  { icon: engineeringExpertiseIcon, title: 'Engineering Expertise', description: 'Multidisciplinary engineering teams' },
  { icon: productionOptimizationIcon, title: 'Production Optimization', description: 'Maximize output, minimize downtime' },
  { icon: safeOperationsIcon, title: 'Safe Operations', description: 'Zero harm philosophy across all projects' },
];

const stats = [
  { value: '20+', label: ['Years', 'Experience'] },
  { value: '500+', label: ['Projects', 'Delivered'] },
  { value: '15+', label: ['Countries of', 'Operation'] },
  { value: 'ISO', label: ['Certified', 'Quality Mgmt'] },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-deep-navy relative isolate flex flex-col justify-center pt-18 overflow-hidden">
      <BackgroundVideo sources={HERO_VIDEOS} overlayClassName="bg-deep-navy/65" />

      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0, 131, 206, 0.08) 1.6667%, rgba(0, 131, 206, 0) 1.6667%), linear-gradient(180deg, rgba(0, 131, 206, 0.08) 1.6667%, rgba(0, 131, 206, 0) 1.6667%)',
        }}
      />

      <div className="absolute inset-[20%_-5%_20%_65%] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,120,0,0.05) 0%, rgba(255,120,0,0) 70%)' }} />
      <div className="absolute inset-[15%_10%_15%_40%] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,131,206,0.1) 0%, rgba(0,131,206,0) 70%)' }} />

      <div className="relative flex-1 flex items-center justify-center px-9 md:px-16 lg:px-36 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_520px] gap-16 max-w-432 w-full items-center">
          <Stagger className="flex flex-col items-start">
            <StaggerItem>
              <p className="font-light text-white text-[11px] tracking-[3.85px] leading-[16.5px] pb-2.5">INTEGRATED PRODUCTION SOLUTIONS</p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-light text-white text-[32px] md:text-[40px] lg:text-[50px] tracking-[-2.2px] leading-[1.15] lg:leading-[83.6px]">
                Integrated Production Solutions for Reliable, Safe and Efficient Oil &amp; Gas Operations
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="font-light text-navy-muted text-[17px] leading-[31.45px] max-w-140 mt-6">
                From engineering and production optimization to facility maintenance and equipment support, Eunisell delivers end-to-end production solutions that enhance asset
                integrity, maximize production uptime, and improve operational efficiency across upstream oil and gas operations.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-4 pt-8">
              <motion.button
                type="button"
                onClick={() => navigate(paths.contact)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-secondary h-[54.5px] w-56.75 rounded-full px-8 flex items-center justify-center text-center font-light text-white text-[15px] leading-[22.5px] whitespace-nowrap"
              >
                Speak with Our Experts
              </motion.button>

              <motion.button
                type="button"
                onClick={() => navigate(paths.contact)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-[54.5px] w-56.75 border border-white rounded-full px-8 flex items-center justify-center text-center font-light text-white text-[15px] leading-[22.5px] whitespace-nowrap"
              >
                Request a Proposal
              </motion.button>
            </StaggerItem>
          </Stagger>

          <FadeIn delay={0.2} className="backdrop-blur-md bg-deep-navy/20 border border-secondary rounded-[16px] flex flex-col gap-6 p-8 w-full max-w-130 justify-self-end">
            <p className="font-light text-white text-[10px] tracking-[3px] uppercase leading-3.75">Key Capabilities</p>

            <div className="flex flex-col">
              {capabilities.map(({ icon, title, description }, index) => (
                <div key={title} className={`flex gap-4 items-start py-4 ${index < capabilities.length - 1 ? 'border-b border-primary' : ''}`}>
                  <div className="flex flex-col h-11 items-start pt-1 shrink-0 w-0.75">
                    <div className="bg-secondary h-10 w-0.75" />
                  </div>
                  <div className="bg-white rounded-full flex items-center justify-center shrink-0 size-8">
                    <img src={icon} alt="" className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light text-white text-[15px] leading-[22.5px]">{title}</p>
                    <p className="font-light text-navy-subtle text-[13px] leading-[19.5px]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative bg-deep-navy border-t border-secondary flex items-center justify-center py-4 lg:h-20 lg:py-0">
        <Stagger className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 max-w-432 w-full px-9 md:px-16 lg:px-24">
          {stats.map(({ value, label }) => (
            <StaggerItem key={value} className="flex gap-4 items-center">
              <p className="font-light text-secondary text-3xl">{value}</p>
              <p className="font-light text-white text-sm leading-[17.5px]">
                {label[0]}
                <br />
                {label[1]}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Hero;
