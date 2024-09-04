"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "./WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "SIKerja DPUPR Papua Barat",
    description:
      "SiKerja is an administrative management system that includes features such as real-time data logging, multi-role access, and security measures equivalent to government standards.",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Prisma",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/projects/sikerja.png",
    live: "http://sikerja-dpupr.papuabaratprov.go.id/",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Airdnd",
    description:
      "Airdnd is a clone of airbnb that is designed to connect people looking for short-term accommodation with those who have spaces available to rent.",
    features: [
      "User and host can login through their google account",
      "Host can manage their properties listings",
      "User can reserve hosts' listings",
      "User can add listings to their favorites",
      "User can search and filter based on location, category, and room counts",
    ],
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Prisma",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/projects/airdnd.png",
    live: "https://airdnd-nine.vercel.app/",
    github: "https://github.com/Shinnozaki/airdnd",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Evently",
    description:
      "Evently is a platform for organizing and managing various types of events, such as concerts, seminars, workshops, and festivals.",
    features: [
      "Users can search and filter events based on categories",
      "Users can see event details",
      "Users can purchase tickets directly with secure payment options",
      "Users can see related events based on categories browsed",
      "Hosts can create and events",
      "Hosts can track ticket sales",
    ],
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/projects/evently.png",
    live: "https://evently-platform-sigma.vercel.app/",
    github: "https://github.com/Shinnozaki/evently-platform",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Car Hub",
    description:
      "Car Hub is a website for renting cars. With advanced filtering, users can filter based on their manufacrturer, model, fuel, and year to specifically find their desired vehicle. Users can also see each car's details",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/projects/carhub.png",
    live: "https://joen-car-hub.vercel.app/",
    github: "https://github.com/Shinnozaki/joen-car-hub",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Travel Adv",
    description:
      "Travel Adv is designed to recommend users places to go, such as restaurants, hotels, and attractions. Users can also filter based on ratings and locations. Make sure to allow location when using this website :)",
    stack: [
      {
        name: "React JS",
      },
      {
        name: "Material UI",
      },
      {
        name: "Google Map React",
      },
    ],
    image: "/assets/projects/traveladv.png",
    live: "https://travel-adv.vercel.app/",
    github: "https://github.com/Shinnozaki/travelADV",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Crypto App",
    description:
      "Crypto App is a real-time updates on the prices, statistics, graphs, and other details of various cryptocurrencies, allowing users to monitor market fluctuations. User can also see latest news about cryptocurrencies.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/projects/cryptoapp.png",
    live: "https://blablabla.com",
    github: "",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Solusipay Company Profile",
    description:
      "This website is for introducing users to SolusiPay, showcasing the services and features it offers as a payment processing platform.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/projects/solusipay.png",
    live: "https://solusipay.com/index.html",
    github: "",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "Inovasi Daya Solusi SOB",
    description:
      "SOB is a website from PT Inovasi Daya Solusi that is designed for users to manage their transactions. It also ensures that users with specific roles can access only the features and information relevant to their responsibilities, enhancing security",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Material UI",
      },
    ],
    image: "/assets/projects/sob.png",
    live: "https://sob.ids.id/auth/login?callbackUrl=%2F",
    github: "",
  },


];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <div className="border border-white/20 px-auto container"></div>
      <section className="pt-4 pb-12 xl:pt-20 xl:pb-20" id="work">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <h1 className="mb-16 text-6xl font-extrabold">Projects</h1>

            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px]">
                  <div className="text-8xl leading-none">{project.num}</div>

                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.title}
                  </h2>

                  <div>
                    <p className="text-white/60">{project.description}</p>
                    <ul className="text-white/60 list-decimal pl-8">
                      {project.features?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <ul className="flex gap-4 ">
                    {project.stack.map((item, index) => (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>

                  <div className="border border-white/20"></div>

                  <div className="flex items-center gap-4">
                    <a href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                    {project.github.length === 0 ? (
                      <div></div>
                    ) : (
                      <a href={project.github} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] mb-12 "
                  onSlideChange={handleSlideChange}
                >
                  {projects.map((item, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <WorkSliderBtn
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                  />
                </Swiper>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Work;
