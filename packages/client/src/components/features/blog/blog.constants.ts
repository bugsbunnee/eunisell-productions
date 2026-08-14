import featuredImg from '/blog/featured-offshore-platform.png';
import wellTestingImg from '/blog/well-testing.png';
import engineeringImg from '/blog/engineering.png';
import operationsMaintenanceImg from '/blog/operations-maintenance.png';
import productionEnhancementImg from '/blog/production-enhancement.png';
import facilitiesImg from '/blog/facilities.png';
import waterSolutionsImg from '/blog/water-solutions.png';
import equipmentImg from '/blog/equipment.png';
import hseqImg from '/blog/hseq.png';
import productionOperationsImg from '/blog/production-operations.png';

export interface Post {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const FEATURED_POST: Post = {
  image: featuredImg,
  category: 'Production Operations',
  title: 'Improving Production Reliability Across the Asset Lifecycle',
  excerpt: 'Discover how Eunisell implements lifecycle-based approaches to eliminate unplanned downtime and maximize the recovery factor of maturing assets.',
  readTime: '12 min read',
};

export const POSTS: Post[] = [
  {
    image: wellTestingImg,
    category: 'Well Testing',
    title: 'Why Accurate Well Testing Matters for Reservoir Management',
    excerpt: 'Reliable data is the backbone of production optimization. Learn our approach to high-precision…',
    readTime: '5 min read',
  },
  {
    image: engineeringImg,
    category: 'Engineering',
    title: 'From FEED to Commissioning: Navigating Complex Projects',
    excerpt: 'A comprehensive look at our engineering workflows that ensure seamless project execution.',
    readTime: '8 min read',
  },
  {
    image: operationsMaintenanceImg,
    category: 'Operations & Maintenance',
    title: 'Reducing Unplanned Downtime through Predictive Maintenance',
    excerpt: 'How AI-driven analytics are transforming the way we maintain critical production assets.',
    readTime: '7 min read',
  },
  {
    image: productionEnhancementImg,
    category: 'Production Enhancement',
    title: 'Unlocking Additional Production in Brownfield Assets',
    excerpt: 'Proven techniques for revitalizing mature fields and boosting secondary recovery.',
    readTime: '6 min read',
  },
  {
    image: facilitiesImg,
    category: 'Facilities',
    title: 'The Role of Modular Production Facilities in Speed to Market',
    excerpt: 'Why plug-and-play modular solutions are becoming the industry standard for rapid deployment.',
    readTime: '5 min read',
  },
  {
    image: waterSolutionsImg,
    category: 'Water Solutions',
    title: 'Managing Produced Water: Environmental and Operational Benefits',
    excerpt: 'Strategies for sustainable water management in complex production environments.',
    readTime: '9 min read',
  },
  {
    image: equipmentImg,
    category: 'Equipment',
    title: 'Rental or Purchase? Choosing the Best Asset Strategy',
    excerpt: 'A financial and operational comparison of equipment procurement models for E&P companies.',
    readTime: '4 min read',
  },
  {
    image: hseqImg,
    category: 'HSEQ',
    title: 'Embedding HSEQ into Every Stage of the Production Lifecycle',
    excerpt: 'Beyond compliance: how a safety-first culture drives operational performance.',
    readTime: '7 min read',
  },
  {
    image: productionOperationsImg,
    category: 'Production Operations',
    title: 'A Lifecycle Approach to Subsurface and Surface Integration',
    excerpt: 'Optimizing the interface between reservoir management and surface facilities.',
    readTime: '10 min read',
  },
];

export interface FilterCategory {
  label: string;
  lines: string[];
}

export const FILTER_CATEGORIES: FilterCategory[] = [
  { label: 'All Insights', lines: ['All', 'Insights'] },
  { label: 'Engineering', lines: ['Engineering'] },
  { label: 'Production Operations', lines: ['Production', 'Operations'] },
  { label: 'Well Testing', lines: ['Well', 'Testing'] },
  { label: 'Facilities', lines: ['Facilities'] },
  { label: 'Operations & Maintenance', lines: ['Operations &', 'Maintenance'] },
  { label: 'Production Enhancement', lines: ['Production', 'Enhancement'] },
  { label: 'Equipment', lines: ['Equipment'] },
  { label: 'HSEQ', lines: ['HSEQ'] },
];
