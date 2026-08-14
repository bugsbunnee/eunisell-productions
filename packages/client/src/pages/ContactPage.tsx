import Hero from '../components/features/contact/hero';
import Methods from '../components/features/contact/methods';
import EnquiryForm from '../components/features/contact/enquiry-form';
import Offices from '../components/features/contact/offices';
import Process from '../components/features/contact/process';
import FinalCta from '../components/features/home/final-cta';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Methods />
      <EnquiryForm />
      <Offices />
      <Process />
      <FinalCta scrollTargetId="enquiry-form" />
    </div>
  );
};

export default ContactPage;
