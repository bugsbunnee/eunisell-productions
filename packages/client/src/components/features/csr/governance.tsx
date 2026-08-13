import bgImage from '/csr/governance-bg.jpg';
import downloadIcon from '../../../assets/icons/csr/download-icon.svg';
import ethicsIcon from '../../../assets/icons/csr/ethics-icon.svg';
import integrityIcon from '../../../assets/icons/csr/principle-integrity.svg';
import transparencyIcon from '../../../assets/icons/csr/principle-transparency.svg';
import leadershipIcon from '../../../assets/icons/csr/principle-leadership.svg';

const links = [
  { icon: downloadIcon, label: 'Download Sustainability Report', filled: true },
  { icon: ethicsIcon, label: 'Ethics & Policy Framework', filled: false },
];

const principles = [
  {
    icon: integrityIcon,
    title: 'Integrity & Ethical Conduct',
    description: 'We uphold the highest standards of integrity, honesty and ethical behaviour in all our business activities.',
  },
  { icon: transparencyIcon, title: 'Transparency & Accountability', description: 'We promote openness and accountability in our decision-making and business operations.' },
  { icon: leadershipIcon, title: 'Responsible Leadership & Compliance', description: 'We believe effective governance requires strong leadership and a culture of compliance.' },
];

const Governance: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <img src={bgImage} alt="" className="absolute inset-0 size-full object-cover opacity-5" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[494px_1fr] gap-16 justify-center w-full max-w-360 mx-auto">
        <div className="flex flex-col gap-8 items-start">
          <p className="font-light text-secondary text-base tracking-[3px] uppercase">Compliance &amp; Ethics</p>
          <h2 className="font-light text-white text-[28px] md:text-[34px] lg:text-[41px] leading-[1.46]">Governance and Accountability</h2>
          <p className="font-light text-muted text-sm leading-[29.25px]">
            At Eunisell, we recognise that responsible growth is built on strong governance, transparency and accountability. Our approach to governance is anchored in ethical
            leadership, responsible decision-making and adherence to high standards of corporate conduct. We are committed to building trust with our employees, customers,
            partners, regulators and communities by ensuring that our actions are guided by clear principles, sound controls and a strong sense of responsibility.
          </p>

          <div className="flex flex-col gap-4 items-start pt-4">
            {links.map(({ icon, label, filled }) => (
              <a key={label} href="#" className="flex gap-4 items-center">
                <div className={`rounded-lg flex items-center justify-center shrink-0 size-12 ${filled ? 'bg-secondary' : 'bg-white/10'}`}>
                  <img src={icon} alt="" className="size-4" />
                </div>
                <span className="font-light text-white text-base tracking-[-0.02px]">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {principles.map(({ icon, title, description }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 items-start p-8.25">
                <img src={icon} alt="" className="size-6" />
                <h3 className="font-light text-white text-lg leading-[30px]">{title}</h3>
                <p className="font-light text-muted text-sm leading-[22.75px]">{description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full p-10">
            <h3 className="font-light text-white text-2xl tracking-[0.02px]">Send us an email</h3>
            <div className="flex flex-col items-start">
              <a href="mailto:info@eunisell.com" className="font-light text-secondary text-[15px] leading-[30px] tracking-[0.03px]">
                info@eunisell.com
              </a>
              <p className="font-light text-muted text-sm leading-[21px]">
                Global Headquarters, Victoria
                <br />
                Island, Lagos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
