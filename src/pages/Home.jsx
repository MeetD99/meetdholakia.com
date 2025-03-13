import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useAnimate, useInView } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Lenis from 'lenis';
import CircularText from '../components/CircularText';
import { isDesktop, isMobile } from 'react-device-detect';
import FigmaCursor from '../components/FigmaCursor';
import Carousel from '../components/Carousel';
import Bento from '../components/Bento';

const Home = () => {
    
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    const containerRef = useRef(null);
    const blinkVideo = useRef(null);
    const csvVideo = useRef(null);
    const encodeVideo = useRef(null);

    const isInView = useInView(blinkVideo, { amount: 0.7, once: false });
    const isInView2 = useInView(csvVideo, { amount: 0.5, once: false });
    const isInView3 = useInView(encodeVideo, { amount: 0.5, once: false });

    if (blinkVideo.current) {
        if (isInView) {
            blinkVideo.current.classList.remove('grayscale');
          blinkVideo.current.play();
        } else {
            blinkVideo.current.classList.add('grayscale');
          blinkVideo.current.pause();
        }
      }

      if (csvVideo.current) {
        if (isInView2) {
            csvVideo.current.classList.remove('grayscale');
          csvVideo.current.play();
        } else {
            csvVideo.current.classList.add('grayscale');
          csvVideo.current.pause();
        }
      }

      if (encodeVideo.current) {
        if (isInView3) {
            encodeVideo.current.classList.remove('grayscale');
          encodeVideo.current.play();
        } else {
            encodeVideo.current.classList.add('grayscale');
          encodeVideo.current.pause();
        }
      }

    const [path, animatePath] = useAnimate();
    const [paraPath, animateParaPath] = useAnimate();
    const [paraPath2, animateParaPath2] = useAnimate();
    const [para, animatePara] = useAnimate();
    const [p, aP] = useAnimate();

    const handleParaPath = () => {
        animateParaPath(paraPath.current, {pathLength: 1}, {duration: 1, ease: 'easeInOut'})
        animateParaPath2(paraPath2.current, {pathLength: 1}, {duration: 1, ease: 'easeInOut'})
    }

    const handleParaPathRemove = () => {
        animateParaPath(paraPath.current, {pathLength: 0}, {duration: 0.3, ease: 'easeInOut'})
        animateParaPath2(paraPath2.current, {pathLength: 0}, {duration: 0.3, ease: 'easeInOut'})
    }

    const handlePara = () => {
        animatePara(para.current, {opacity: 1}, {duration: 0.5, ease: 'easeInOut'})
        
    }

    const handleParaRemove = () => {
        animatePara(para.current, {opacity: 0}, {duration: 0.5, ease: 'easeInOut'})
        
    }

    const age = new Date().getFullYear() - 2004;
    

    const handlePathAnimation = () => {
        animatePath(path.current, {pathLength: 1}, {duration: 1, ease: 'easeInOut'})
        aP(p.current, {opacity: 1}, {duration: 0.5, ease: 'easeInOut'})
    }

    const handleAnimationRemove = () => {
        animatePath(path.current, {pathLength: 0}, {duration: 0.5, ease: 'easeInOut'})
        aP(p.current, {opacity: 0}, {duration: 0.5, ease: 'easeInOut'})
    }

    const galleryCon = useRef(null);
    const { scrollYProgress } = useScroll({
        target: galleryCon,
        offset: ['start end', 'end start'],
    })

    const comic = useRef(null);
    const {scrollYProgress: secondScroll} = useScroll({
        target: comic,
        offset: ['start start', 'end end'],
    })


    const y = [
        useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2]),
        useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3.3]),
        useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 1.25]),
        useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3]),
    ];

    const columnTop = ["top-[-65%]", "top-[-105%]", "top-[-45%]", "top-[-75%]"]
    const mobileColumnTop = ["top-[-60%]", "top-[-155%]", "top-[-75%]", "top-[-75%]"]
    const images = [
        [
            "/projects/5.png",
            "/projects/6.png",
            "/projects/3.png"
        ],
        [
            "/projects/1.png",
            "/projects/2.png",
            "/projects/4.png"
        ],
        [
            "/projects/3.png",
            "/projects/4.png",
            "/projects/1.png"
        ],
        [
            "/projects/6.png",
            "/projects/5.png",
            "/projects/6.png"
        ]
    ];

    const comicPanels = [
        "/comic/1.png", 
        "/comic/2.png", 
        "/comic/3.png", 
        "/comic/4.png", 
        "/comic/5.png"
      ];

    const workex = [
        {
            name: "Blink Analytics Ahmedabad",
            link: "https://blinkanalytics.in",
            videoSrc: "/videos/Blink-Linkedin-Video.mp4",
            role: "✦ Freelance Web Development",
            skills: ["UI/UX Design", "Frontend Development", "Basic SEO"],
            videoRef: blinkVideo
        },
        {
            name: "Choksi Shamalji Vallabhji Jewellers, Junagadh",
            link: "https://choksisv.in",
            videoSrc: "/videos/choksisv-video.mp4",
            role: "✦ Web Development Internship",
            skills: ["UI/UX Design", "Frontend Development", "Backend and Hosting"],
            videoRef: csvVideo
        },
        {
            name: "Encode PDEU, Gandhinagar",
            link: "https://encodepdeu.vercel.app",
            videoSrc: "/videos/encode-video.mp4",
            role: "✦ Website Development - Contributor",
            skills: ["Project Management", "Frontend Development Contribution"],
            videoRef: encodeVideo
        }
    ];

    return (
        <div className=''>
            <motion.div
                ref={containerRef}
                className="hero min-h-[100vh] bg-black overflow-hidden sticky top-0 px-[3%] lg:pt-[5%] md:pt-[8%] sm:pt-[10%] pt-[16%] pb-[2%] flex flex-col justify-between"
                // style={{background: 'radial-gradient(circle at -50% -300%, #000000 80%, #8F00FF 100%)'}}
                animate={{
                    background: [
                        'radial-gradient(circle at -50% -300%, #000000 80%, #8F00FF 100%)',
                        'radial-gradient(circle at 50% -100%, #000000 80%, #6A00AA 100%)',
                    ]
                }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            >
                {/* <Scene /> */}

                <div className="top w-full flex flex-col lg:flex-row justify-between">
                        <div className="absolute top-2/3 left-1/2"><FigmaCursor /></div>
                        <div className="overflow-hidden">
                            <motion.h1 
                                initial={{x: '-100%', opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 1, ease: 'easeInOut'}}
                                className='text-white lg:text-[20vw] text-[30vw] leading-none z-1 select-none' 
                                data-value="DEVELOPER"
                                // onMouseOver={handleGlitch}
                                style={{fontFamily: "Highrise"}}
                                >DEVELOPER</motion.h1>
                            <motion.h1 
                                initial={{x: '-100%', opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 0.5, delay: 0.5, ease: 'easeInOut'}}
                                className='text-[#8f00ff] lg:text-[10vw] text-[15vw] leading-[70%] -translate-y-1/3 z-2 px-2 select-none inline-block' 
                                style={{fontFamily: "Whitenice"}}>and Designer
                                <svg width="60%" height="auto" viewBox="0 0 231 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='place-self-end'>
                                    <motion.path 
                                        initial={{pathLength: 0}}
                                        animate={{pathLength: 1}}
                                        transition={{duration: 0.5, ease: 'easeInOut', delay: 1}}
                                        d="M1.88178 18.2414C10.4821 16.9208 18.9888 14.2162 27.553 12.4867C41.8338 9.60261 55.7338 7.9956 70.099 6.43063C95.8773 3.62231 123.896 1.37292 149.5 2.5C176.206 3.67558 203.567 5.92987 229 12.4867" stroke="#8F00FF" stroke-width="3" stroke-linecap="butt"/>
                                </svg>
                            </motion.h1>
                        </div>  
                        <div className='flex flex-col justify-between items-start'>
                            <motion.div 
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, ease: 'easeInOut', delay: 1}}>
                                <CircularText
                                    text="Student&bull;Innovator&bull;"
                                    spinDuration={20}
                                    className="custom-class"
                                    onHover='goBonkers'
                                    container={containerRef}
                                />
                            </motion.div>
                        </div>
                        
                    
                </div>
                <div className="bottom flex justify-between ">
                    <motion.div className="left max-w-[70vw] overflow-hidden">
                        <motion.p
                            className='text-white lg:text-2xl md:text-2xl sm:text-xl text-md lg:pb-0 md:pb-0 sm:pb-0 pb-[5%]'
                            style={{ fontFamily: "LayGrotesk" }}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}>
                            &bull; I'm Meet Dholakia, a passionate <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic", letterSpacing: 1.2 }}>Designer</span> + Developer,
                            turning ideas into interactive and visually stunning web experiences.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="right self-end justify-end "
                        animate={{ y: [0, -10] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                        <p className='text-white flex items-center justify-center font-mono sm:text-xs text-[8px]'>&#123; scroll &#125;&nbsp;<ArrowDown color='white' size={12} /></p>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                className="about min-h-[100vh] relative bg-[#fffbf7] py-[10%] px-[5%] flex lg:flex-row flex-col gap-10 justify-between"
                id='About'
                initial={{ clipPath: (!isMobile ? 'ellipse(100% 80% at 50% 80%)' : 'ellipse(100% 100% at 50% 50%)' )}}
                whileInView={{ clipPath: 'ellipse(100% 100% at 50% 50%)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                viewport={{ amount: 0.6 }}
            >

                <div className="left flex-1 flex flex-col justify-between gap-10 ">
                    <div>
                        <p className='font-mono sm:text-xs text-[8px]'>&#123; PROFILE &#125;</p>
                        <div className="overflow-hidden">
                        <motion.h1 
                            className='xl:text-[3vw] lg:text-[3vw] md:text-[4vw] text-[6vw] relative select-none' 
                            style={{fontFamily: 'LayGrotesk', fontWeight: 'bold'}}
                            onHoverStart={handleParaPath}
                            onHoverEnd={handleParaPathRemove}
                            onTouchStart={handleParaPath}
                            onTouchEnd={handleParaPathRemove}
                            >
                            I am a {age} year old Software Developer from Gujarat, India. 
                            I am a passionate tech enthusiast and web developer who has a knack 
                            for building cool and interactive stuff on the web. 
                            {isDesktop && (<motion.svg width="186" height="92" viewBox="0 0 186 92" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='absolute xl:top-[0%] sm:top-[-3%] left-[15%]'
                            >
                                <path 
                                ref={paraPath}
                                initial={{pathLength: 0}}
                                d="M142.452 2.02225C128.854 2.02225 94.0849 6.26261 86.5727 6.26261C79.0606 6.26261 66.8923 8.32245 59.4754 9.42197C53.2502 10.3448 46.7745 12.5612 40.6083 13.9664C36.5536 14.8904 33.4855 16.6773 29.6346 17.7869C22.4156 19.8668 16.6489 24.2135 11.3451 28.6451C8.95618 30.6412 7.32625 33.9953 5.56948 36.4068C3.81527 38.8148 4.51409 40.2678 3.64427 42.7207C-1.02278 55.8819 14.1023 61.3027 27.0837 63.472C36.7 65.0791 47.4636 65.0003 57.2614 65.0003C72.3986 65.0003 86.7889 64.7664 101.782 62.7884C111.494 61.5071 124.816 59.3769 133.789 56.3136C141.834 53.5667 142.812 52.1695 150.682 49.0748C154.645 47.5165 159.779 41.9945 159.779 38.5382C159.779 22.3476 136.374 13.3203 121.66 9.42196C90.7073 1.22162 53.5526 2.02225 21.1637 2.02225" stroke="#8F00FF" stroke-width="4" stroke-linecap="butt"/>
                            </motion.svg>)}
                            {isDesktop && (<motion.svg width="300" height="17" viewBox="0 0 300 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className='absolute top-[80%] left-[30%]'
                            >
                                <path 
                                ref={paraPath2}
                                initial={{pathLength:0}}
                                d="M2 14.8111C2.22585 13.0042 5.30522 6.99936 7 6.81105C9.67558 6.51376 8.15809 3.81105 11 3.81105C15.41 3.81105 17.8072 6.12536 20.3889 9.69994C24.1561 14.916 27.2049 14.0549 30.7778 9.58883C31.9431 8.13219 31.7729 7.48259 33.2222 6.03327C33.8405 5.41504 33.7072 4.54826 34.2222 4.03327C34.961 3.29454 37 3.31105 37 3.31105C39.3669 0.352424 45.1203 3.2105 48 4.03328C50.8797 4.85605 52.0312 11.4616 55 13.0333C63.5524 17.561 65.272 5.81105 74 5.81105C78.2503 5.81105 80.7615 6.31863 83.7778 9.03327C86.8352 11.785 87.824 14.8111 92.5 14.8111C93.9588 14.8111 96.4077 15.1339 96.9444 13.2555C97.7285 10.5113 99.1988 11.1679 100.778 9.58883C103.962 6.40494 106.531 4.81107 111.5 4.81107C112.48 4.81107 117.5 6.81107 117.5 6.81107L121 10.3111C122.236 10.6643 122.259 12.9579 123 14.2555C123.662 15.4139 127.768 14.8835 129 14.8111C131.185 14.6825 131 11.2125 132 9.21253C132.5 7.21253 133 5.94937 136.5 5.21253C146 3.21253 145 7.81107 146 9.21253C147.5 12.3111 148.543 14.8111 152 14.8111C153.989 14.8111 156.014 14.9214 158 14.8111C161.588 14.6117 162.95 6.81105 166.5 6.81105C169.21 6.81105 176.495 5.76891 177 9.81105C177.18 11.2508 179.724 11.4654 180 13.8111C180.204 15.5436 184.146 14.8111 185.5 14.8111C190.911 14.8111 198.459 1.82579 204.222 7.58883C207.413 10.7796 209.084 12.8111 214.5 12.8111C219.026 12.8111 220.495 8.14664 224 6.58883C232.678 2.73173 236.317 13.8111 244.5 13.8111C246.749 13.8111 252.714 10.2404 253 7.81105C253.46 3.89895 261.876 8.70405 262.444 8.86661C262.609 8.91373 266.897 11.1823 267 11.3111C267.773 12.2778 271.34 12.0133 272.5 11.7555C276.832 10.7929 278.31 6.81105 283 6.81105C287.916 6.81105 287 11.8825 290.444 12.8666C294.569 14.0452 298 15.3658 298 9.81105" stroke="#8F00FF" stroke-width="4" stroke-linecap="butt"/>
                            </motion.svg>)}
                            </motion.h1>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <p 
                            style={{fontFamily: 'LayGrotesk'}}
                            className='lg:text-xl md:text-lg '
                        >Specializing in full-stack web development, animations, and interactive web experiences, I strive to create cool and engaging user interfaces for the Web. From dynamic visuals to seamless functionality, I bring ideas to life through code.</p>
                    </div>
                     
                </div>
                <div className="right relative flex-1 flex flex-col gap-5">
                    <motion.img
                        src="/profile.jpg" alt="" srcset=""
                        className='origin-top object-cover ml-auto self-start select-none'
                        width={400}
                        height={600}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }} 
                        onHoverStart={handlePathAnimation}
                        onHoverEnd={handleAnimationRemove}
                        onTouchStart={handlePathAnimation}
                        onTouchEnd={handleAnimationRemove}>
                            
                        </motion.img>
                    
                    <motion.svg width="181" height="93" viewBox="0 0 181 93" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className='absolute top-[2%] right-[30%]'>
                        <motion.path 
                            ref={path}
                            initial={{pathLength: 0}}
                        d="M2 51C5.80581 51 10.134 45.6787 11.7778 42.5555C14.0849 38.172 13 31.8215 13 27C13 24.6667 13 22.3333 13 20C13 18.6402 13.3196 16.8687 12.9444 15.5555C12.632 14.4621 11.1818 15.4543 11 14C10.7432 11.946 7 12.645 7 15C7 16.7375 6.18174 21.9454 7.5 23C11.5907 26.2725 11.3372 34.505 14.4444 38.5C15.9581 40.4461 16.7028 42.531 17.0556 45C17.5196 48.2486 20.6575 52.027 22.2222 55C25.4518 61.1362 26.7142 68.0364 30.2222 74C30.9294 75.2022 32.6608 74.9955 32.9444 76.5555C33.2394 78.1776 33.7288 79.4211 34.2222 81C34.9349 83.2805 37.7118 87.7118 39.5 89.5C41.6585 91.6585 37.5014 90.6189 36.9444 87.5555C36.5272 85.2605 33.8801 81.9759 33 79.5555C30.9194 73.8338 31 67.5857 31 61.4444C31 54.0268 35.2573 55 41.5 55C44.5963 55 45.3368 58.7619 47.5 60.4444C49.6695 62.1318 48.4869 64.8496 50.2222 66.7778C53.6227 70.5561 52.291 77 59 77C66.8239 77 72 75.3438 72 66C72 59.8106 73.3944 48.8099 65.5 47.0555C57.4889 45.2753 65.7258 58.4525 67 60.2222C69.9389 64.304 73.9814 67.2016 79.2222 67C87.3442 66.6876 89 55.248 89 49.2222C89 40.1021 86.3208 30.6669 82.4444 22.4444C81.2298 19.8679 78.8985 11.2166 75 11C66.8942 10.5497 79.6892 32.8977 80.4444 35.0555C84.1489 45.6396 106.856 66.3361 111.778 45.5555C113.692 37.4734 110.688 29.4752 109.222 21.7778C108.16 16.1986 105.253 7.85583 101.778 3.22221C100.248 1.18253 98.1026 1.79892 97.2222 3.99999C94.8865 9.83941 99.5418 19.8614 102.111 25C105.358 31.4945 110.393 40 118.556 40C129.473 40 124.001 25.9977 126.5 19.5C127.708 16.3594 127.626 12.6798 130.5 10.4444C132.661 8.76348 133.518 5.69119 130.556 9.49999C127.397 13.5613 127.813 30.4642 134.778 31C137.657 31.2214 140.991 33.5009 143.222 30.5555C145.948 26.9576 146.165 18.8969 143 15.4444C140.793 13.0371 137.612 7.9716 134 9.77776C131.841 10.8571 132.664 16.2405 134.556 17.4444C144.051 23.4873 152.796 13.7593 161.944 13.0555C170.456 12.4008 175.387 15.7736 179 23" stroke="#8F00FF" stroke-width="4" stroke-linecap="butt"/>
                    </motion.svg>

                    <motion.p 
                        ref={p}
                        initial={{opacity: 0}}
                        className='absolute lg:top-[55%] xl:top-[60%] xl:left-[50%] top-[45%] lg:left-[40%] left-[40%] md:top-[60%] md:left-[65%]  font-bold text-[#8f00ff]'
                        style={{fontFamily: 'Whitenice'}}>May the Force be with you ;&#41;</motion.p>

                    
                    <div className='flex xl:flex-row lg:flex-col md:flex-row sm:flex-col flex-col gap-6'> 
                        <motion.img
                            src="/profile2.jpg" alt="" srcset=""
                            className='origin-top object-cover mr-auto self-start ml-20'
                            width={250}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            onHoverStart={handlePara}
                            onHoverEnd={handleParaRemove}
                            onTouchStart={handlePara}
                            onTouchEnd={handleParaRemove}
                            transition={{ duration: 1, ease: 'easeInOut' }}>        
                        </motion.img>
                        <div className="overflow-hidden self-center">
                            <motion.p
                                ref={para}
                                style={{fontFamily: "Whitenice"}}
                                className='text-[#8f00ff] text-2xl  font-bold ml-4' 
                                initial={{opacity: 0}}
                            >“Genius, billionaire, playboy, philanthropist?” – More like Developer, Debugger, Night Owl, Chai Addict.</motion.p>
                        </div>
                    </div>
                    
                </div>
            </motion.div>
            <div className="gallery md:h-[150vh] h-[100vh] w-full relative bg-black flex flex-row gap-[2vw] justify-center p-[2vw] overflow-hidden">

                {[...Array(4)].map((_, columnIndex) => (
                    <motion.div
                        key={columnIndex}
                        className={`column md:min-w-[25%] min-w-[50%] h-[100%] flex relative flex-col gap-[20px] md:gap-[20px] ${window.innerWidth >= 768 ? columnTop[columnIndex] :mobileColumnTop[columnIndex]}`}
                        style={{ y: y[columnIndex] }}>
                        {images[columnIndex].map((src, imgIndex) => (
                            <div key={imgIndex} className="imgContainer w-[100%] h-[100%] flex items-center relative object-cover opacity-75">
                                <img src={src} alt="" className='rounded-[20px]' />
                            </div>
                        ))}
                    </motion.div>
                ))}
                <div
                    className="title absolute top-1/2 -translate-1/2 left-1/2  z-[2] bg-black/75 px-[10vw] lg:px-[5vw] overflow-hidden "
                    style={{
                        clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
                    }}>
                    <a href="/Projects">
                        <motion.h1
                            className='text-gray-300 text-[20vw] lg:text-[10vw] big-cursor-hover leading-none'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            style={{
                                fontFamily: "Highrise",
                            }}>PROJECTS</motion.h1></a>
                </div>
            </div>
            <div className=' bg-white relative p-[10%] flex flex-col gap-[10vh]'>
                <p className='font-mono sm:text-lg text-[8px] text-black'>&#123; Work Experience &#125;</p>
                {workex.map((project, index) => (
                <div key={index} className="blink flex flex-col">
                    <div className={`video md:w-[70%] w-[100%] ${index == 1 ? 'self-end' : ''}`}>
                        <a href={project.link} className="cursor-link" target="_blank">
                            <video
                                loop
                                muted
                                autoPlay
                                playsInline
                                className='p-4 grayscale border-2 border-black'
                                ref={project.videoRef}
                            >
                                <source src={project.videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </a>
                        <div className='flex flex-col gap-2'>
                            <a href={project.link} className="hover:underline cursor-hover">
                                <h1 className="md:text-[2vw] text-[3vw] leading-none mt-4 font-bold" style={{ fontFamily: "LayGrotesk" }}>
                                    {project.name}
                                </h1>
                            </a>
                            <h1 className='md:text-[2vw] text-[3.2vw] whitespace-nowrap text-[#8f00ff]' style={{ fontFamily: 'Whitenice' }}>{project.role}</h1>
                            <ul className='flex gap-4 font-mono select-none md:text-[1.5vw] text-[8px]'>
                                {project.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className='p-1 border-2 border-black'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div className="bg-black w-full relative flex flex-col gap-10 p-[10%] overflow-hidden border-b-8">
                <p className='font-mono sm:text-lg text-[8px] text-white'>&#123; My Journey &#125;</p>
                <Carousel />
            </div>
            {/* <Bento /> */}
            <div className="extra bg-white relative px-[5%] py-[10%] flex flex-col">
                <h1 className='text-black text-[4vw] text-center self-center leading-none max-w-[60vw]' style={{fontFamily: "LayGrotesk"}}>I bring <span style={{fontFamily: "Instrument Serif", fontStyle: "italic"}}>ideas</span> to life… and sometimes back from the <span style={{fontFamily: "Instrument Serif", fontStyle: "italic"}}>dead</span> (thanks, Ctrl+Z).</h1>
                <Bento />
            </div>

        </div>
    );
}

export default Home;
