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
            )) : <p>Nothing to show</p>}

        </ >
    );
}
