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
            transition={{ duration: 0.5, delay: 1 }} key={project.id} className="mx-auto sm:w-full sm:mx-w-lg md:max-w-[50%] lg:max-w-2xl bg-black rounded-md hover:shadow-white hover:shadow-md transition-transform duration-300 ease-in-out cursor-pointer p-2 mb-4">
            <div onClick={handleClick} className="flex flex-col justify-center">
                <Image src={project.image} alt={project.title} width={300} height={300} className="  w-full h-90 object-fit rounded-lg mb-2" />
                <h3 className="text-lg text-start font-semibold text-blue-400">Project: <span className="text-white">{project.title}</span> </h3>
                <p className="text-blue-400">Description: <span className="text-gray-500">{project.description}</span> </p>
                <p className="text-blue-400">Tech Stack Used: <span className="text-gray-500 flex flex-wrap gap-2">{project.techstack.split(' ').map((skill, index) => (<span key={index} className="p-1 bg-black text-gray-400 border-gray-400 border rounded-sm hover:bg-white transition duration-300 ease-in-out hover:text-black">{skill}</span>))}</span></p>
                <p className="text-blue-400">Date Posted: <span className="text-gray-500">{new Date(project.timeposted).toISOString().split('T')[0]}</span></p>
                <p className="text-blue-400">Summary: <span className="text-gray-500">{project.summary}</span></p>
                <div className="flex flex-row items-start justify-start mt-2 space-x-2">
                    <Link href={project.linkToRepository} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">💻View Project</Link>
                    <Link href={project.linkToRepository} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">🔗View Code</Link>

                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className='text-black text-upperCase w-fit item-end px-4 py-2 mt-10 rounded-sm bg-white'>{project.category}</span>
                    {project.isfeatured && <span className='text-white text-4xl w-fit item-end px-4 py-2 mt-10 rounded-sm'>🔥</span>}
                </div>

            </div >


        </motion.div >)
}   