import React, { useState } from 'react'
import {AnimatePresence, motion} from 'motion/react'
import { ArrowUpLeft, ArrowUpRight, MapPin, Send } from 'lucide-react';

const Bento = () => {

  const facts = [
    "A 'break' for me means either playing basketball or breaking something open to see how it works. There's no in between",
    "I probably void warranties for fun. If something can be taken apart, I *will* take it apart — just to satisfy my curiosity.",
    "I don't just sketch and paint on paper, I do it in code and pixels too. Designing isn't just a hobby; it's how I see the world.",
    "Why buy it when I can build (or break) it myself? If I can reverse-engineer something, I will. Bonus points if I improve it in the process.",
    "I can't sit in one place for too long. I *have* to step out—be it a random street, a cool café, or a place I've never been before.",
    "I don't just eat to live; I live to eat. A foodie through and through, and yes, I have very strong opinions on where to find the best street food.",
    "I see design in everything. Whether it's a UI, an app, or even how my food is plated—everything needs to look *right*",
    "I work best under pressure. My best ideas (and code) usually happen at the last moment before a deadline.",
    "I love games—not just digital ones, but all kinds of games, be it the ones we grew up playing or the PC games that we enjoy these days",
    "I don't just follow trends, I experiment with them. Be it tech, art, or web design trends, I always try to put my own spin on things."
  ];

  const [fact, setFact] = useState(facts[Math.floor(Math.random() * facts.length)]);

  const getNewFact = () => {
    let newFact;
    do {
      newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === fact); // Prevent showing the same fact consecutively
    setFact(newFact);
  };

  return (
    <div className="px-[10%] py-[3%] bg-white relative">
    <div className="md:grid grid-cols-3 gap-4 flex flex-col grid-rows-2 overflow-hidden">
        <motion.div 
          initial={{x: '-100%'}}
          whileInView={{x: 0}}
          transition={{duration: 0.8, ease: "easeInOut"}}
          className="md:col-span-2 md:row-span-1 bg-black aspect-auto rounded-lg md:p-0 p-[5%] flex flex-col gap-4 cursor-pointer justify-center">
            <motion.div className="top w-full flex md:p-[5%] md:gap-10 gap-4 items-center">
              <img src="profile.jpg" alt="" className='object-cover md:w-[10vw] md:h-[10vw] h-[15vw] w-[15vw] rounded-full' />
              <div className='flex flex-col justify-center w-full'>
                <h1 className='text-white md:text-[2.5vw] text-[5vw]' style={{fontFamily: "Instrument Serif"}}>Meet Dholakia</h1>
                <a href="mailto:meetdholakia2074@gmail.com"><p className=' md:text-[2vw] text-[3vw] text-gray-500 flex items-center md:gap-2 gap-[2%] hover:underline'><Send  size={window.innerWidth < 640 ? 30 : 15}/> meetdholakia2074@gmail.com</p></a>
                <p className='text-gray-500 md:text-[2vw] text-[3vw] flex items-center md:gap-2 gap-[2%]'><MapPin  size={window.innerWidth < 640 ? 30 : 15}/> Gandhinagar, Gujarat, India </p>
              </div>
            </motion.div>
            <div className="bottom px-[5%] text-white flex gap-4 text-[1.5vw]" style={{fontFamily: 'Instrument Serif'}}>
                <h1 className='bg-[#8f00ff] md:text-[1.8vw] text-[3vw] px-[2%] rounded-full flex items-center'>&bull; Available for Work</h1>
                <h1 className='flex items-center md:text-[1.8vw] text-[3vw] bg-[#8f00ff] hover:bg-white hover:text-black duration-500 px-[2%] rounded-full'>Resume <ArrowUpRight  size={window.innerWidth < 640 ? 10 : 25}/></h1>
              </div>
          </motion.div>
        <motion.div 
          className="md:col-span-1 md:row-span-1 md:w-full w-[50%] inline-block bg-black aspect-square rounded-lg md:p-[10%] p-[5%] text-white">
            <h1 className='text-white md:text-[3vw] text-[5vw] cursor-hover' style={{fontFamily: "Whitenice"}}>Quick Links</h1>
            {[{name: "LinkedIn", link: "https://linkedin.com/in/meetdholakia2074"}, 
              {name: "Github", link: "https://github.com/MeetD99"}, 
              {name: "Instagram", link: "https://instagram.com/meet_dholakia"}].map((item, index) => (
                    <a href={item.link} key={index} target='_blank'>
                      <div className="flex items-center gap-2 mt-[2%] text-white">
                        <motion.div
                          className="overflow-hidden relative select-none"
                          style={{ fontFamily: "Instrument Serif", lineHeight: 1 }}
                          initial="initial"
                          whileHover="hovered"
                        >
                          <motion.h1
                            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className='md:text-[2vw] text-[4vw] flex items-center text-gray-500'
                          >
                            {item.name} <ArrowUpRight size={window.innerWidth < 640 ? 10 : 25}/>
                          </motion.h1>
                          <motion.h1
                            className="absolute inset-0 md:text-[2vw] text-[4vw] flex items-center"
                            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {item.name} <ArrowUpRight size={window.innerWidth < 640 ? 10 : 25} />
                          </motion.h1>
                        </motion.div>
                      </div>
                      </a>
                    ))}
        </motion.div>
        <motion.div 
          className=" md:w-full md:ml-0 ml-auto w-[50%] bg-black aspect-square rounded-lg md:p-[10%] p-[5%] cursor-pointer">
            <motion.img  
              initial={{filter: "grayscale(100%)"}} 
              whileHover={{filter: "grayscale(0%)"}} 
              whileTap={{filter: "grayscale(0%)"}}
              transition={{duration: 0.3}} 
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZ5aDR4N29saTJhOWxnOG5qZmdibDMwb2syOG02MGRjZzd2c2c5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fByehYIrOIzO8XolJK/giphy.gif" alt="" className='rounded-lg'/>
          </motion.div>
        <motion.div 
          initial={{x: '100%'}}
          whileInView={{x: 0}}
          transition={{duration: 0.8, ease: "easeInOut"}}
          className="col-span-2 row-span-1 bg-black aspect-auto elative rounded-lg p-[5%] flex flex-col gap-2 justify-evenly">
            <h1 
              className='text-white md:text-[3vw] text-[5vw] tracking-wide leading-none' 
              style={{fontFamily: "Instrument Serif"}}>A random <span style={{fontFamily: "Whitenice", color: "white", borderRadius: '50%', backgroundColor: "#8f00ff"}} className='md:px-[15px] md:py-[5px] px-[10px]'>Fact</span> about me!</h1>
            {/* AnimatePresence to handle exit animations */}
            <AnimatePresence mode="wait">
              <motion.p
                key={fact} // Key ensures Framer Motion recognizes changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className='text-gray-500 md:text-[1.5vw] text-[4vw]'
                style={{ fontFamily: "LayGrotesk" }}
              >
                {fact}
              </motion.p>
            </AnimatePresence>
            <button className='md:text-[1.5vw] text-[3vw] bg-white w-fit px-5 rounded-full cursor-pointer hover:bg-[#8f00ff] hover:text-white' onClick={getNewFact} style={{fontFamily: "Whitenice"}}>Generate another one!</button>
          </motion.div>
    </div>
    </div>
  )
}

export default Bento