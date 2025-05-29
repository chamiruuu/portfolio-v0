import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import styles from "../styles/GlobeBackground.module.css";

const GlobeBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000 * 2,
      height: 1000 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.4, 1],
      markers: [
        // longitude latitude - customize these to your preferred locations
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },  // London
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [19.0760, 72.8777], size: 0.05 },  // Mumbai
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className={styles.globeContainer}>
      <canvas
        ref={canvasRef}
        className={styles.globeCanvas}
      />
    </div>
  );
};

export default GlobeBackground;
