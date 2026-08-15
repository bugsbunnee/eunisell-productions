import { FadeIn } from '../../common/motion';
import { SOCIAL_LINKS } from '../../layout/footer.constants';

import linkedinIcon from '../../../assets/icons/management-team/linkedin.svg';

interface ExecutiveProfileProps {
  name: string;
  title: string;
  bio: string[];
  image: string;
  reverse?: boolean;
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({ name, title, bio, image, reverse = false }) => {
  const photo = (
    <FadeIn className="h-100 sm:h-125 lg:h-187.5 rounded-2xl overflow-hidden shrink-0">
      <img src={image} alt={name} className="size-full object-cover" />
    </FadeIn>
  );

  const content = (
    <FadeIn delay={0.15} className="flex flex-col gap-3 items-start">
      <div className="flex flex-col gap-0.5 items-start w-full">
        <h2 className="font-bold text-accent text-5xl leading-[1.15]">{name}</h2>
        <p className="font-semibold text-secondary text-2xl leading-9">{title}</p>
      </div>

      <div className="bg-secondary h-0.5 w-20" />

      <div className="flex flex-col gap-4 items-start">
        {bio.map((paragraph) => (
          <p key={paragraph} className="font-normal text-article-text text-lg leading-[28.8px]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex gap-6 items-center pt-2">
        <p className="font-bold text-accent text-sm uppercase tracking-[0.7px]">Connect</p>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="bg-ice-blue rounded-full flex items-center justify-center shrink-0 size-10"
        >
          <img src={linkedinIcon} alt="" className="w-3.5 h-4" />
        </a>
      </div>
    </FadeIn>
  );

  return (
    <div className={`grid grid-cols-1 ${reverse ? 'lg:grid-cols-[1fr_600px]' : 'lg:grid-cols-[600px_1fr]'} gap-9 lg:gap-36 items-center px-9 md:px-16 lg:px-36`}>
      {reverse ? (
        <>
          {content}
          {photo}
        </>
      ) : (
        <>
          {photo}
          {content}
        </>
      )}
    </div>
  );
};

export default ExecutiveProfile;
