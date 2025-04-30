import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import ProjectReports from "./components/ProjectReports";

export default async function Dashboard() {
    const session = await getServerSession();
    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <main lang="en" className={`h-full text-black p-4 bg-white`}>

            <section className="w-full flex flex-col md:flex-row gap-4 ">
                <div >
                    <ProjectReports />
                </div>
                <div className="bg-black text-white w-full">
                    inputs and updating data
                </div>
            </section>

            <section className="w-full min-h-screen mt-6 bg-black text-white flex flex-col gap-4 p-4">
                <h1>All Projects will be listed here to view and update or deleted from database</h1>
            </section>
        </main>
    );
}