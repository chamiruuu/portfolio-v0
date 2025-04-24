import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/CustomCursor.module.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const mouse = useRef({ x: pos.current.x, y: pos.current.y });
    const trailSpeed = 0.06;

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;
        gsap.set([cursor, trail], { xPercent: -50, yPercent: -50 });
        const xSetCursor = gsap.quickSetter(cursor, "x", "px");
        const ySetCursor = gsap.quickSetter(cursor, "y", "px");
        const xSetTrail = gsap.quickSetter(trail, "x", "px");
        const ySetTrail = gsap.quickSetter(trail, "y", "px");

        const handleMouseMove = (e) => {
            mouse.current.x = e.x;
            mouse.current.y = e.y;
        };

        window.addEventListener("mousemove", handleMouseMove);

        gsap.ticker.add(() => {
            const dtTrail = 1.0 - Math.pow(1.0 - trailSpeed, gsap.ticker.deltaRatio());
            pos.current.x += (mouse.current.x - pos.current.x) * dtTrail;
            pos.current.y += (mouse.current.y - pos.current.y) * dtTrail;
            xSetCursor(mouse.current.x);
            ySetCursor(mouse.current.y);
            xSetTrail(pos.current.x);
            ySetTrail(pos.current.y);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            gsap.ticker.remove();
        };
    }, []);

    return (
        <>
            <div className={styles.cursor} ref={cursorRef}></div>
            <div className={styles.trail} ref={trailRef}></div>
        </>
    );
};

export default CustomCursor;