


export default function ProjectReports() {

    const projectReport = {
        "total": 0,
        "fullstack": 0,
        "frontend": 4,
        "backend": 0,

    }
    return (

        <section className="flex sm:flex-row md:flex-col gap-4 p-4 text-black">
            {Object.entries(projectReport).map(([key, value]) => (
                <div key={key} className="w-full flex flex-col items-center justify-center">
                    <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                    <h3 className="font-bold text-xl">{value}</h3>
                </div>
            ))}

        </section>
    );
};