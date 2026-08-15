import Hero from '../components/features/management-team/hero';
import Profiles from '../components/features/management-team/profiles';
import Quote from '../components/features/management-team/quote';
import FinalCta from '../components/features/home/final-cta';

const ManagementTeamPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Profiles />
      <Quote />
      <FinalCta />
    </div>
  );
};

export default ManagementTeamPage;
