import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="top-6 relative overflow-hidden rounded-full w-32 h-32 object-cover -mb-10 md:mb-10 flex-shrink-0 md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={"https://avatars.githubusercontent.com/rafaelhuszcza"}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="space-y-10 px-10 md:px-50">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl
          dolor, blandit in commodo posuere, laoreet sit amet augue. Ut
          condimentum dui ultrices tempor vulputate. Quisque semper, nibh eget
        </p>
      </div>
    </motion.div>
  );
}
