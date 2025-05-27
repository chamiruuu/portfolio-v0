import { useEffect, useRef } from "react";
import styles from "../styles/ImageDistort.module.css";
import * as THREE from "three";
import heroImage from "../assets/abtheroimg.avif";

export default function ImageHoverEffect() {
  const containerRef = useRef();
  const threeRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    planeMesh: null,
    animationFrameId: null,
    mousePosition: { x: 0.5, y: 0.5 },
    targetMousePosition: { x: 0.5, y: 0.5 },
    prevPosition: { x: 0.5, y: 0.5 },
    aberrationIntensity: 0.0,
    easeFactor: 0.08, // Increased for smoother movement
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const imageContainer = containerRef.current;
    const ref = threeRef.current;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
          vec2 gridUV = floor(vUv * vec2(30.0, 30.0)) / vec2(30.0, 30.0);  // Increased grid size for smoother distortion
          vec2 centerOfPixel = gridUV + vec2(1.0/30.0, 1.0/30.0);

          vec2 mouseDirection = u_mouse - u_prevMouse;
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.4, 0.0, pixelDistanceToMouse);  // Increased range for smoother falloff

          vec2 uvOffset = strength * -mouseDirection * 0.15;  // Reduced distortion intensity
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));  // Reduced chromatic aberration
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;

    const initializeScene = (texture) => {
      ref.scene = new THREE.Scene();

      // Calculate aspect ratio
      const containerAspect = imageContainer.offsetWidth / imageContainer.offsetHeight;
      const imageAspect = texture.image.width / texture.image.height;

      // Adjust plane size to maintain image aspect ratio
      let planeWidth = 1;
      let planeHeight = 1;
      
      if (containerAspect > imageAspect) {
        planeWidth = imageAspect / containerAspect;
      } else {
        planeHeight = containerAspect / imageAspect;
      }

      ref.camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 1000);
      ref.camera.position.z = 1;

      const shaderUniforms = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_aberrationIntensity: { value: 0.0 },
        u_texture: { value: texture },
      };

      ref.planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(planeWidth, planeHeight),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );
      ref.scene.add(ref.planeMesh);

      ref.renderer = new THREE.WebGLRenderer({ antialias: true });
      ref.renderer.setSize(imageContainer.offsetWidth, imageContainer.offsetHeight);
      ref.renderer.setPixelRatio(window.devicePixelRatio);

      // Clear any existing canvas
      while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
      }

      imageContainer.appendChild(ref.renderer.domElement);
    };

    const animateScene = () => {
      if (!ref.renderer) return;

      ref.mousePosition.x += (ref.targetMousePosition.x - ref.mousePosition.x) * ref.easeFactor;
      ref.mousePosition.y += (ref.targetMousePosition.y - ref.mousePosition.y) * ref.easeFactor;

      ref.planeMesh.material.uniforms.u_mouse.value.set(
        ref.mousePosition.x,
        1.0 - ref.mousePosition.y
      );
      ref.planeMesh.material.uniforms.u_prevMouse.value.set(
        ref.prevPosition.x,
        1.0 - ref.prevPosition.y
      );

      ref.aberrationIntensity = Math.max(0.0, ref.aberrationIntensity - 0.05);
      ref.planeMesh.material.uniforms.u_aberrationIntensity.value = ref.aberrationIntensity;

      ref.renderer.render(ref.scene, ref.camera);
      ref.animationFrameId = requestAnimationFrame(animateScene);
    };

    const handleResize = () => {
      if (ref.camera && ref.renderer && imageContainer) {
        ref.camera.aspect = imageContainer.offsetWidth / imageContainer.offsetHeight;
        ref.camera.updateProjectionMatrix();
        ref.renderer.setSize(imageContainer.offsetWidth, imageContainer.offsetHeight);
      }
    };

    const handleMouseMove = (event) => {
      const rect = imageContainer.getBoundingClientRect();
      ref.prevPosition = { ...ref.targetMousePosition };
      ref.targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      ref.targetMousePosition.y = (event.clientY - rect.top) / rect.height;
      ref.aberrationIntensity = 1;
    };

    const handleMouseEnter = (event) => {
      const rect = imageContainer.getBoundingClientRect();
      ref.mousePosition.x = ref.targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      ref.mousePosition.y = ref.targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      ref.easeFactor = 0.05;
      ref.targetMousePosition = { ...ref.prevPosition };
    };

    // Load texture and initialize
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(heroImage, (texture) => {
      initializeScene(texture);
      animateScene();
    });

    // Add event listeners
    window.addEventListener('resize', handleResize);
    imageContainer.addEventListener("mousemove", handleMouseMove);
    imageContainer.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      
      if (ref.animationFrameId) {
        cancelAnimationFrame(ref.animationFrameId);
      }
      
      if (ref.renderer) {
        ref.renderer.dispose();
        if (ref.renderer.domElement && ref.renderer.domElement.parentNode) {
          ref.renderer.domElement.parentNode.removeChild(ref.renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div className={styles.imageContainer} ref={containerRef}></div>
  );
}
