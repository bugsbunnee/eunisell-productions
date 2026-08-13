import { Link } from 'react-router-dom';
import headsetIcon from '../../../assets/icons/contact/method-headset.svg';
import chipIcon from '../../../assets/icons/contact/method-chip.svg';
import documentIcon from '../../../assets/icons/contact/method-document.svg';
import arrowIcon from '../../../assets/icons/contact/method-arrow.svg';

interface Method {
  icon: string;
  iconClassName: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

const methods: Method[] = [
  {
    icon: headsetIcon,
    iconClassName: 'size-6',
    title: 'Production Solutions Enquiry',
    description: 'General enquiries regarding our upstream and midstream production optimization services.',
    cta: 'Submit Enquiry',
    href: '#',
  },
  {
    icon: chipIcon,
    iconClassName: 'size-6',
    title: 'Technical Consultation',
    description: 'Deep technical discussion with our engineering team for complex project requirements.',
    cta: 'Schedule Now',
    href: '#',
  },
  {
    icon: documentIcon,
    iconClassName: 'h-6 w-4.5',
    title: 'Request a Proposal',
    description: 'Formal bidding and commercial proposal requests for specific field development projects.',
    cta: 'Submit Request',
    href: '#',
  },
];

const Methods: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        {methods.map(({ icon, iconClassName, title, description, cta, href }) => (
          <div key={title} className="flex flex-col gap-4 items-start bg-white border border-line rounded-3xl p-12">
            <div className="flex items-center justify-center bg-ice-blue rounded-full size-16 shrink-0">
              <img src={icon} alt="" className={iconClassName} />
            </div>

            <h3 className="font-light text-accent text-2xl leading-9 pt-4">{title}</h3>

            <p className="font-light text-navy-subtle text-base leading-6.5">{description}</p>

            <Link to={href} className="flex gap-2 items-center pt-4 font-light text-secondary text-base">
              {cta}
              <img src={arrowIcon} alt="" className="w-2.75 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methods;
