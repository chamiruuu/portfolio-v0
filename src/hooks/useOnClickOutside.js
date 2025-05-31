import { useEffect } from 'react';

/**
 * A hook that triggers a callback when a click occurs outside an element
 * @param {React.RefObject} ref - Reference to the element to detect outside clicks
 * @param {Function} callback - Function to call when an outside click is detected
 */
const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      
      callback(event);
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
