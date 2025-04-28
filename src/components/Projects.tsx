"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Projects() {

    return (
        <motion.section id="projects"
            initial={{ opacity: 1, scale: 1, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="py-20 px-4 bg-white text-black">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold max-w-full text-center mb-12">
                My Portfolio
            </h2>

            {/* Top Six Projects */}
            <h4 className="text-2xl md:text-2xl  text-blue-800 font-bold text-center mb-8">
                Top Six Projects
            </h4>

            {/* Project Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Coming Soon Cards */}
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: i * 0.2 }} className="bg-white text-black p-6 rounded-md flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4">
                            <span className="text-lg font-semibold">Coming Soon</span>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-md font-bold">Project {i + 1}</p>
                            <span className="inline-block mt-2 px-4 py-1 bg-black text-white rounded-md text-base">
                                Coming Soon
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* See All Projects Button */}
            <div className="mt-12 text-center">
                <Link href="/projects" className="hover:scale-200 text-black font-semibold px-8 py-3">
                    See All Projects
                </Link>
            </div>
        </motion.section>
    );
}
