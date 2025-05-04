


import ProjectCatalog from "./components/ProjectCatalog";


export default async function ProjectsPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div><h1 className="md:text-3xl font-bold">Top Featured Projects 🔥</h1></div>

            <h2 className="text-2xl font-semibold mb-4">Projects Catalog 💼</h2>
            <p className="text-lg mb-8">Here are some of my projects:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-xl px-4">
                <ProjectCatalog />  {/* Project cards will go here */}
            </div>




        </main>
    );
}