/**
 * Utility to preload fonts programmatically with comprehensive approach
 */
export const preloadFonts = () => {
  const fontFamily = 'ThePrestigeSignature';
  const fontPath = '/src/fonts/Theprestigesignature-ywwaM.otf';
  
  // Method 1: Use link preload
  const addPreloadLink = () => {
    if (document.querySelector(`link[href="${fontPath}"]`)) {
      return; // Link already exists
    }
    
    const fontPreloadLink = document.createElement('link');
    fontPreloadLink.rel = 'preload';
    fontPreloadLink.href = fontPath;
    fontPreloadLink.as = 'font';
    fontPreloadLink.type = 'font/otf';
    fontPreloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreloadLink);
  };
  
  // Method 2: Load via CSS Font Loading API
  const loadViaFontAPI = async () => {
    if (!('fonts' in document)) {
      return false; // API not supported
    }
    
    try {
      const fontFace = new FontFace(fontFamily, `url(${fontPath})`, {
        display: 'block',
        weight: 'normal',
        style: 'normal'
      });
      
      // Start loading the font
      await fontFace.load();
      
      // Add to document fonts
      document.fonts.add(fontFace);
      
      // Force a reflow to help with font rendering
      document.body.style.display = 'none';
      void document.body.offsetHeight;
      document.body.style.display = '';
      
      console.log('Font loaded via Font API');
      return true;
    } catch(e) {
      console.error('Error loading font via API:', e);
      return false;
    }
  };
  
  // Method 3: Use a CSS class with font-face declaration
  const addFontFaceStyle = () => {
    const styleId = 'font-face-style';
    if (document.getElementById(styleId)) {
      return; // Style already exists
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @font-face {
        font-family: '${fontFamily}';
        src: url('${fontPath}') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
    `;
    document.head.appendChild(style);
  };
  
  // Method 4: Create a DOM element to trigger font loading
  const createFontTriggerElement = () => {
    const fontPreloader = document.createElement('div');
    fontPreloader.style.fontFamily = fontFamily;
    fontPreloader.style.position = 'absolute';
    fontPreloader.style.visibility = 'hidden';
    fontPreloader.style.pointerEvents = 'none';
    fontPreloader.style.top = '-9999px';
    fontPreloader.style.left = '-9999px';
    fontPreloader.innerHTML = 'Chamiru Fernando';
    document.body.appendChild(fontPreloader);
    
    // Clean up after a short delay
    setTimeout(() => {
      if (fontPreloader.parentNode) {
        document.body.removeChild(fontPreloader);
      }
    }, 2000);
  };
  
  // Execute all strategies for best compatibility
  addPreloadLink();
  addFontFaceStyle();
  loadViaFontAPI().catch(() => {}); // Catch any promise rejections
  createFontTriggerElement();
  
  // Add a class to document when font is detected as loaded
  if (document.fonts) {
    document.fonts.ready.then(() => {
      if (document.fonts.check(`16px ${fontFamily}`)) {
        document.documentElement.classList.add('fonts-loaded');
        console.log('Font detected as loaded');
      }
    }).catch(() => {}); // Handle any promise rejections
  }
};
