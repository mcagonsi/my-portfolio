"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { project } from "@/lib/definition"



export default function ProjectsEditCreate({ projectToEdit }: { projectToEdit: project }) {
    const router = useRouter();

    const [successMessage, setSuccessMessage] = useState<string>('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch('/api/projects', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Something went wrong");
            }

            setSuccessMessage(data.message);

            form.reset();
            router.refresh();

            setTimeout(() => {
                setSuccessMessage('');

            }, 3000);
        } catch (err) {


            console.error("Upload error:", err);
        }
    };

    const updateProject = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget.closest('form')!);

        try {
            const res = await fetch(`/api/projects/${projectToEdit.id}`, {
                method: "PUT",
                body: formData
            });
            const updateRes = await res.json()
            if (!res.ok || res.status == 500) {
                setSuccessMessage(updateRes.message)
            }
            setSuccessMessage(updateRes.message)
            setTimeout(() => {
                setSuccessMessage('');

            }, 3000);

            router.refresh();
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <main className="text-black">
            <form key={projectToEdit.id} onSubmit={handleSubmit} className="grid  grid-cols-1 md:grid-cols-2 gap-8 border-left border-gray-300 p-4 bg-white rounded-lg shadow-md">
                <div className="flex flex-col gap-4 w-full">
                    <input defaultValue={projectToEdit.title} name="title" type='text' className="border rounded-sm p-2 " required placeholder='Project Title' />
                    <input defaultValue={projectToEdit.description} name="description" type='text' className="border rounded-sm p-2 " required placeholder='Description' />
                    <input name='image' type='file' accept="image/" className="border p-2 " required placeholder='Upload Image' />
                    {/* <input name='dateCompleted' type='date' className="border rounded-sm w-sm p-2 " required placeholder='Date Completed' /> */}
                    <select defaultValue={projectToEdit.category} name='category' className="border w-sm p-2 rounded-sm required" >
                        <option>fullstack</option>
                        <option>frontend</option>
                        <option>backend</option>
                    </select>

                </div>
                <div className="flex flex-col col-2 gap-4 w-full">
                    <input defaultValue={projectToEdit.techstack} name="techstack" type='text' className="border rounded-sm p-2 " required placeholder='Tech Stack used' />
                    <textarea defaultValue={projectToEdit.summary} name="projectsummary" className="border rounded-sm p-2  h-40 align-top required" placeholder='Project Summary' />
                    <input defaultValue={projectToEdit.linkToLiveProject} name="linktoliveproject" type='url' className="border rounded-sm p-2 " required placeholder='Link to Live Project' />
                    <input defaultValue={projectToEdit.linkToRepository} name="linktogitrepository" type='url' className="border rounded-sm p-2 " required placeholder='Link to Github Repo' />
                    <label>
                        <input defaultChecked={projectToEdit.isfeatured}
                            name="isfeatured" type='checkbox' className="border" />
                        Feature this Project
                    </label>

                </div>
                <div className=" flex flex-row row-2 w-full gap-6 ">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full text-white p-2 rounded-sm">Add Project</button>
                    <button onClick={updateProject} className="bg-black hover:bg-gray-600 w-full text-white p-2 rounded-sm">Update Project</button>
                    <span className="text-green-500 text-sm font-bold w-full">{successMessage}</span>
                </div>

            </form>
        </main>
    );
}