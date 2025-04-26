
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname(); // get current path

    const isHomePage = pathname === "/";
    return (
        <nav
            className={`flex justify-between items-center py-6 px-10 ${isHomePage ? "bg-transparent" : "bg-black"
                } text-white `}
        >
            <div className="flex space-x-8">
                <Link href="/">Home</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#about">About Me</Link>
                <Link href="#contact">Contact</Link>
            </div>
            <Link href="#contact">
                <button className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-2 rounded-md">
                    Let&apos;s Connect
                </button>
            </Link>
        </nav>
    );
}
