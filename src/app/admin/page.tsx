import Link from "next/link";


export default function Admin() {
    return (
        <main lang="en" className="flex max-h-screen w-full bg-black px-4 text-white">

            <div className="flex flex-col w-full md:w-3xl m-auto py-10 px-4 bg-white rounded text-black">
                <h1 className="text-3xl font-bold text-center pb-8">Admin Login</h1>

                <form className="flex flex-col w-full  items-center justify-center bg-white text-black">
                    <input
                        type="text"
                        placeholder="Username"
                        className="block mx-auto w-full max-w-sm mb-4 p-2 border border-gray-300 rounded" />

                    <input
                        type="password"
                        placeholder="Password"
                        className="block mx-auto mb-4 w-full max-w-sm p-2 border border-gray-300 rounded" />
                    <button className="bg-black w-full max-w-sm text-white px-4 py-2 rounded-sm hover:shadow-mds hover:bg-white hover:text-black transition duration-300">
                        <Link href="/admin/dashboard">Login</Link>
                    </button>
                </form>
            </div>
        </main>
    );
}