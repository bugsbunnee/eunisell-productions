import { FadeIn, Stagger, StaggerItem } from '../../common/motion';
import { RIGHTS_CARDS } from './privacy.constants';

import shieldIcon from '../../../assets/icons/privacy/shield.svg';
import Toc from './toc';
import SectionHeading from './section-heading';
import Bullet from './bullet';
import ListItem from './list-item';

const Content: React.FC = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-16 lg:gap-25 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-25 w-full">
      <FadeIn className="flex flex-col gap-6 items-start w-full lg:w-80 lg:sticky lg:top-32">
        <p className="font-bold text-accent text-sm tracking-[0.7px] uppercase">On This Page</p>
        <Toc />
      </FadeIn>

      <div className="flex flex-col gap-20 items-start max-w-225 w-full">
        <FadeIn id="introduction" className="flex flex-col gap-6 items-start w-full">
          <SectionHeading number="01" title="Introduction" />
          <div className="flex flex-col gap-5 items-start w-full">
            <p className="font-light text-navy-subtle text-lg leading-[1.8]">
              Eunisell Production Solutions (&quot;the Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and security of
              your personal data. This Privacy Policy describes how we collect, use, and share information in the course of our business operations, including through our website
              and engineering service engagements.
            </p>
            <p className="font-light text-navy-subtle text-lg leading-[1.8]">
              As a premium provider of production optimization, well testing, and integrated facility management services to the global energy sector, we maintain the highest
              standards of data integrity and confidentiality.
            </p>
          </div>
        </FadeIn>

        <FadeIn id="personal-data-we-collect" className="flex flex-col gap-6 items-start w-full">
          <SectionHeading number="02" title="Personal Data We May Collect" />
          <p className="font-light text-navy-subtle text-lg leading-[1.8]">In providing our technical services, we may collect several categories of personal information:</p>
          <Stagger className="flex flex-col gap-6 items-start w-full">
            <StaggerItem>
              <Bullet title="Identity Data" description="Includes first name, last name, job title, and professional credentials." />
            </StaggerItem>
            <StaggerItem>
              <Bullet title="Contact Data" description="Includes professional email address, office telephone numbers, and company headquarters address." />
            </StaggerItem>
            <StaggerItem>
              <Bullet
                title="Technical & Usage Data"
                description="Includes IP address, browser type, time zone setting, and operating system when you interact with our digital platforms."
              />
            </StaggerItem>
          </Stagger>
        </FadeIn>

        <FadeIn id="how-we-use-personal-data" className="flex flex-col gap-6 items-start w-full">
          <SectionHeading number="03" title="How We Use Personal Data" />
          <p className="font-light text-navy-subtle text-lg leading-normal">We use the personal data we collect for the following purposes:</p>
          <Stagger className="flex flex-col gap-4 items-start w-full">
            <StaggerItem>
              <ListItem>To respond to inquiries and provide customer support</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>To deliver and improve our services</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>To communicate important updates or information</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>To analyze website performance and user behavior</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>To ensure security and prevent fraudulent activity</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>To comply with legal and regulatory obligations</ListItem>
            </StaggerItem>
          </Stagger>
          <p className="font-light text-navy-subtle text-lg leading-normal">We do not sell or rent your personal data to third parties.</p>
        </FadeIn>

        <FadeIn id="cookies-technologies" className="flex flex-col gap-6 items-start w-full">
          <SectionHeading number="04" title="Cookies & Technologies" />
          <p className="font-light text-navy-subtle text-lg leading-normal">
            Our website uses cookies and similar technologies to enhance user experience and improve functionality. The types of cookies we use include:
          </p>
          <Stagger className="flex flex-col gap-6 items-start w-full">
            <StaggerItem>
              <Bullet title="Essential Cookies" description="Required for basic website functionality and security." />
            </StaggerItem>
            <StaggerItem>
              <Bullet title="Performance Cookies" description="Help us understand how visitors interact with the website." />
            </StaggerItem>
            <StaggerItem>
              <Bullet title="Functional Cookies" description="Remember your preferences and settings." />
            </StaggerItem>
            <StaggerItem>
              <Bullet title="Analytics Cookies" description="Used to analyze website traffic and usage patterns." />
            </StaggerItem>
          </Stagger>
          <p className="font-light text-navy-subtle text-lg leading-normal">
            You can control or disable cookies through your browser settings. However, disabling cookies may affect website functionality.
          </p>
        </FadeIn>

        <FadeIn id="sharing-personal-data" className="flex flex-col gap-6 items-start w-full">
          <SectionHeading number="05" title="Sharing Personal Data" />
          <p className="font-light text-navy-subtle text-lg leading-normal">
            We may share data with trusted third-party service providers who assist us in operating our website and delivering our services, including:
          </p>
          <Stagger className="flex flex-col gap-4 items-start w-full">
            <StaggerItem>
              <ListItem>Hosting providers</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>Analytics providers</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>IT and security service providers</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>Communication platforms</ListItem>
            </StaggerItem>
          </Stagger>
          <div className="flex flex-col gap-5 items-start w-full">
            <p className="font-light text-navy-subtle text-lg leading-normal">
              All third parties are required to handle your data in accordance with applicable data protection laws and confidentiality obligations.
            </p>
            <p className="font-light text-navy-subtle text-lg leading-normal">We do not authorize third parties to use your data for their own independent purposes.</p>
          </div>
        </FadeIn>

        <FadeIn id="data-security" className="flex flex-col gap-6 items-start w-full">
          <SectionHeading number="06" title="Data Security" />
          <p className="font-light text-navy-subtle text-lg leading-normal">
            We implement appropriate technical and organizational measures to protect your personal data, including:
          </p>
          <Stagger className="flex flex-col gap-4 items-start w-full">
            <StaggerItem>
              <ListItem>Secure servers and encrypted communication channels</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>Access control and authentication systems</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>Regular security monitoring and audits</ListItem>
            </StaggerItem>
            <StaggerItem>
              <ListItem>Restricted access to personal data within our organization</ListItem>
            </StaggerItem>
          </Stagger>
          <p className="font-light text-navy-subtle text-lg leading-normal">
            While we take all reasonable precautions, no digital system is completely secure, and we cannot guarantee the absolute security of transmitted data.
          </p>
        </FadeIn>

        <FadeIn id="protection-rights" className="bg-surface flex flex-col gap-10 items-start p-8 md:p-12 rounded-3xl w-full">
          <h2 className="font-bold text-accent text-3xl w-full">Your Data Protection Rights</h2>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {RIGHTS_CARDS.map((card) => (
              <StaggerItem key={card.title} hover className="bg-white border border-line rounded-2xl p-8 flex flex-col gap-4 items-start">
                <img src={card.icon} alt="" className={card.iconClassName ?? 'size-8'} />
                <h3 className="font-bold text-accent text-lg leading-normal">{card.title}</h3>
                <p className="font-light text-navy-subtle text-sm leading-5">{card.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn id="contact-us" className="relative bg-accent flex flex-col p-8 md:p-12 rounded-3xl w-full overflow-hidden">
          <div className="absolute -left-25 -top-25 bg-primary blur-2xl opacity-10 rounded-full size-80 pointer-events-none" />

          <div className="relative flex flex-col gap-8 items-start w-full">
            <div className="flex gap-6 items-center">
              <div className="bg-secondary flex items-center justify-center rounded-2xl size-16 shrink-0">
                <img src={shieldIcon} alt="" className="size-7" />
              </div>
              <h3 className="font-bold text-white text-[32px] leading-normal tracking-[-0.03px]">Contact Us About Privacy</h3>
            </div>

            <p className="font-light text-navy-subtle text-lg leading-7">
              If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer.
            </p>

            <div className="border-t border-white/10 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start pt-5 w-full">
              <div className="flex flex-col gap-2 items-start">
                <p className="font-medium text-secondary text-sm tracking-[1px] uppercase">Email Address</p>
                <p className="font-light text-white text-xl leading-7.5">privacy@eunisell.com</p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="font-medium text-secondary text-sm tracking-[1px] uppercase">Office Address</p>
                <p className="font-light text-white text-xl leading-8">
                  209, Muri Okunola Street,
                  <br />
                  Victoria Island, Lagos, Nigeria.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn id="complaints" className="flex flex-col gap-6 items-start w-full opacity-60">
          <SectionHeading number="09" title="Complaints" />
          <p className="font-light text-navy-subtle text-lg leading-normal">
            You have the right to make a complaint at any time to the Nigeria Data Protection Commission (NDPC). We would, however, appreciate the chance to deal with your concerns
            before you approach the NDPC.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Content;
