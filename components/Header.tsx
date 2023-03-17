import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          target="_blank"
          url="https://twitter.com/rafaelhuszcza"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://instagram.com/rhuszcza"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://github.com/rafaelhuszcza"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/rafael-huszcza/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden sm:inline-flex text-sm text-gray-400">
          Entre em contato
        </p>
      </motion.div>
    </header>
  );
}
