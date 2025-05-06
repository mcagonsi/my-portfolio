

import { getFeaturedProjects } from "@/lib/data";
import Projects from "@/components/Projects";

export default async function ProjectsServer() {
    const projects = await getFeaturedProjects();
    // const client = connectToDB() // your database fetch here
    return <Projects projectsItems={projects || []} />;
    // return <Projects projects={client} />;
}
