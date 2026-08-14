import Hero from '../components/features/privacy/hero';
import Content from '../components/features/privacy/content';
import FinalCta from '../components/features/privacy/final-cta';

const PrivacyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Content />
      <FinalCta />
    </div>
  );
};

export default PrivacyPage;
