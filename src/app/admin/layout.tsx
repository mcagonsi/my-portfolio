import AdminNavbar from "./components/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    );
}
