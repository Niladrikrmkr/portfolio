import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
});


const Skill = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-14 text-center text-4xl">Technologies
      </motion.h1>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiHtml5Fill className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiCss3Fill className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiJavascriptFill className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiReactjsFill className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiNodejsFill className="text-6xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
