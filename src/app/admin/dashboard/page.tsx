import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession();
    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <main lang="en" className={` bg-black text-white`}>

            <div>
                <h1 className="text-3xl font-bold text-center py-20">Admin Dashboard</h1>
                <p className="text-center">This is the admin dashboard.</p>
            </div>

            <div >
                sidebar reports
            </div>
            <div>
                inputs and updating data
            </div>

            <div>
                list of all projects
            </div>
        </main>
    );
}