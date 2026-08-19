import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const segments = [
  'Marginal Field Operators',
  'Independent Oil Companies',
  'IOCs',
  'EPF/CPF Operators',
  'Midstream Companies',
  'Gas Processing Facilities',
  'Modular Refinery Operators',
];

const Segments: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <div className="flex flex-col gap-20 items-center max-w-360 w-full">
        <FadeIn>
          <h2 className="font-inter font-semibold text-accent text-4xl leading-normal text-center">Client Segments We Serve</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {segments.map((label) => (
            <StaggerItem key={label} className="bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] flex items-center justify-center text-center h-33.5 px-10">
              <p className="font-inter font-bold text-accent text-lg leading-normal">{label}</p>
            </StaggerItem>
          ))}

          <StaggerItem hover>
            <Link to={paths.contact} className="bg-secondary shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] flex items-center justify-center text-center h-33.5 px-10 w-full">
              <p className="font-inter font-bold text-white text-lg leading-normal">Partner with Us</p>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default Segments;
