import { useState, useEffect } from 'react';

/**
 * A hook to use localStorage for persisting state
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value
 * @returns {Array} - Returns [storedValue, setValue] pair
 */
const useLocalStorage = (key, initialValue) => {
  // Create state based on stored value or initial value
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  
  // Update localStorage when state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
};

export default useLocalStorage;