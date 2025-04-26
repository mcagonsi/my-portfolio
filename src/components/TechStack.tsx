"use client";

import { motion } from "framer-motion";

export default function TechStack() {
    const Logos = [
        "/Logos/react.svg",
        "/Logos/python.svg",
        "/Logos/postgresql.svg",
        "/Logos/mysql.svg",
        "/Logos/vscode.svg",
        "/Logos/js.svg",
        "/Logos/java.svg",
        "/Logos/git.svg",
        "/Logos/github.svg",
        "/Logos/jira.svg",
        "/Logos/figma.svg",
    ];

    return (
        <div className="mt-16 flex flex-wrap justify-center gap-10 items-center">
            {Logos.map((src, i) => (
                <motion.img
                    key={i}
                    src={src}
                    alt="tech logo"
                    className="w-10 h-10 md:w-12 md:h-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                />
            ))}
        </div>
    );
}