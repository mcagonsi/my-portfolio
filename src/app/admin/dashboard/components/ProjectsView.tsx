import { project } from "@/lib/definition";
import ProjectItem from "./ProjectItem";

export default function ProjectsView({ allProjects }: { allProjects: project[] }) {
    return (
        <main className="text-black">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="flex flex-col gap-4 p-4 bg-white h-150 overflow-auto rounded-lg ">
                {allProjects.map((project: project) => <ProjectItem key={project.id} project={project} />)}
            </div>
        </main>
    );
}