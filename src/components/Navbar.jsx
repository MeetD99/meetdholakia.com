import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spiral as Hamburger } from 'hamburger-react'
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blend, setBlend] = useState(true);

  return (
    <div className={`fixed top-0 left-0 w-full flex justify-between items-center border-b border-[#2E2E2E] md:px-6 px-2 bg-black z-50 ${blend ? 'mix-blend-difference' : ''}`}>
      {/* Left - Logo */}
      <a href="/">
      <div className="text-white text-lg sm:text-xl select-none p-4 cursor-pointer z-50 cursor-hover">
        <h1 style={{ fontFamily: "LayGrotesk", lineHeight: 1 }}>
          MeetDholakia
          <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}>
            .com
          </span>
        </h1>
      </div>
      </a>

      {/* Right - Desktop Navigation */}
      <div className="hidden md:flex items-center gap-[15vw] border-l-2 border-l-[#2e2e2e] py-4 px-20">
        {["About", "Projects", "Contact"].map((item, index) => (
          <a key={index} href={`#${item}`}>
          <div className="flex items-center gap-2 text-white">
            <span
              style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}
            >
              0{index + 1}
            </span>
            <motion.div
              className="overflow-hidden relative select-none"
              style={{ fontFamily: "LayGrotesk", lineHeight: 1 }}
              initial="initial"
              whileHover="hovered"
            >
              <motion.h1
                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item}
              </motion.h1>
              <motion.h1
                className="absolute inset-0"
                variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item}
              </motion.h1>
            </motion.div>
          </div>
          </a>
        ))}
      </div>

      {/* Burger Menu Button (Visible on Mobile) */}
      <div className="md:hidden cursor-pointer z-50" onClick={() => {setIsOpen(!isOpen); setBlend(!blend)}}>
        <Hamburger color="white" size={25} toggled={isOpen}></Hamburger>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full h-screen bg-black flex flex-col py-[10vh] px-[10vw]  text-white gap-8"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          > 
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a href={item == "Home" ? ('/') : (`#${item}`)}>
              <motion.div
                className="text-3xl flex gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{fontFamily: "LayGrotesk"}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.3 }}
              >
                <span
                className="text-xl leading-[8px] text-[#8e8e8e]"
                style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}
                >
                0{index + 1}
                </span>
                {item}
              </motion.div>
              </a>
            ))}
            <span className="h-0.5 w-full bg-[#2e2e2e]"></span>
            <motion.div
                className=" flex gap-2 flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{fontFamily: "LayGrotesk"}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <h1 className="text-[#8e8e8e] text-xl" style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}>Socials</h1>
                {[{name: "Instagram", link:"https://www.instagram.com/meet_dholakia/"}, 
                  {name: "Github", link: "https://github.com/MeetD99"},
                  {name: "Linkedin", link: "https://linkedin.com/in/meetdholakia2074"}
                ].map((item,index) => (
                  <a key={index} className="flex items-center gap-2 uppercase text-white" 
                  href={item.link} target="_blank" style={{fontFamily: "LayGrotesk"}}>
                    {item.name}<ArrowUpRight color="white" size={20}/>
                  </a>
                ))}
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
