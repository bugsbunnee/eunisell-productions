import { toast } from 'sonner';
import { Link2 } from 'lucide-react';

import dayjs from '../../../lib/dayjs';
import linkedinIcon from '../../../assets/icons/footer/social-linkedin.svg';
import xIcon from '../../../assets/icons/footer/social-x.svg';

interface BlogMetaBarProps {
  publishedAt: string | null;
  readTime: string;
  authorName: string;
}

const BlogMetaBar: React.FC<BlogMetaBarProps> = ({ publishedAt, readTime, authorName }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard');
    } catch {
      toast.error('Could not copy the link');
    }
  };

  return (
    <nav className="bg-white border-y border-line flex flex-col md:flex-row gap-6 md:items-center justify-between px-9 md:px-16 lg:px-36 py-6">
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-navy-subtle text-xs tracking-[1.2px] uppercase">Published</span>
          <span className="font-semibold text-accent text-base">{publishedAt ? dayjs(publishedAt).format('MMMM D, YYYY') : '—'}</span>
        </div>

        <div className="flex flex-col gap-1 border-l border-line pl-10">
          <span className="font-medium text-navy-subtle text-xs tracking-[1.2px] uppercase">Read Time</span>
          <span className="font-semibold text-accent text-base">{readTime}</span>
        </div>

        <div className="flex flex-col gap-1 border-l border-line pl-10">
          <span className="font-medium text-navy-subtle text-xs tracking-[1.2px] uppercase">Author</span>
          <span className="font-semibold text-accent text-base">{authorName}</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="font-medium text-navy-subtle text-sm">Share:</span>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex items-center justify-center border border-line rounded-full size-10 hover:border-secondary transition-colors"
        >
          <img src={linkedinIcon} alt="" className="size-4" />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="flex items-center justify-center border border-line rounded-full size-10 hover:border-secondary transition-colors"
        >
          <img src={xIcon} alt="" className="size-4" />
        </a>

        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Copy link"
          className="flex items-center justify-center border border-line rounded-full size-10 hover:border-secondary transition-colors"
        >
          <Link2 className="size-4 text-accent" />
        </button>
      </div>
    </nav>
  );
};

export default BlogMetaBar;
