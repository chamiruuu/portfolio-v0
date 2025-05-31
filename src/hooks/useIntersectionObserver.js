import { useState, useEffect, useRef } from 'react';

/**
 * A hook to detect when an element intersects with the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {Function} callback - Optional callback function when intersection changes
 * @returns {Array} - Returns [ref, isIntersecting, entry]
 */
const useIntersectionObserver = (options = {}, callback = null) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);
  const observerRef = useRef(null);
  
  // Store the options in a ref to avoid dependency issues
  const optionsRef = useRef(options);
  
  // Update the ref when options change
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions = {
      root: optionsRef.current.root || null,
      rootMargin: optionsRef.current.rootMargin || '0px',
      threshold: optionsRef.current.threshold || 0.1
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
      
      if (callback && typeof callback === 'function') {
        callback(entry);
      }
    }, observerOptions);

    const currentElement = elementRef.current;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
        observerRef.current.disconnect();
      }
    };
  }, [callback]);

  return [elementRef, isIntersecting, entry];
};

export default useIntersectionObserver;