
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function AdminNavbar() {
    const pathname = usePathname();
    const isLoggedIn = pathname === "/admin/dashboard";

    return (
        <nav className="flex mx-auto text-center justify-center py-8">
            <div className="flex space-x-4">
                <Link href="/" className={`text-white hover:text-blue-400 transition-colors duration-300`}>
                    My Portfolio
                </Link>
                <Link href="/admin" className={`text-white hover:text-blue-400 transition-colors duration-300 ${isLoggedIn ? "" : "hidden"}`}>
                    Logout
                </Link>
            </div>
        </nav>
    )
}