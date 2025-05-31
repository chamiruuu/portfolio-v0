import { useState, useEffect } from 'react';

/**
 * A hook to track window scroll position
 * @param {number} throttleMs - Throttle in milliseconds
 * @returns {Object} - Returns { x, y, direction } object
 */
const useScrollPosition = (throttleMs = 100) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: typeof window !== 'undefined' ? window.pageXOffset : 0,
    y: typeof window !== 'undefined' ? window.pageYOffset : 0,
    direction: null
  });

  useEffect(() => {
    let previousScrollY = window.pageYOffset;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset;
          const direction = previousScrollY > currentScrollY ? 'up' : 'down';
          
          setScrollPosition({
            x: window.pageXOffset,
            y: currentScrollY,
            direction
          });
          
          previousScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    let throttleTimeout;
    const throttledHandleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          handleScroll();
        }, throttleMs);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttleMs]);

  return scrollPosition;
};

export default useScrollPosition;