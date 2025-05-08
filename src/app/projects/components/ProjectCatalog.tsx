"use client"

import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";


export default function ProjectCatalogCard() {
    const [projects, setProjects] = useState([]);
    const [showProjects, setShowProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProjects(data);

            });
    }, []);
    useEffect(() => {
        setShowProjects(projects)
    }, [projects]);


    return (
        <>
            {showProjects.length > 0 ? showProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            )) : <h2 className="text-3xl text-white text-center col-2 justify-center">No projects yet😭...check back later!✌️</h2>}

        </ >
    );
}
