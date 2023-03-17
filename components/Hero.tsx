import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroudCircles from "./BackGroudCircles";
import Image from "next/image";
import { scrollInto } from "../Functions/ScrollInto";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Olá meu nome é Rafael", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackGroudCircles />
      <div className="relative overflow-hidden rounded-full w-32 h-32 object-cover">
        <Image
          src={"https://avatars.githubusercontent.com/rafaelhuszcza"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engenieresm
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <button onClick={() => scrollInto("about")} className="heroButton">
            About
          </button>

          <button
            onClick={() => scrollInto("experience")}
            className="heroButton"
          >
            Experience
          </button>

          <button onClick={() => scrollInto("skills")} className="heroButton">
            Skills
          </button>

          <button onClick={() => scrollInto("projects")} className="heroButton">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}
