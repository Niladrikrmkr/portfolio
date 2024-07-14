import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/WhatsAppImage.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap mx-12">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-10 text-3xl font-thin tracking-tight lg:mt-28 lg:text-6xl">
              Niladri Karmakar
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tighter text-transparent font-semibold">
              Front-end Devloper
            </span>
            <p className="my-2 max-w-xl py-4 font-light tracking-tight text-sm lg:text-base">
              {HERO_CONTENT}
            </p>
            <a
              className="text-purple-700 text-lg mb-4"
              href="https://niladrikarmakar1.hackerresume.io/f4385a1a-b1c5-4a33-96bb-db56f0ae83d9"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center">
            <img className="rounded-full" src={profilePic} alt="profilepic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
