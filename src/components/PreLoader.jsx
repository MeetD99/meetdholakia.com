import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const bars = 5; // Number of bars

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 1400); // Slight delay after animations
          return 100;
        }
        return oldProgress + 2;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Animation Variants
  const containerVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const barVariants = {
    initial: { scaleY: 1 },
    animate: (i) => ({
      scaleY: 0,
      transition: { delay: ( i < 3 ? (1.4 + i * 0.1) : (1.4 - i * 0.1)), duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white">
      {/* Animated Background Slide-in */}
      <motion.div
        className="flex w-full h-full absolute inset-0 gap-0 origin-left"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Sequentially Disappearing Bars */}
        {Array.from({ length: bars }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-[1_1_0] bg-gray-300 origin-top"
            variants={barVariants}
            initial="initial"
            animate="animate"
            custom={i} // Pass index for staggered delay
          ></motion.div>
        ))}
      </motion.div>

      {/* Loading Text with Blend Effect */}
      <div className="relative z-10 text-center mix-blend-difference">
        <div className="overflow-hidden">
          <motion.h1 className="text-lg sm:text-2xl font-semibold tracking-wider font-mono" initial={{y: 0}} animate={{y: "100%"}} transition={{delay: 1.2, duration: 0.5}}>
            MeetDholakia<motion.h1 className="inline-block" style={{fontFamily: "Instrument Serif", fontStyle: "italic"}}>.com</motion.h1>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p className="mt-2 text-sm sm:text-base" 
                    style={{fontFamily: "Instrument Serif", fontStyle: "italic"}}
                    initial={{y: 0}} animate={{y: "100%"}} transition={{delay: 1.4, duration: 0.5}}>
                      &#123;loading&#125;&nbsp;&nbsp;{progress}%
          </motion.p>
        </div>
        </div>
    </motion.div>
  );
};

export default Preloader;
