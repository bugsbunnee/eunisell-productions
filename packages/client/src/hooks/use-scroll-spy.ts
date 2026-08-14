import { useEffect, useState } from 'react';

const useScrollSpy = (ids: string[], offset = 160) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLine = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollLine) current = id;
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
