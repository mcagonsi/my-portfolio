// app/components/ProjectsServer.tsx

// import connectToDB from "@/lib/data";
import Projects from "@/components/Projects";

export default async function ProjectsServer() {
    // const client = connectToDB() // your database fetch here
    return <Projects />;
    // return <Projects projects={client} />;
}
