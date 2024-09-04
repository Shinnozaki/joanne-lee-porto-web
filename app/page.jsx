"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "@/components/resume/Resume";
import Work from "@/components/work/Work";
import Contact from "@/components/contact/Contact";

const Page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Web Developer</span>
            <h1 className="h1 mb-6">
              {`Hello I'm`}
              <br />
              <span className="text-accent">Joanne Lee</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{`${"I'm a passionate developer with expertise in React.js, Next.js, and TypeScript, focused on building responsive, user-centric web applications. I excel at solving complex problems and thrive in collaborative environments, bringing strong communication skills to every project."}`}</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="assets/joanne-lee.pdf" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Resume />
      <Work />
      <Contact />
    </section>
  );
};

export default Page;
