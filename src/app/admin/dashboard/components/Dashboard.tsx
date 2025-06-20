
"use client"
import { useState } from "react"
import { project } from "@/lib/definition";
// import ProjectReports from "./ProjectReports";
import ProjectsEditCreate from "./ProjectsEditCreate";
import ProjectsView from "./ProjectsView";


export default function DashBoard({ projects }: { projects: project[] }) {
    const [editProject, setEditProject] = useState<project>({
        id: 0,
        title: '',
        description: '',
        image: '',
        timeposted: new Date(),
        category: '',
        techstack: '',
        summary: '',
        linkToLiveProject: '',
        linkToRepository: '',
        isfeatured: false,

    });
    const handleEditProject = (project: project) => {
        setEditProject(project)
    }
    return (
        <>

            <section className="w-full flex flex-col md:flex-row gap-4 ">
                <div className=" text-white w-full">
                    <ProjectsEditCreate projectToEdit={editProject} />
                </div>
            </section>

            <section className="w-full min-h-screen mt-6 text-white flex flex-col gap-4 p-4">
                <ProjectsView onSendData={handleEditProject} allProjects={projects || []} />
            </section>

        </>
    )

}