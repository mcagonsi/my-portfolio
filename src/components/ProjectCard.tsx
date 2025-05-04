// components/ProjectCard.tsx
'use client';
import { project } from '@/lib/definition';
import { motion } from 'framer-motion';

export default function ProjectCard(projectDetail: project) {
    const imageSrc = projectDetail.image
        ? `data:image/jpeg;base64,${projectDetail.image}`
        : '/placeholder.jpg'; // fallback

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="bg-white text-black p-6 rounded-md flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
        >
            <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img src={imageSrc} alt={projectDetail.title} className="object-cover w-full h-full" />
            </div>
            <div className="mt-2 text-center">
                <p className="text-md font-bold">{projectDetail.title}</p>
                <span className="inline-block mt-2 px-4 py-1 bg-black text-white rounded-md text-base">
                    {projectDetail.description}
                </span>
            </div>
        </motion.div>
    );
}
