import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

import productionFacilitiesImg from '/services/well-testing/related-production-facilities.png';
import operationsImg from '/services/well-testing/related-operations.png';
import waterSolutionsImg from '/services/well-testing/related-water-solutions.png';
import productionEnhancementImg from '/services/well-testing/related-production-enhancement.png';
import equipmentSolutionsImg from '/services/well-testing/related-equipment-solutions.png';
import engineeringServicesImg from '/services/well-testing/related-engineering-services.png';
import relatedArrow from '../../../assets/icons/well-testing/related-arrow.svg';

interface RelatedService {
  number: string;
  title: string;
  description: string[];
  image: string;
  imageBg?: string;
}

const relatedServices: RelatedService[] = [
  { number: '02', title: 'Production Facilities', description: ['EPF, CPF and brownfield process', 'infrastructure'], image: productionFacilitiesImg },
  { number: '03', title: 'Operations & Maintenance', description: ['Reliable plant operations across the asset', 'life cycle'], image: operationsImg },
  { number: '04', title: 'Water Solutions', description: ['Fit-for-purpose water treatment across', 'production operations'], image: waterSolutionsImg },
  { number: '05', title: 'Production Enhancement', description: ['Flow assurance and Well Intervention'], image: productionEnhancementImg },
  { number: '06', title: 'Equipment Solutions', description: ['Reliable equipment access without the', 'capital burden'], image: equipmentSolutionsImg, imageBg: 'bg-primary' },
  { number: '07', title: 'Engineering Services', description: ['End-to-end engineering, from concept study', 'to commissioning'], image: engineeringServicesImg },
];

const RelatedServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-ice-blue flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-20 w-full max-w-360">
        <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] text-center tracking-[-0.34px]">Integrated Service Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {relatedServices.map(({ number, title, description, image, imageBg }) => (
            <button
              key={number}
              type="button"
              onClick={() => navigate(paths.services)}
              className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden flex flex-col items-start text-left"
            >
              <div className={`h-55 w-full overflow-hidden ${imageBg ?? ''}`}>
                <img src={image} alt={title} className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 items-start p-9">
                <p className="font-light text-secondary text-[13px]">{number}</p>
                <h3 className="font-light text-accent text-xl leading-7">{title}</h3>
                <p className="font-light text-navy-subtle text-sm leading-[22px]">
                  {description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <div className="pt-2">
                  <img src={relatedArrow} alt="" className="w-4 h-2.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
