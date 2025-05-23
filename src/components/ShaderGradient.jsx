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
    z-index: -1; /* Ensure it's in the background */
    overflow: hidden; /* Prevent scrollbars from canvas */
    background-color: #040407; /* Fallback background, very dark */
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
        // uniform vec2 u_resolution; // Available if needed

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

            // Glow effect
            vec2 glowCenter = vec2(0.5, 0.60);
            vec2 aspectCorrectionFactors = vec2(0.6, 1.0);
            vec2 diff = (uv - glowCenter) * aspectCorrectionFactors;
            float distToGlow = length(diff);
            float glowIntensity = smoothstep(0.45, 0.05, distToGlow);

            // Base color
            vec3 baseColor = vec3(0.015); // Very dark gray

            // Glow color - Adjusted to be whiter
            vec3 glowEffectColor = vec3(0.12); // Increased values for a brighter, whiter glow
            
            vec3 color = baseColor + glowEffectColor * glowIntensity * 0.7;

            // Simplex Noise "Waves"
            float waveNoiseFrequency = 2.5; // Lower for larger, slower waves
            float waveNoiseSpeed = 0.08;    // Slower speed
            float waveIntensity = 0.035;   // Subtle intensity for waves

            float wavePattern = snoise(vec3(uv * waveNoiseFrequency, u_time * waveNoiseSpeed));
            // snoise output is roughly in [-1, 1].
            color += wavePattern * waveIntensity;

            // Fine Grain effect
            float fineGrainFrequency = 75.0; // Frequency of the grain
            float fineGrainSpeed = 0.6;      // How fast the grain animates
            float fineGrainIntensity = 0.012;// Strength of the grain

            float grain = (random(uv * fineGrainFrequency + u_time * fineGrainSpeed) - 0.5) * fineGrainIntensity;
            color += grain;

            // Clamp final color
            color = clamp(color, 0.0, 1.0);

            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const initThreeScene = useCallback((currentMount) => {
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
        cameraRef.current.position.z = 3;

        rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        rendererRef.current.setSize(width, height);
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(rendererRef.current.domElement);

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
            const elapsedTime = clock.getElapsedTime();
            if (shaderMaterialRef.current) {
                shaderMaterialRef.current.uniforms.u_time.value = elapsedTime;
            }
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };
        animate();

    }, [fragmentShader, vertexShader]);

    const handleResize = useCallback(() => {
        if (!mountRef.current || !rendererRef.current || !cameraRef.current || !backgroundPlaneRef.current || !shaderMaterialRef.current) return;

        const currentMount = mountRef.current;
        const newWidth = currentMount.clientWidth;
        const newHeight = currentMount.clientHeight;

        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();

        const vFOV = THREE.MathUtils.degToRad(cameraRef.current.fov);
        const newPlaneHeight = 2 * Math.tan(vFOV / 2) * cameraRef.current.position.z;
        const newPlaneWidth = newPlaneHeight * cameraRef.current.aspect;
        
        if (backgroundPlaneRef.current.geometry) {
            backgroundPlaneRef.current.geometry.dispose();
        }
        backgroundPlaneRef.current.geometry = new THREE.PlaneGeometry(newPlaneWidth, newPlaneHeight);
        shaderMaterialRef.current.uniforms.u_resolution.value.set(newWidth, newHeight);

        rendererRef.current.setSize(newWidth, newHeight);
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
    }, []);


    useEffect(() => {
        const currentMount = mountRef.current;
        if (currentMount) {
            initThreeScene(currentMount);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('resize', handleResize);
            
            if (shaderMaterialRef.current) shaderMaterialRef.current.dispose();
            if (backgroundPlaneRef.current && backgroundPlaneRef.current.geometry) {
                backgroundPlaneRef.current.geometry.dispose();
            }
            
            if (sceneRef.current) {
                while(sceneRef.current.children.length > 0){ 
                    const object = sceneRef.current.children[0];
                    if(object.geometry) object.geometry.dispose();
                    if(object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                    sceneRef.current.remove(object); 
                }
            }

            if (rendererRef.current) {
                if (rendererRef.current.domElement && currentMount && currentMount.contains(rendererRef.current.domElement)) {
                     currentMount.removeChild(rendererRef.current.domElement);
                }
                rendererRef.current.dispose();
                rendererRef.current = null;
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
