import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToView } from '../lib/utils';

const useLocationChange = () => {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    const samePage = previousPathname.current === location.pathname;
    previousPathname.current = location.pathname;

    if (location.hash && samePage) scrollToView(location.hash.slice(1));
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return location;
};

export default useLocationChange;
