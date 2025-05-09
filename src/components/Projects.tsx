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
            className="py-20 px-4 lg:px-16  bg-black text-white">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold max-w-full text-center mb-12">
                Top Featured Projects
            </h2>


            {/* Project Cards */}
            <div className="max-w-6xl mx-auto grid jus grid-cols-1 md:grid-cols-3 gap-8">

                {projectsItems.length == 0 ?
                    <p className="mx-auto text-lg col-2 text-center"> No Featured Projects at this moment check back later😅🥲</p> :
                    projectsItems.map((item: project) => <ProjectCard key={item.id} {...item} />)}
            </div>

            {/* See All Projects Button */}
            <div className="mt-12 text-start">
                <Link href="/projects" className="px-30 hover:scale-110 text-white md:text-xl hover:underline font-semibold py-3">
                    See All Projects
                </Link>
            </div>
        </motion.section>
    );
}
