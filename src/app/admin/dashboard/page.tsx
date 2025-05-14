
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import ProjectReports from "./components/ProjectReports";
import { getAllProjects } from "@/lib/data";
import ProjectsEditCreate from "./components/ProjectsEditCreate";
import ProjectsView from "./components/ProjectsView";

export default async function Dashboard() {
    const session = await getServerSession();
    console.log(session?.user)
    const projects = await getAllProjects()

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <main lang="en" className={` text-black p-4 bg-white`}>

            <section className="w-full flex flex-col md:flex-row gap-4 ">
                <div >
                    <ProjectReports allProjects={projects || []} />
                </div>
                <div className=" text-white w-full">
                    <ProjectsEditCreate />
                </div>
            </section>

            <section className="w-full min-h-screen mt-6 text-white flex flex-col gap-4 p-4">
                <ProjectsView allProjects={projects || []} />
            </section>
        </main>
    );
}