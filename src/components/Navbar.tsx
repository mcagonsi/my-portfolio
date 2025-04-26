'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isHomePage = pathname === "/";

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About Me" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className={` w-full ${isHomePage ? "bg-transparent" : "bg-black"} text-white`}>
            <div className="max-w-full mx-auto px-4 sticky top-0 z-50 bg-black text-white">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Home - visible on all screens */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">MA</Link>
                    </div>

                    {/* Desktop Navigation - hidden on mobile */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="#contact">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300">
                                Let&apos;s Connect
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-black/20 transition-colors duration-300"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm rounded-b-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 text-base hover:text-blue-400 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2"
                        >
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                Let&apos;s Connect
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
