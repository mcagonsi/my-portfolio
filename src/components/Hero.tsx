import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";

export default function Hero() {

    const paragraph = "I  love turning ideas into functional, high-performance applications.";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            // ✅ check if we're done before accessing
            if (currentIndex >= paragraph.length - 1) {
                clearInterval(interval);
                return;
            }

            setDisplayedText((prev) => prev + paragraph[currentIndex]);
            currentIndex++;
        }, 50); // typing speed (ms)

        return () => clearInterval(interval);
    }, []);// typing speed (ms)

    return (
        <section className=" min-h-screen flex flex-col justify-center items-left text-left px-4 bg-black ">
            <div className="absolute inset-0 opacity-40 bg-[url('/logosport.png')] bg-cover bg-center"></div>

            <div className="relative z-20">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold"
                >
                    <span className='text-white'>Hello! I’m </span><span className="text-blue-500">MICHAEL AGONSI</span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-7xl md:text-xxl font-bold"
                >
                    FULLSTACK <span className="text-blue-400">DEVELOPER</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-6 max-w-xl text-lg text-gray-400">
                    {displayedText}
                </motion.p>
                <div className="mt-8 flex space-x-6">
                    <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="border-2 border-blue-500 bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white">

                        Why Hire Me ?
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-110">
                        Let’s Talk
                    </motion.button>
                </div>
                <div className="flex items-left">
                    <SocialLinks />
                </div>

            </div>

        </section>
    );
}
