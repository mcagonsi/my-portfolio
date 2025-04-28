'use client';
import Link from "next/link";
import Image from "next/image";

export default function ProjectCatalogCard() {
    return (
        <>
            {[1, 2, 3, 4, 5].map((project) => (
                <div key={project} className="flex flex-col items-center justify-center sm:w-full h-auto h-64 bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <Image src={`/projects/${project}.jpg`} alt={`Project ${project}`} width={300} height={200} className=" h-32 object-cover rounded-lg mb-2" />
                        <h3 className="text-lg font-semibold text-white">Project {project}</h3>
                        <p className="text-gray-700">Description of Project {project}</p>
                        <p className="text-gray-700">Tech Stack Used:</p>
                        <p className="text-gray-700">TimeLine</p>
                        <div className="flex flex-row items-center justify-center mt-2 space-x-2">
                            <Link href={`/projects/${project}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View Project</Link>
                            <Link href={`/projects/${project}/github`} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">View Code</Link>
                        </div>
                    </div>

                </div>))}
        </ >
    );
}
