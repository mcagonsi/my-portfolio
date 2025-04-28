// components/NavbarWrapper.tsx
"use client";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";

export default function NavbarWrapper() {
    const pathname = usePathname();

    if (pathname.toString().includes("/admin")) {
        return null; // don't render Navbar on non-homepages
    }

    return <Navbar />;
}
