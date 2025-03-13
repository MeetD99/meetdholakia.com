import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { isDesktop } from 'react-device-detect';
import { ArrowRight, ArrowUpRight } from 'lucide-react'; // Import the TopRight Arrow

const CustomCursor = () => {
    const defaultSize = 15;
    const hoverSize = 40; // Size when hovering over specific elements
    const bigHoverSize = 150;
    
    const [cursorSize, setCursorSize] = useState(defaultSize);
    const [bigHover, setBigHover] = useState(false); // Track big hover state
    const [linkHover, setLinkHover] = useState(false);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    };

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);
        return () => window.removeEventListener('mousemove', manageMouseMove);
    }, [cursorSize]);

    // Function to handle hover effects
    const addHoverEffect = () => setCursorSize(hoverSize);
    const removeHoverEffect = () => {
        setCursorSize(defaultSize);
        setBigHover(false); // Reset big hover state
        setLinkHover(false);
    };

    const addBigHoverEffect = () => {
        setCursorSize(bigHoverSize);
        setBigHover(true); // Enable big hover state
    };

    const addLinkHover = () => {
        setLinkHover(true);
    }


    // Attach event listeners
    useEffect(() => {
        const hoverElements = document.querySelectorAll('.cursor-hover');
        const bigHoverElements = document.querySelectorAll('.big-cursor-hover');
        const cursorLinks = document.querySelectorAll('.cursor-link');

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', addHoverEffect);
            el.addEventListener('mouseleave', removeHoverEffect);
        });

        cursorLinks.forEach(el => {
            el.addEventListener('mouseenter', addLinkHover);
            el.addEventListener('mouseleave', removeHoverEffect);
        })

        bigHoverElements.forEach(el => {
            el.addEventListener('mouseenter', addBigHoverEffect);
            el.addEventListener('mouseleave', removeHoverEffect);
        });

        return () => {
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', addHoverEffect);
                el.removeEventListener('mouseleave', removeHoverEffect);
            });

            bigHoverElements.forEach(el => {
                el.removeEventListener('mouseenter', addBigHoverEffect);
                el.removeEventListener('mouseleave', removeHoverEffect);
            });

            cursorLinks.forEach(el => {
                el.removeEventListener('mouseenter', addLinkHover);
                el.removeEventListener('mouseleave', removeHoverEffect);
            })
        };
    }, []);

    return (
        <motion.div
            className={`fixed bg-white mix-blend-difference ${linkHover ? '':'rounded-[50%]'} z-[100] flex items-center justify-center pointer-events-none ${isDesktop ? '' : 'hidden'}`}
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                width: linkHover ? 60 : cursorSize,
                height: linkHover ? 20 : cursorSize
            }}
        >   
            {linkHover && (<span className='flex items-center justify-center ' style={{fontFamily: 'Instrument Serif'}}>view <ArrowRight size={16}/></span>)}
            {bigHover && <ArrowUpRight size={100} strokeWidth={4} className="text-black" />} {/* Show the arrow when bigHover is true */}
        </motion.div>
    );
};

export default CustomCursor;
