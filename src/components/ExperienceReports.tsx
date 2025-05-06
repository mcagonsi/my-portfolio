"use client";
import { useEffect, useState } from "react";

export default function ExperienceReports() {
    const [projectCount, setProjectCount] = useState(0);
    const [displayedProjects, setDisplayedProjects] = useState(0);
    const [displayedYears, setDisplayedYears] = useState(0);

    const yearsExperience = new Date().getFullYear() - 2023;

    useEffect(() => {
        fetch("/api/projects-count")
            .then((res) => res.json())
            .then((data) => setProjectCount(data.count));
    }, []);

    // Animate project count
    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count += 1;
            setDisplayedProjects(count);
            if (count >= projectCount) clearInterval(interval);
        }, 400);
        return () => clearInterval(interval);
    }, [projectCount]);

    // Animate years
    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count += 1;
            setDisplayedYears(count);
            if (count >= yearsExperience) clearInterval(interval);
        }, 400);
        return () => clearInterval(interval);
    }, [yearsExperience]);

    return (
        <div className="flex flex-row gap-8 bg-transparent text-blue-500">
            <div className="flex flex-col items-left justify-center">
                <h3 className="font-bold text-2xl">+<span>{displayedYears}</span></h3>
                <p className="text-white">Years Experience</p>
            </div>
            <div className="flex flex-col items-left justify-center">
                <h3 className="font-bold text-2xl">+<span>{displayedProjects}</span></h3>
                <p className="text-white">Projects</p>
            </div>
        </div>
    );
}
