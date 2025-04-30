"use client";

import { Github, AtSign, Linkedin } from "lucide-react";

export default function SocialLinks() {
    return (
        <div className="flex justify-center gap-6 mt-10">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/michaelagonsi/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <Linkedin className="w-8 h-8 text-white hover:text-blue-400" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/mcagonsi" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <Github className="w-8 h-8 text-white hover:text-blue-400" />
            </a>

            {/* Google (Mail) */}
            <a href="mailto:michaelagonsi.it@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <AtSign className="w-8 h-8 text-white hover:text-blue-400" />
            </a>
        </div>
    )
}
