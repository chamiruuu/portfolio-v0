import { useState, useEffect } from 'react';

/**
 * A hook that returns true if the window matches the provided media query
 * @param {string} query - Media query to match
 * @returns {boolean} - True if the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener that changes "matches" when the media query changes
    const handleChange = (event) => {
      setMatches(event.matches);
    };
    
    // Add the listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Remove the listener on cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;