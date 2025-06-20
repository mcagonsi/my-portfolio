
import { project } from "@/lib/definition"


export default async function ProjectReports({ allProjects }: { allProjects: project[] }) {

    const projectReport = allProjects.reduce(
        (acc, item) => {
            acc.total++;
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        },
        { total: 0 } as Record<string, number>
    )
    return (

        <section className="flex flex-row gap-4 p-4 text-black">
            {Object.entries(projectReport).map(([key, value]) => (
                <div key={key} className="w-full flex flex-col items-center justify-center">
                    <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                    <h3 className="font-bold text-xl">{value}</h3>
                </div>
            ))}

        </section>
    );
};