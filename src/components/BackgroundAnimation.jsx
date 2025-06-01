import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

// Styles for the container
const BackgroundAnimationStyles = `
  .animationContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    background-color: #000000;
  }
`;

const BackgroundAnimation = () => {
    const mountRef = useRef(null);
    const animationFrameId = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const backgroundPlaneRef = useRef(null);
    const shaderMaterialRef = useRef(null);

    // Vertex shader remains the same
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    // Fragment shader with Simplex noise for waves and added fine grain
    const fragmentShader = `
        varying vec2 vUv;
        uniform float u_time;
        uniform vec2 u_resolution; // Available if needed

        // Helper functions for Simplex Noise (from Ashima Arts)
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
            const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx) ;
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute( permute( permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    //  mod(j,N)
            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
        }

        // Simple pseudo-random noise for fine grain
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
            vec2 uv = vUv;

            // Base color - Pure black for the dominant background, even darker
            vec3 baseColor = vec3(0.0); // Remains pure black

            // White influence, randomly distributed and moving
            float whiteNoiseScale = 0.8; // Controls size of white patches
            float whiteNoiseSpeed = 0.04; // Further reduced speed for slower movement
            float whiteInfluence = snoise(vec3(uv * whiteNoiseScale, u_time * whiteNoiseSpeed));
            whiteInfluence = smoothstep(-0.8, -0.1, whiteInfluence); 

            // Subtle color tint for the white areas (optional, can be removed for pure white)
            vec3 subtleTint = vec3(
                0.5 + 0.5 * sin(u_time * 0.03 + uv.x * 0.5), // Further reduced speed
                0.5 + 0.5 * sin(u_time * 0.03 + uv.y * 0.5 + 1.0), // Further reduced speed
                0.5 + 0.5 * sin(u_time * 0.03 + uv.x * 0.5 + 2.0)  // Further reduced speed
            );
            // Mix white with a very slight tint
            vec3 whiteMix = mix(vec3(1.0), subtleTint, 0.1); 

            // Final color is a mix of base dark color and the white/subtle-tinted areas
            vec3 finalColor = mix(baseColor, whiteMix, whiteInfluence * 0.05); 

            // Simplex Noise "Waves" - slower and smoother
            float waveNoiseFrequency = 1.5;
            float waveNoiseSpeed = 0.2; // Further reduced speed for slower movement
            float waveIntensity = 0.08; 
            float wavePattern = snoise(vec3(uv * waveNoiseFrequency, u_time * waveNoiseSpeed));
            finalColor += wavePattern * waveIntensity; 

            // Fine Grain effect - slower and smoother
            float fineGrainFrequency = 15.0; 
            float fineGrainSpeed = 0.2; // Further reduced speed for slower movement
            float fineGrainIntensity = 0.055; 
            float grain = (random(uv * fineGrainFrequency + u_time * fineGrainSpeed) - 0.5) * fineGrainIntensity;
            finalColor += grain;

            // Add vignette effect (fade to black at edges)
            vec2 vignetteCenter = vec2(0.5, 0.5);
            float vignetteSize = 0.7; 
            float vignetteSoftness = 1.5; 
            
            vec2 vignetteCoord = (uv - vignetteCenter) * 2.0;
            float vignetteStrength = 1.0 - pow(length(vignetteCoord * vignetteSize), vignetteSoftness);
            vignetteStrength = smoothstep(0.0, 1.0, vignetteStrength);

            // Add fade effect at the bottom edge
            // uv.y is 0 at the bottom, 1 at the top
            // We want it to fade to black as uv.y approaches 0
            float bottomFadeStart = 0.08; // Reduced to make the fade height less (e.g., 8% up from bottom)
            float bottomFadeEnd = 0.0;   // Fully black at the very bottom
            float bottomFade = smoothstep(bottomFadeEnd, bottomFadeStart, uv.y);
            
            // Combine vignette and bottom fade
            finalColor *= vignetteStrength * bottomFade;
            finalColor = clamp(finalColor, 0.0, 1.0);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    const initThreeScene = useCallback((currentMount) => {
        // Ensure currentMount has valid dimensions before proceeding
        if (!currentMount || currentMount.clientWidth === 0 || currentMount.clientHeight === 0) {
            console.warn("BackgroundAnimation: Mount ref is not ready or has zero dimensions.");
            return;
        }

        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
        cameraRef.current.position.z = 3;

        try {
            // Create renderer with proper WebGL context
            rendererRef.current = new THREE.WebGLRenderer({ 
                antialias: true, 
                alpha: false,
                powerPreference: 'high-performance',
                failIfMajorPerformanceCaveat: true
            });
            rendererRef.current.setSize(width, height);
            rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for better performance
            currentMount.appendChild(rendererRef.current.domElement);
        } catch (error) {
            console.error("Failed to initialize WebGL renderer:", error);
            return;
        }

        const clock = new THREE.Clock();

        const vFOV = THREE.MathUtils.degToRad(cameraRef.current.fov);
        const planeHeightAtZ0 = 2 * Math.tan(vFOV / 2) * cameraRef.current.position.z;
        const planeWidthAtZ0 = planeHeightAtZ0 * cameraRef.current.aspect;
        
        const planeGeometry = new THREE.PlaneGeometry(planeWidthAtZ0, planeHeightAtZ0);
        shaderMaterialRef.current = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2(width, height) },
            },
            vertexShader,
            fragmentShader,
        });
        backgroundPlaneRef.current = new THREE.Mesh(planeGeometry, shaderMaterialRef.current);
        sceneRef.current.add(backgroundPlaneRef.current);

        const animate = () => {
            animationFrameId.current = requestAnimationFrame(animate);
            
            try {
                const elapsedTime = clock.getElapsedTime();
                
                if (shaderMaterialRef.current) {
                    shaderMaterialRef.current.uniforms.u_time.value = elapsedTime;
                }
                
                if (rendererRef.current && sceneRef.current && cameraRef.current) {
                    rendererRef.current.render(sceneRef.current, cameraRef.current);
                }
            } catch (error) {
                console.error("Error in animation loop:", error);
                cancelAnimationFrame(animationFrameId.current);
            }
        };
        
        // Start animation loop
        animate();

    }, [fragmentShader, vertexShader]);

    const handleResize = useCallback(() => {
        try {
            // Ensure all required references are valid before proceeding
            if (!mountRef.current || 
                mountRef.current.clientWidth === 0 || 
                mountRef.current.clientHeight === 0 || 
                !rendererRef.current || 
                !cameraRef.current || 
                !backgroundPlaneRef.current || 
                !shaderMaterialRef.current) {
                console.warn("BackgroundAnimation: Resize handler called with invalid references or dimensions.");
                return;
            }

            const currentMount = mountRef.current;
            const newWidth = currentMount.clientWidth;
            const newHeight = currentMount.clientHeight;

            // Update camera aspect ratio
            cameraRef.current.aspect = newWidth / newHeight;
            cameraRef.current.updateProjectionMatrix();

            // Calculate new plane dimensions
            const vFOV = THREE.MathUtils.degToRad(cameraRef.current.fov);
            const newPlaneHeight = 2 * Math.tan(vFOV / 2) * cameraRef.current.position.z;
            const newPlaneWidth = newPlaneHeight * cameraRef.current.aspect;
            
            // Dispose of old geometry and create new one
            if (backgroundPlaneRef.current.geometry) {
                backgroundPlaneRef.current.geometry.dispose();
            }
            backgroundPlaneRef.current.geometry = new THREE.PlaneGeometry(newPlaneWidth, newPlaneHeight);
            
            // Update shader uniforms
            shaderMaterialRef.current.uniforms.u_resolution.value.set(newWidth, newHeight);

            // Resize renderer
            rendererRef.current.setSize(newWidth, newHeight);
            rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for better performance
        } catch (error) {
            console.error("Error during resize handling:", error);
        }
    }, []);


    useEffect(() => {
        const currentMount = mountRef.current;
        let mounted = true;

        // Only initialize if the component is still mounted
        if (currentMount && mounted) {
            try {
                initThreeScene(currentMount);
                window.addEventListener('resize', handleResize);
            } catch (error) {
                console.error("Error initializing Three.js scene:", error);
            }
        }

        return () => {
            mounted = false;
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
            window.removeEventListener('resize', handleResize);
            
            // Properly dispose of Three.js resources to prevent memory leaks
            try {
                if (shaderMaterialRef.current) {
                    shaderMaterialRef.current.dispose();
                    shaderMaterialRef.current = null;
                }
                
                if (backgroundPlaneRef.current && backgroundPlaneRef.current.geometry) {
                    backgroundPlaneRef.current.geometry.dispose();
                    backgroundPlaneRef.current = null;
                }
                
                if (sceneRef.current) {
                    // Dispose of all objects in the scene
                    sceneRef.current.traverse((object) => {
                        if (!object.isMesh) return;
                        if (object.geometry) object.geometry.dispose();
                        if (object.material) {
                            if (Array.isArray(object.material)) {
                                object.material.forEach(material => material.dispose());
                            } else {
                                object.material.dispose();
                            }
                        }
                    });
                    sceneRef.current.clear(); // Clear the scene
                    sceneRef.current = null;
                }

                // Handle renderer cleanup
                if (rendererRef.current) {
                    // Safely remove the canvas element if it exists and is a child of currentMount
                    if (rendererRef.current.domElement && currentMount && currentMount.contains(rendererRef.current.domElement)) {
                        currentMount.removeChild(rendererRef.current.domElement);
                    }
                    
                    rendererRef.current.forceContextLoss();
                    rendererRef.current.dispose();
                    rendererRef.current = null;
                }
            } catch (error) {
                console.error("Error during Three.js cleanup:", error);
            }
        };
    }, [initThreeScene, handleResize]);

    return (
        <>
            <style>{BackgroundAnimationStyles}</style>
            <div ref={mountRef} className="animationContainer" />
        </>
    );
};

export default BackgroundAnimation;
