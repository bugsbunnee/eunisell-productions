import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface BackgroundVideoProps {
  sources: string[];
  className?: string;
  overlayClassName?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ sources, className, overlayClassName }) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = sources.length > 1;

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none ${className ?? ''}`}>
      <AnimatePresence>
        <motion.video
          key={sources[index]}
          src={sources[index]}
          autoPlay
          muted
          loop={!hasMultiple}
          playsInline
          onEnded={() => hasMultiple && setIndex((current) => (current + 1) % sources.length)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 size-full object-cover"
        />
      </AnimatePresence>

      {overlayClassName && <div className={`absolute inset-0 z-10 ${overlayClassName}`} />}
    </div>
  );
};
