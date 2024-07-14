import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
const Skill = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-14 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiHtml5Fill className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiCss3Fill className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiJavascriptFill className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiReactjsFill className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiNodejsFill className="text-6xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
