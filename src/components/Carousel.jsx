import { useState } from "react";
import { motion, AnimatePresence, time } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselData = [
  {
    text: "The Revelation",
    desc: "I wasn't always deep into code and animations. As a kid, I loved figuring out how things worked—dismantling toys, exploring games, and tweaking gadgets. But the real spark came when I discovered web development tutorials online. Creating something from nothing with just a few lines of code felt like magic.",
    image: "/comic/1.png",
    time: "2020 - 2022"
  },
  {
    text: "The Grind",
    desc: "Enrolling in Computer Engineering, I started with the basics—HTML, CSS, JavaScript—but quickly went beyond class assignments. While others followed traditional paths, I explored the MERN stack, GSAP animations, and 3D modeling. My curiosity pushed me to build dynamic, interactive websites with a creative flair.",
    image: "/comic/2.png",
    time: "2022 - 2023"
  },
  {
    text: "The Awakening",
    desc: "The real turning point came when I deployed my first project. Seeing something I built go live for the world to interact with was an eye-opener—it wasn’t just about writing code; it was about creating experiences. That moment fueled my passion for building dynamic, interactive websites that blend functionality with creativity.",
    image: "/comic/3.png",
    time: "2023"
  },
  {
    text: "The Rise",
    desc: "Each project became a playground to push creative boundaries, transforming static websites into engaging, story-driven experiences. That fascination soon turned into an obsession, driving me to explore the art of crafting animations that don’t just look good but feel intuitive and natural.",
    image: "/comic/4.png",
    time: "2023 - 2024"
  },
  {
    text: "The Legacy",
    desc: "Looking ahead, I want to push the boundaries of web experiences even further—blending interactivity, storytelling, and animation to create truly immersive digital spaces. My goal is to make the web more dynamic and engaging. Beyond just building, I hope to inspire others to explore the creative side of web development, leaving behind a legacy of innovation and seamless digital experiences.",
    image: "/comic/5.png",
    time: "2025 - Present"
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));

  return (
    <motion.div 
        className="w-full mx-auto md:max-h-[600px] flex md:flex-row flex-col md:gap-0 gap-5 items-center p-10 bg-[url('/comic-bg.png')] bg-cover bg-center "
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, ease: 'easeInOut'}}>
      <div className="md:w-1/2 w-full pr-8 flex flex-col justify-center gap-2 md:bg-transparent bg-black/70 md:p-0 p-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="md:text-[2vw] text-[3vw] font-bold text-white tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{fontFamily: "Akira"}}
          >
            {index+1}. {carouselData[index].text} | <span style={{fontFamily: 'Japanese'}}>{carouselData[index].text}</span>
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="md:text-[1.2vw] text-[2vw] text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {carouselData[index].desc}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-[1.5vw] md:text-black text-white tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{fontFamily: "Bigail"}}
          >
            {carouselData[index].time}
          </motion.p>
        </AnimatePresence>
        <div className="flex gap-2">
          <button onClick={prevSlide} className="md:bg-black bg-white p-2  cursor-pointer shadow-md hover:bg-gray-200">
            <ChevronLeft className="md:w-[3vw] md:h-[2.2vw]" color="#8f00ff" strokeWidth={3} strokeLinecap="butt"/>
          </button>
          <button onClick={nextSlide} className="md:bg-black bg-white p-2  cursor-pointer shadow-md hover:bg-gray-200">
            <ChevronRight className="md:w-[3vw] md:h-[2.2vw]" color="#8f00ff" strokeWidth={3} strokeLinecap="butt"/>
          </button>
        </div>
      </div>

      {/* Right Column - Image Carousel */}
      <div className="md:w-1/2 w-full relative flex justify-center items-center">
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={carouselData[index].image}
            className="md:w-[40vw] w-[60vw] object-cover shadow-lg grayscale hover:filter-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
