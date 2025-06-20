
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { getAllProjects } from "@/lib/data";
import DashBoard from "./components/Dashboard";
import ProjectReports from "./components/ProjectReports";


export default async function Dashboard() {
    const session = await getServerSession();
    const projects = await getAllProjects()

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <main lang="en" className={` text-black p-4 bg-white`}>
            <div >
                <ProjectReports allProjects={projects || []} />
            </div>
            <DashBoard projects={projects} />
        </main>
    );
}