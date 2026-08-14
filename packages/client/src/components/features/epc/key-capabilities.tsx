import brownfieldIcon from '../../../assets/icons/epc/capability-brownfield.svg';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';
import facilityUpgradesIcon from '../../../assets/icons/epc/capability-facility-upgrades.svg';
import equipmentInstallationIcon from '../../../assets/icons/epc/capability-equipment-installation.svg';
import pipelineConstructionIcon from '../../../assets/icons/epc/capability-pipeline-construction.svg';
import modularSystemsIcon from '../../../assets/icons/epc/capability-modular-systems.svg';
import meiWorksIcon from '../../../assets/icons/epc/capability-mei-works.svg';

const capabilities = [
  { icon: brownfieldIcon, title: 'Brownfield Modifications', description: 'Seamlessly integrating new technology and equipment into existing operational assets.' },
  { icon: facilityUpgradesIcon, title: 'Facility Upgrades', description: 'Modernizing production systems to increase throughput and operational efficiency.' },
  { icon: equipmentInstallationIcon, title: 'Equipment Installation', description: 'Precision installation of critical process equipment and rotating machinery.' },
  { icon: pipelineConstructionIcon, title: 'Pipeline Construction', description: 'Full-scale pipeline and flowline construction for crude and gas transportation.' },
  { icon: modularSystemsIcon, title: 'Modular Systems', description: 'Skid-mounted and modular production systems for rapid field deployment.' },
  { icon: meiWorksIcon, title: 'MEI Works', description: 'Integrated mechanical, electrical, and instrumentation engineering services.' },
];

const KeyCapabilities: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col gap-16 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <FadeIn className="flex flex-col gap-4 items-center">
        <div className="flex gap-4 items-center justify-center">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-sm">Expertise</p>
          <div className="bg-secondary h-0.5 w-12" />
        </div>
        <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] leading-[1.5] text-center">Key Capabilities</h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {capabilities.map(({ icon, title, description }) => (
          <StaggerItem key={title} hover className="flex flex-col gap-6 items-start bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-2xl p-10 h-full">
            <div className="flex items-center justify-center bg-ice-blue rounded-lg size-12">
              <img src={icon} alt="" className="size-6" />
            </div>
            <h3 className="font-light text-accent text-2xl leading-[1.3]">{title}</h3>
            <p className="font-light text-navy-subtle text-base leading-[1.625]">{description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default KeyCapabilities;
