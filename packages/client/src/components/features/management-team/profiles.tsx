import ExecutiveProfile from './executive-profile';

import chikaIkenga from '/management-team/chika-ikenga.png';
import kennethOkeiyi from '/management-team/kenneth-okeiyi.png';

const executives = [
  {
    name: 'Chika Ikenga',
    title: 'Founder',
    image: chikaIkenga,
    bio: [
      'Chika Ikenga founded Eunisell in 1996 with a clear mission: to provide world-class chemical solutions and specialty chemicals to the Nigerian oil and gas industry. His journey began with a degree in Industrial Chemistry, providing the technical foundation for what would become a major industrial conglomerate.',
      `Under his leadership, Eunisell has achieved significant milestones, including becoming a preferred partner for global chemical manufacturers and a key player in offshore production chemicals. His commitment to "The Eunisell Way"—a philosophy of integrity, technical excellence, and client satisfaction—has been the cornerstone of the company's success.`,
      'Chika is also a dedicated philanthropist and advocate for African sports, famously sponsoring the Eunisell Boot Award to celebrate Nigerian football talent. His strategic vision continues to drive Eunisell’s expansion into new markets and energy sectors across the continent.',
    ],
  },
  {
    name: 'Kenneth Okeiyi',
    title: 'Chief Executive Officer',
    image: kennethOkeiyi,
    reverse: true,
    bio: [
      'Kenneth Okeiyi oversees the daily operations of the company. He holds a B.Sc. degree in Banking & Finance from the Imo State University and an MBA in Business Finance from the University of Nigeria, Nsukka.',
      'With over 20 years of experience in banking, finance, the capital market and business advisory services across Africa. He possesses strong experience in offering purpose fit business finance structures across a wide range of industries. Kenneth Okeiyi has a strong network of relationships across financial institutions globally.',
    ],
  },
];

const Profiles: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-24 lg:gap-43.75 py-16 lg:py-36">
      {executives.map((executive) => (
        <ExecutiveProfile key={executive.name} {...executive} />
      ))}
    </section>
  );
};

export default Profiles;
