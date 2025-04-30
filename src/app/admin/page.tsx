
"use client";
import { signIn } from "next-auth/react";


export default function LoginButton() {
    return (
        <main lang="en" className="flex max-h-screen w-full bg-black px-4 text-white">

            <div className="flex flex-col w-full md:w-3xl m-auto py-10 px-4 bg-white rounded text-black">
                <h1 className="text-3xl font-bold text-center pb-8">Admin Login</h1>
                <div className="flex flex-col w-full">

                    <button
                        onClick={() => signIn("google")}
                        className="bg-red-700 w-full max-w-sm mx-auto my-8 font-bold text-white px-4 py-2 rounded"
                    >
                        Sign in with Google
                    </button>
                </div>
                <div className="flex flex-col w-full">

                    <button
                        onClick={() => signIn("github")}
                        className="bg-gray-700 w-full max-w-sm mx-auto my-8 font-bold text-white px-4 py-2 rounded"
                    >
                        Sign in with GitHub
                    </button>
                </div>

            </div>

        </main>
    );
}


