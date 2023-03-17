import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

import { scrollInto } from "../Functions/ScrollInto";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] scroll-smooth text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Rafael Huszcza Machado Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className=" snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-center">
        <About />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <div
            className="relative overflow-hidden rounded-full filter grayscale hover:grayscale-0 w-10 h-10 object-cover cursor-pointer"
            onClick={() => scrollInto("hero")}
          >
            <Image
              src={"https://avatars.githubusercontent.com/rafaelhuszcza"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
