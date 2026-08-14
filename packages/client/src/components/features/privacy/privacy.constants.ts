import rightOfAccess from '../../../assets/icons/privacy/right-of-access.svg';
import rightToRectification from '../../../assets/icons/privacy/right-to-rectification.svg';
import rightToErasure from '../../../assets/icons/privacy/right-to-erasure.svg';
import rightToObject from '../../../assets/icons/privacy/right-to-object.svg';

export interface TocItem {
  number: string;
  label: string;
  id?: string;
}

export const TOC_ITEMS: TocItem[] = [
  { number: '01', label: 'Introduction', id: 'introduction' },
  { number: '02', label: 'Personal Data We Collect', id: 'personal-data-we-collect' },
  { number: '03', label: 'How We Use Personal Data', id: 'how-we-use-personal-data' },
  { number: '04', label: 'Cookies & Technologies', id: 'cookies-technologies' },
  { number: '05', label: 'Sharing Personal Data', id: 'sharing-personal-data' },
  { number: '06', label: 'Data Security', id: 'data-security' },
  { number: '07', label: 'Protection Rights', id: 'protection-rights' },
  { number: '08', label: 'Contact Us', id: 'contact-us' },
  { number: '09', label: 'Complaints', id: 'complaints' },
];

export interface RightCard {
  icon: string;
  iconClassName?: string;
  title: string;
  description: string;
}

export const RIGHTS_CARDS: RightCard[] = [
  {
    icon: rightOfAccess,
    title: 'Right of Access',
    description: 'Request a copy of your personal data and check that we are lawfully processing it.',
  },
  {
    icon: rightToRectification,
    title: 'Right to Rectification',
    description: 'Have any incomplete or inaccurate data we hold about you corrected.',
  },
  {
    icon: rightToErasure,
    iconClassName: 'w-6',
    title: 'Right to Erasure',
    description: 'Ask us to delete or remove personal data where there is no good reason for us to continue processing it.',
  },
  {
    icon: rightToObject,
    iconClassName: 'w-[30px] h-[26px]',
    title: 'Right to Object',
    description: 'Object to processing where we are relying on a legitimate interest.',
  },
];
