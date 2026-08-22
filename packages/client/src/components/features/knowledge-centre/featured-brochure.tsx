import type { PublicKnowledgeResource } from '../../../services/public-knowledge-resource.service';
import { FadeIn } from '../../common/motion';
import { Skeleton } from '../../ui/skeleton';
import { formatFileSize } from '../../../lib/utils';
import fileIcon from '../../../assets/icons/knowledge-centre/file-icon.svg';
import downloadIcon from '../../../assets/icons/knowledge-centre/download-icon.svg';

interface FeaturedBrochureProps {
  resource: PublicKnowledgeResource | null | undefined;
  isLoading: boolean;
}

const FeaturedBrochure: React.FC<FeaturedBrochureProps> = ({ resource, isLoading }) => {
  if (!isLoading && !resource) return null;

  return (
    <section className="bg-surface flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 md:py-24 lg:py-36 w-full">
      <FadeIn className="bg-white border border-line rounded-2xl shadow-[0px_16px_32px_0px_rgba(0,32,55,0.05)] grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full max-w-432">
        <div className="bg-deep-navy flex items-center justify-center p-9 md:p-16 lg:p-20">
          {isLoading || !resource ? (
            <Skeleton className="h-130 w-95 rounded-lg" />
          ) : (
            <img
              src={resource.coverImage}
              alt={`${resource.title} cover`}
              className="h-130 max-w-full w-95 rounded-lg shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-10 items-start justify-center p-9 md:p-16 lg:p-20 w-full">
          {isLoading || !resource ? (
            <div className="flex w-full flex-col gap-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-6 items-start">
                <p className="font-bold text-secondary text-sm tracking-[1.4px] uppercase">{resource.category}</p>

                <h2 className="font-light text-accent text-4xl lg:text-[45px] leading-[1.23] tracking-[-0.09px]">{resource.title}</h2>

                <p className="font-normal text-navy-subtle text-lg leading-[1.6]">{resource.description}</p>

                <div className="flex gap-3 items-center">
                  <img src={fileIcon} alt="" className="size-5" />
                  <span className="font-normal text-navy-subtle text-sm">
                    {resource.fileType} • {formatFileSize(resource.fileSizeBytes)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 items-center">
                <a
                  href={resource.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary rounded-full flex gap-3 items-center px-8 py-4.5 font-bold text-white text-base"
                >
                  Download Brochure
                  <img src={downloadIcon} alt="" className="size-4" />
                </a>
                <a
                  href={resource.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-accent rounded-full flex items-center justify-center px-8 py-4 font-bold text-accent text-base"
                >
                  View Brochure
                </a>
              </div>
            </>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default FeaturedBrochure;
