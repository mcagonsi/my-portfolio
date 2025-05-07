"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { project } from "@/lib/definition";

export default function ProjectCard({ project }: { project: project }) {
    console.log(project)
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }} key={project.id} className="flex flex-col items-center justify-center sm:w-full h-auto h-64 bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <Image src={project.image} alt={project.title} width={300} height={200} className=" h-32 object-cover rounded-lg mb-2" />
                <h3 className="text-lg font-semibold text-white">Project {project.title}</h3>
                <p className="text-gray-700">Description of Project {project.description}</p>
                <p className="text-gray-700">Tech Stack Used:{project.techStack}</p>
                <p className="text-gray-700">TimeLine</p>
                <div className="flex flex-row items-center justify-center mt-2 space-x-2">
                    <Link href={project.linkToRepository} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View Project</Link>
                    <Link href={project.linkToRepository} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">View Code</Link>
                </div>
            </div>


        </motion.div>)
}   