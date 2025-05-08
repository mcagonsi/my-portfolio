"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { project } from "@/lib/definition";

export default function ProjectCard({ project }: { project: project }) {
    const handleClick = () => {
        window.open(project.linkToLiveProject, "_blank");
    }
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }} key={project.id} className="flex flex-col items-center justify-center sm:w-full bg-white rounded-md  hover:shadow-white hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer p-2 mb-4">
            <div onClick={handleClick} className="flex flex-col justify-center w-full h-full hover:shadow-white hover:shadow-md hover:scale">
                <Image src={project.image} alt={project.title} width={300} height={200} className="  w-full h-full object-cover rounded-lg mb-2" />
                <h3 className="text-lg text-start font-semibold text-gray-400">Project: <span className="text-black">{project.title}</span> </h3>
                <p className="text-gray-400">Description: <span className="text-black">{project.description}</span> </p>
                <p className="text-gray-400">Tech Stack Used: <span className="text-black">{project.techStack}</span></p>
                <p className="text-gray-400">Date Completed: <span className="text-black"></span></p>
                <p className="text-gray-400">Summary: <span className="text-black">{project.summary}</span></p>
                <div className="flex flex-row items-start justify-start mt-2 space-x-2">
                    <Link href={project.linkToRepository} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">💻View Project</Link>
                    <Link href={project.linkToRepository} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">🔗View Code</Link>

                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className='text-white text-upperCase w-fit item-end px-4 py-2 mt-10 rounded-sm bg-black'>{project.category}</span>
                    {project.isFeatured && <span className='text-white text-4xl w-fit item-end px-4 py-2 mt-10 rounded-sm'>🔥</span>}
                </div>

            </div>


        </motion.div>)
}   