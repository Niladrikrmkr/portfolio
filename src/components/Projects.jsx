import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import git from "../assets/git2.png"
import link from "../assets/link3.png"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-16 text-center text-4xl">Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className="w-full lg:w-1/4">
              <img
                className="mb-6 rounded"
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
              <a className="inline-block size-6 py-1.5 ml-4" href={project.git} target="_blank"><img className="" src={git} alt="Github" /></a>
              <a className="inline-block size-6 py-1.5 ml-2" href={project.link} target="_blank"><img className="" src={link} alt="link" /></a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
