"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
    const categories = ["All", "Frontend", "Backend", "Fullstack"];

    return (
        <motion.section id="projects"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="py-20 px-4 bg-white text-black">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold max-w-full text-center mb-12">
                My Portfolio
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 border border-white rounded-md hover:bg-black hover:text-white transition duration-400 ease-in"
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Coming Soon Cards */}
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="bg-white text-black p-6 rounded-md flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4">
                            <span className="text-lg font-semibold">Coming Soon</span>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-md font-bold">Project {i + 1}</p>
                            <span className="inline-block mt-2 px-4 py-1 bg-black text-white rounded-md text-base">
                                Coming Soon
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Projects Button */}
            <div className="mt-12 text-center">
                <Link href="#" className="hover:scale-200 text-black font-semibold px-8 py-3">
                    See All Projects
                </Link>
            </div>
        </motion.section>
    );
}
