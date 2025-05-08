"use client"
import { project } from "@/lib/definition";
import { useRouter } from "next/navigation";



export default function ProjectItem({ project }: { project: project }) {
    const router = useRouter();
    const deleteProject = async () => {
        try {
            const res = await fetch(`/api/projects/${project.id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete project");
            }


            alert("Project deleted");

            router.refresh();

        } catch (err) {
            console.error(err);
            alert("An error occurred while deleting the project");
        }
    };
    return (
        <div className="flex flex-row gap-4 p-4 justify-around bg-white rounded-lg text-black border-1 hover:shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-lg w-full">{project.title}</h3>
            <h3 className="bg-black text-white rounded-sm p-2 w-fit">{project.category}</h3>
            <div className="flex flex-row gap-2 justify-end w-full">
                <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-sm">Edit</button>
                <button onClick={deleteProject} className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-sm">Delete</button>
            </div>

        </div>
    );
}