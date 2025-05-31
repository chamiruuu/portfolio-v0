import { useEffect, useRef, useCallback } from 'react';

/**
 * A hook for working with animations, particularly with GSAP/Framer Motion
 * @param {Function} animationCallback - Function that sets up the animation
 * @param {Array} dependencies - Dependencies array for the effect
 * @returns {Object} - Returns { ref, play, pause, restart }
 */
const useAnimation = (animationCallback, dependencies = []) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const callbackRef = useRef(animationCallback);
  
  // Update the callback ref when it changes
  useEffect(() => {
    callbackRef.current = animationCallback;
  }, [animationCallback]);
  
  // Store dependencies in a ref
  const dependenciesRef = useRef(dependencies);
  
  // Update dependencies ref when they change
  useEffect(() => {
    dependenciesRef.current = dependencies;
  }, [dependencies]);
  
  // Setup animation
  useEffect(() => {
    if (elementRef.current) {
      // Clear any existing animation
      if (animationRef.current && animationRef.current.kill) {
        animationRef.current.kill();
      }
      
      // Create new animation
      animationRef.current = callbackRef.current(elementRef.current);
    }
    
    return () => {
      // Cleanup animation on unmount
      if (animationRef.current && animationRef.current.kill) {
        animationRef.current.kill();
      }
    };
  }, []);
  
  // Animation controls
  const play = useCallback(() => {
    if (animationRef.current && animationRef.current.play) {
      animationRef.current.play();
    }
  }, []);
  
  const pause = useCallback(() => {
    if (animationRef.current && animationRef.current.pause) {
      animationRef.current.pause();
    }
  }, []);
  
  const restart = useCallback(() => {
    if (animationRef.current && animationRef.current.restart) {
      animationRef.current.restart();
    }
  }, []);
  
  return { ref: elementRef, play, pause, restart };
};

export default useAnimation;
