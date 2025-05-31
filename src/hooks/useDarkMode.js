import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

/**
 * A hook to manage dark mode state
 * @param {string} defaultTheme - The default theme ('light' or 'dark')
 * @returns {Array} - Returns [theme, toggleTheme] pair
 */
const useDarkMode = (defaultTheme = 'light') => {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', defaultTheme);
  const [theme, setTheme] = useState(storedTheme);
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light-mode', 'dark-mode');
    root.classList.add(`${theme}-mode`);
    
    setStoredTheme(theme);
  }, [theme, setStoredTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export default useDarkMode;