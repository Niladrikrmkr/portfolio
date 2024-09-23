import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/WhatsAppImage.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x:-100, opacity:0},
  vissible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap mx-12">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="vissible" 
              className="pb-10 text-3xl font-thin tracking-tight lg:mt-28 lg:text-6xl">
              Niladri Karmakar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="vissible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tighter text-transparent font-semibold">
              Front-end Devloper
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="vissible"
              className="my-2 max-w-xl py-4 font-light tracking-tight text-sm lg:text-base">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="vissible"
              className="text-purple-700 text-lg mb-4"
              href="https://niladrikarmakar1.hackerresume.io/f4385a1a-b1c5-4a33-96bb-db56f0ae83d9"
            >
              View Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:1,delay:1.5}}
              className="rounded-full" src={profilePic} alt="profilepic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
