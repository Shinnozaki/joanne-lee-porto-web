"use client";

import React from "react";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  const about = {
    title: "About me",
    description:
      "I'm a passionate developer with expertise in React.js, Next.js, and TypeScript, focused on building responsive, user-centric web applications. I excel at solving complex problems and thrive in collaborative and dynamic environments, bringing strong communication skills to every project.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Joanne Lee",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+62) 813 7193 1101",
      },
      {
        fieldName: "Experience",
        fieldValue: "1 Year",
      },
      {
        fieldName: "Email",
        fieldValue: "joanne133.lee@gmail.com",
      },
      {
        fieldName: "language",
        fieldValue: "Indonesian, English, Mandarin",
      },
    ],
  };

  const experience = {
    icon: "",
    title: "My experience",
    description:
      "I've had hands-on experience in React.js, Next.js, and TypeScript which has been contributed to multiple real-world projects including Solusipay web, SI-Kerja, and so on. My skills in UI development, API integration, and system analysis have enabled me to work closely with teams to deliver innovative solutions.",
    items: [
      {
        company: "Inovasi Daya Solusi",
        position: "Front End Developer",
        duration: "Feb 2023 - Feb 2024",
      },
      {
        company: "SIKerja DPUPR Papua Barat",
        position: "Web Developer, System Analyst",
        duration: "Sept 2023 - Dec 2023",
      },
    ],
  };

  const education = {
    icon: "",
    title: "My education",
    description:
      "",
    items: [
      {
        institution: "Bina Nusantara University",
        degree: "Bachelor's Degree",
        duration: "2020 - 2024",
      },
      {
        institution: "Udemy",
        degree: "Complete React, Next.js & TypeScript Projects Project 2024",
        duration: "2024",
      },
      {
        institution: "Udemy",
        degree: "QR Code Generator Using JavaScript 2024",
        duration: "2024",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description:
      "",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaReact />,
        name: "React JS",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next JS",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <FaNodeJs />,
        name: "Node JS",
      },
      {
        icon: <SiExpress />,
        name: "Express JS",
      },
    ],
  };

  return (
    <>
      <div className="border border-white/20 px-auto container"></div>
      <section className="pt-4 pb-12 xl:pt-20 xl:pb-20" id="resume">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <h1 className="mb-10 text-7xl font-extrabold">Resume</h1>
            <Tabs
              defaultValue="experience"
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>
              </TabsList>

              <div className="min-h-[70vh] w-full">
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 gap-[30px]">
                        {experience.items.map((item, index) => (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 gap-[30px]">
                        {education.items.map((item, index) => (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[460px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {skills.skillList.map((item, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent
                  value="about"
                  className="w-full text-center xl:text-left"
                >
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Resume;
