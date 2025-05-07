"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import ExperienceReports from "./ExperienceReports";

export default function Hero() {
    const paragraph = "I turn ideas into functional, high-performance digital experiences.";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let currentIndex = 0;

        const type = () => {
            setDisplayedText(paragraph.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex < paragraph.length) {
                timeout = setTimeout(type, 40); // Adjust typing speed here
            }
        };

        // reset before starting (important in strict mode)
        setDisplayedText("");
        type();

        return () => clearTimeout(timeout); // clean up
    }, [paragraph]);
        return (
            <section className="lg:px-16 relative sm:h-screen md:h-screen overflow-hidden lg:h-screen flex flex-col justify-center items-left text-left px-4 py-8 bg-black ">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 10, 0], y: [0, -10, 0], z: [1, 3, 1] }} // move up then down
                    transition={{
                        duration: 10,
                        repeat: Infinity,        // infinite loop
                        repeatType: "loop",      // or "reverse" for ping-pong effect
                        ease: "easeInOut"
                    }} className="absolute  inset-0 opacity-70 bg-[url('/logosport.png')] bg-cover bg-center"></motion.div>

                <div className=" relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        <span className='text-gray-300'>Hello! I’m </span><span className="text-blue-300">MICHAEL AGONSI</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-4 font-bold text-5xl md:text-6xl lg:text-7xl"
                    >
                        FULLSTACK <span className="text-blue-400">DEVELOPER</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mt-6 max-w-xl text-xl text-gray-400">
                        {displayedText}
                    </motion.p>
                    <div className="mt-8 flex space-x-6">
                        <motion.button
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="border-2 border-blue-500 bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out hover:scale-105">

                            <Link href="#about">Why Hire Me ?</Link>
                        </motion.button>
                        <motion.button

                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-110">
                            <Link href="#contact">Let’s Talk</Link>
                        </motion.button>
                    </div>
                    <div className="flex pb-8 items-start">
                        <SocialLinks />
                    </div>
                    <div>
                        <ExperienceReports />
                    </div>

                </div>

            </section>
        );
    }
