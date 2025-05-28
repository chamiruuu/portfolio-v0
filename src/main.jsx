import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import FontLoader from './components/FontLoader'
import { preloadFonts } from './utils/fontPreloader'
import './index.css'
import './styles/Fonts.css' // Ensure Fonts.css is imported early
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'

// Preload fonts as early as possible
preloadFonts();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FontLoader>
      <SmoothScroll>
        <BrowserRouter>
          <CustomCursor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
    </FontLoader>
  </StrictMode>
)
