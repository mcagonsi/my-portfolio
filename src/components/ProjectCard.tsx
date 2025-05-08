// components/ProjectCard.tsx
'use client';
import Image from 'next/image';
import { project } from '@/lib/definition';
import { motion } from 'framer-motion';

export default function ProjectCard(projectDetail: project) {
    const imageSrc = projectDetail.image
        ? projectDetail.image
        : '/placeholder.jpg'; // fallback

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="bg-black text-white p-6 rounded-md flex flex-col hover:scale-105 transition duration-300 ease-in-out"
        >
            <div className="w-full h-48 flex items-start bg-gray-200 rounded-md mb-4 overflow-hidden">
                <Image src={imageSrc} alt={projectDetail.title} width={200} height={20} className="object-cover w-full h-full" />

            </div>
            <div className="mt-2 text-start">
                <p className="text-lg font-bold py-2">{projectDetail.title}</p>
                <p className="text-gray-500">Description: </p>
                <p className="inline-block  py-4 rounded-md text-base">
                    {projectDetail.description}
                </p>
                <div className="flex flex-row justify-start mt-2 gap-4">
                    <span className='bg-white text-black px-2 py-1 font-bold border-2 rounded-sm'>{projectDetail.category}</span>
                    <a href={projectDetail.linkToRepository} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline mt-2">View Project</a>
                </div>
            </div>
        </motion.div>
    );
}
