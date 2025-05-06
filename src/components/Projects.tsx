"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { project } from '@/lib/definition';



export default function Projects({ projectsItems }: { projectsItems: project[] }) {


    return (
        <motion.section id="projects"
            initial={{ opacity: 1, scale: 1, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="py-20 px-4 lg:px-16  bg-white text-black">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold max-w-full text-center mb-12">
                My Portfolio
            </h2>


            <h4 className="text-2xl md:text-2xl  text-blue-800 font-bold text-center mb-8">
                ❤️‍🔥Top Featured Projects🤔💪
            </h4>

            {/* Project Cards */}
            <div className="max-w-6xl mx-auto grid jus grid-cols-1 md:grid-cols-3 gap-8">

                {projectsItems.length == 0 ?
                    <p className="mx-auto text-lg col-2 text-center"> No Featured Projects at this moment check back later😅🥲</p> :
                    projectsItems.map((item: project) => <ProjectCard key={item.id} {...item} />)}
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
