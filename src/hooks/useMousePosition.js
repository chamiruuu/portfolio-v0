import { useState, useEffect } from 'react';

/**
 * A hook that tracks the current mouse position
 * @param {number} throttleMs - Optional throttle in milliseconds to limit updates
 * @returns {Object} - Returns { x, y } coordinates
 */
const useMousePosition = (throttleMs = 0) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let timeoutId = null;
    
    const handleMouseMove = (event) => {
      if (throttleMs > 0) {
        if (timeoutId === null) {
          timeoutId = setTimeout(() => {
            setMousePosition({ x: event.clientX, y: event.clientY });
            timeoutId = null;
          }, throttleMs);
        }
      } else {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [throttleMs]);
  
  return mousePosition;
};

export default useMousePosition;
