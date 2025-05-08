import { project } from "@/lib/definition";

export default function ProjectItem({ project }: { project: project }) {
    return (
        <div className="flex flex-row gap-4 p-4 justify-around bg-white rounded-lg text-black border-1 hover:shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-lg w-full">{project.title}</h3>
            <h3 className="bg-black text-white rounded-sm p-2 w-fit">{project.category}</h3>
            <div className="flex flex-row gap-2 justify-end w-full">
                <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-sm">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-sm">Delete</button>
            </div>

        </div>
    );
}