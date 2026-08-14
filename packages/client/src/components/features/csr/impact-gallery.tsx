import gallery1 from '/csr/gallery-1.jpg';
import gallery2 from '/csr/gallery-2.jpg';
import gallery3 from '/csr/gallery-3.jpg';
import gallery4 from '/csr/gallery-4.jpg';
import gallery5 from '/csr/gallery-5.jpg';
import gallery6 from '/csr/gallery-6.jpg';
import gallery7 from '/csr/gallery-7.jpg';
import gallery8 from '/csr/gallery-8.jpg';
import decor1 from '../../../assets/icons/csr/quote-decor-1.svg';
import decor2 from '../../../assets/icons/csr/quote-decor-2.svg';
import { FadeIn } from '../../common/motion';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const ImpactGallery: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden flex flex-col items-center justify-center px-9 md:px-16 lg:px-20 py-16 lg:py-0 lg:h-200">
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 opacity-50">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt="" className="size-full object-cover" />
        ))}
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-accent from-0% via-transparent via-50% to-transparent" />

      <div className="relative flex items-center w-full max-w-7xl lg:px-36">
        <FadeIn className="relative backdrop-blur-md bg-accent/90 border border-secondary rounded-3xl max-w-175 w-full p-12 lg:p-16 flex flex-col gap-6 items-start overflow-hidden">
          <img src={decor1} alt="" className="absolute right-0 top-0 p-8 size-16 opacity-20" />
          <img src={decor2} alt="" className="absolute -left-10 -bottom-10 size-40 opacity-10" />

          <p className="relative font-light text-secondary text-sm tracking-[3px] uppercase">Corporate Responsibility</p>
          <h2 className="relative font-light text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1]">Creating Value Beyond Business</h2>
          <p className="relative font-light text-muted text-lg tracking-[-0.04px] leading-[1.63]">
            At Eunisell Chemicals, our responsibility extends far beyond the industrial solutions we provide. We view Corporate Social Responsibility as a core strategic pillar,
            integrating social, environmental, and economic considerations into our operational DNA.
            <br />
            Our approach is built on the philosophy of shared value—ensuring that as our business grows, so do the communities we serve. Through strategic partnerships, we tackle
            systemic challenges such as unemployment and lack of infrastructure by providing access to world-class sporting opportunities.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ImpactGallery;
