import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/FontLoader.module.css';

// This component helps prevent FOUT (Flash of Unstyled Text)
// by ensuring that custom fonts are loaded before displaying content
const FontLoader = ({ children }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to force a redraw/reflow to help with font rendering
    // Using refs instead of direct DOM manipulation
    const forceReflow = () => {
      if (containerRef.current) {
        // Trigger reflow in a React-friendly way
        containerRef.current.style.display = 'none';
        void containerRef.current.offsetHeight;
        containerRef.current.style.display = '';
      }
    };
  
    // Handle font loading in a comprehensive way
    const loadFont = async () => {
      try {
        if ('fonts' in document) {
          // If font is already loaded and available - avoid duplicate messages
          if (document.fonts.check('1em ThePrestigeSignature')) {
            setFontLoaded(true);
            return;
          }
          
          // Wait for document fonts to be ready (loaded by fontPreloader.js)
          await document.fonts.ready;
          
          // Verify the specific font is available
          const isFontAvailable = document.fonts.check('1em ThePrestigeSignature');
          
          if (isFontAvailable) {
            forceReflow(); // Force reflow to update rendering
            setFontLoaded(true);
          } else {
            setFontLoaded(true); // Still proceed to avoid blocking UI
          }
        } else {
          // Fallback for older browsers without Font API
          setTimeout(() => setFontLoaded(true), 500);
        }
      } catch (error) {
        console.error('Error in font loading process:', error);
        setFontLoaded(true); // Prevent blocking UI if font fails
      }
    };
    
    // Start the font loading process
    loadFont();
    
    // Safety timeout to ensure UI is never permanently hidden
    const safetyTimeout = setTimeout(() => {
      if (!fontLoaded) {
        console.warn('Font loading safety timeout reached');
        setFontLoaded(true);
        forceReflow();
      }
    }, 2000);
    
    return () => clearTimeout(safetyTimeout);
  }, [fontLoaded]);

  return (
    <div className={`${styles.fontLoaderContainer} ${fontLoaded ? 'fonts-loaded' : 'fonts-loading'}`}>
      {children}
    </div>
  );
};

FontLoader.propTypes = {
  children: PropTypes.node.isRequired
};

export default FontLoader;
