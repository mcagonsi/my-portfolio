


import ProjectCatalog from "./components/ProjectCatalog";


export default async function ProjectsPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-2xl font-semibold mb-16">🔥 Projects Catalog 💼</h2>
            
                <ProjectCatalog />  
            
        </main>
    );
}