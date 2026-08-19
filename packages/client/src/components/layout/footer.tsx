import { Link } from 'react-router-dom';

import footerLogo from '/general/footer-logo.png';
import linkedinIcon from '../../assets/icons/footer/social-linkedin.svg';
import xIcon from '../../assets/icons/footer/social-x.svg';
import pinIcon from '../../assets/icons/footer/pin.svg';
import mailIcon from '../../assets/icons/footer/mail.svg';
import phoneIcon from '../../assets/icons/footer/phone.svg';

import { companyLinks, serviceLinks, industryLinks, SOCIAL_LINKS, legalLinks } from './footer.constants';
import { paths } from '../../lib/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-navy border-t border-secondary/20 flex flex-col items-center px-6 sm:px-9 md:px-16 lg:px-36 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-16 w-full max-w-360">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[320px_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12 lg:gap-x-19.5 w-full">
          <div className="flex flex-col gap-3 items-start sm:col-span-2 lg:col-span-1">
            <img src={footerLogo} alt="Eunisell" className="h-13.5 w-33.25 object-contain object-left" />

            <p className="font-light text-ice-blue text-sm pt-1">Engineering. Production. Excellence.</p>

            <p className="font-light text-navy-subtle text-[13px] leading-[22.1px]">
              A leading production engineering and energy services company delivering integrated solutions to operators worldwide.
            </p>

            <div className="flex gap-3 items-start pt-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/5 border border-white/10 rounded-full flex items-center justify-center shrink-0 size-9"
              >
                <img src={linkedinIcon} alt="" className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="bg-white/5 border border-white/10 rounded-full flex items-center justify-center shrink-0 size-9"
              >
                <img src={xIcon} alt="" className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <h3 className="font-light text-white text-[11px] tracking-[2.2px]">COMPANY</h3>
            <ul className="flex flex-col items-start w-full">
              {companyLinks.map(({ label, path }) => (
                <li key={label} className="w-full py-2.25">
                  <Link to={path} className="font-light text-navy-subtle text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <h3 className="font-light text-white text-[11px] tracking-[2.2px]">SERVICES</h3>
            <ul className="flex flex-col items-start w-full">
              {serviceLinks.map(({ label, path }) => (
                <li key={label} className="w-full py-2.25">
                  <Link to={path} className="font-light text-navy-subtle text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <h3 className="font-light text-white text-[11px] tracking-[2.2px]">INDUSTRIES</h3>
            <ul className="flex flex-col items-start w-full">
              {industryLinks.map((label) => (
                <li key={label} className="w-full py-2.25">
                  <Link to={paths.portfolio} className="font-light text-navy-subtle text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <h3 className="font-light text-white text-[11px] tracking-[2.2px]">CONTACT</h3>
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex gap-3 items-start">
                <img src={pinIcon} alt="" className="size-4 mt-0.5 shrink-0" />
                <p className="font-light text-navy-subtle text-sm">209, Muri Okunola Street, Victoria Island. Lagos</p>
              </div>
              <div className="flex gap-3 items-start">
                <img src={pinIcon} alt="" className="size-4 mt-0.5 shrink-0" />
                <p className="font-light text-navy-subtle text-sm">Plot 3A, Aswani Road, Oshodi Industrial Scheme, Isolo. Lagos.</p>
              </div>
              <div className="flex gap-3 items-start">
                <img src={pinIcon} alt="" className="size-4 mt-0.5 shrink-0" />
                <p className="font-light text-navy-subtle text-sm">
                  Plot 49/51 Danjuma Drive, Trans Amadi Industrial Layout, Port Harcourt <br /> +234 908 765 9940
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <img src={mailIcon} alt="" className="size-4 mt-0.5 shrink-0" />
                <p className="font-light text-navy-subtle text-sm">info@eunisell.com</p>
              </div>
              <div className="flex gap-3 items-start">
                <img src={phoneIcon} alt="" className="size-4 mt-0.5 shrink-0" />
                <p className="font-light text-navy-subtle text-sm">
                  234 908 765 9938 <br /> 234 908 765 9939
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between w-full">
          <p className="font-light text-white text-sm">© 2026 Eunisell Production Solutions Limited. All rights reserved.</p>

          <div className="flex flex-wrap gap-8 items-start">
            {legalLinks.map(({ label, path }) =>
              path ? (
                <Link key={label} to={path} className="font-light text-white text-sm whitespace-nowrap">
                  {label}
                </Link>
              ) : (
                <a key={label} href="#" className="font-light text-white text-sm whitespace-nowrap">
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
