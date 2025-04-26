"use client";

import { Github, AtSign, X, Linkedin } from "lucide-react";

export default function SocialLinks() {
    return (
        <div className="flex justify-center gap-6 mt-10">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <Linkedin className="w-8 h-8 text-white hover:text-blue-400" />
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <Github className="w-8 h-8 text-white hover:text-blue-400" />
            </a>

            {/* Tumblr */}
            <a href="https://X.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <X className="w-8 h-8 text-white hover:text-blue-400" />
            </a>

            {/* Google (Mail) */}
            <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <AtSign className="w-8 h-8 text-white hover:text-blue-400" />
            </a>
        </div>
    )
}
