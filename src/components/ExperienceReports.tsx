import { useEffect, useState } from "react";

export default function ExperienceReports() {

    const [projectCount, setProjectCount] = useState<number>(0);
    useEffect(() => {
        fetch("/api/projects-count")
            .then(res => res.json())
            .then(data => setProjectCount(data.count));
    }, []);

    return (
        <div className="flex flex-row gap-8 bg-transparent text-blue-500">
            <div className="flex flex-col items-left justify-center">
                <h3 className="font-bold text-2xl">+<span>{new Date().getFullYear() - 2023}</span></h3>
                <p className="text-white">Years Experience</p>
            </div>
            <div className="flex flex-col items-left justify-center">
                <h3 className="font-bold text-2xl">+<span>{projectCount}</span></h3>
                <p className="text-white">Projects</p>
            </div>
        </div>
    );
}