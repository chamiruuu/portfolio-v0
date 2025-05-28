import { useEffect, useState } from 'react';
import styles from '../styles/FontLoader.module.css';

// This component helps prevent FOUT (Flash of Unstyled Text)
// by ensuring that custom fonts are loaded before displaying content
const FontLoader = ({ children }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Function to force a redraw/reflow to help with font rendering
    const forceReflow = () => {
      document.body.style.display = 'none';
      // Force a reflow
      void document.body.offsetHeight;
      document.body.style.display = '';
    };
  
    // Handle font loading in a comprehensive way
    const loadFont = async () => {
      try {
        if ('fonts' in document) {
          // If font is already loaded and available
          if (document.fonts.check('1em ThePrestigeSignature')) {
            console.log('Font already loaded');
            setFontLoaded(true);
            return;
          }
          
          // Use FontFace API for modern browsers
          const fontFaceUrl = new URL('../fonts/Theprestigesignature-ywwaM.otf', import.meta.url).href;
          const customFont = new FontFace('ThePrestigeSignature', `url(${fontFaceUrl})`);
          
          // Load and add the font to document fonts
          const loadedFont = await customFont.load();
          document.fonts.add(loadedFont);
          
          // Wait for all document fonts to be ready
          await document.fonts.ready;
          
          // Verify the specific font is available
          const isFontAvailable = document.fonts.check('1em ThePrestigeSignature');
          
          if (isFontAvailable) {
            console.log('ThePrestigeSignature loaded successfully');
            forceReflow(); // Force reflow to update rendering
            setFontLoaded(true);
          } else {
            console.warn('Font loaded but not available for rendering');
            setFontLoaded(true); // Still proceed to avoid blocking UI
          }
        } else {
          // Fallback for older browsers without Font API
          console.log('Using font load fallback');
          // Add a minor delay before assuming font is loaded
          setTimeout(() => setFontLoaded(true), 500);
        }
      } catch (error) {
        console.error('Error loading font:', error);
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

export default FontLoader;
