import { getAllProjects, addNewProject } from "@/lib/data";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function GET() {
  const projects = await getAllProjects();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(formData,"is received")
  const data = Object.fromEntries(formData.entries());
  let imageUrl = '';
  const imageFile = formData.get('image') as File;

  if (imageFile) {
    const blob = await put(`projects/${imageFile.name}`, imageFile,
      { access: "public" });
    imageUrl = blob.url;
    data.image = imageUrl;
  }
  if(data.isFeatured === 'on'){
    data.isFeatured = 'true';
  }
  if(!('isFeatured' in data)){
    data.isFeatured = 'false';

  }
  const datePosted = new Date().toISOString().split('T')[0]; 
  try {
    addNewProject({
      title: data.title as string,
      description: data.description as string,
      image: imageUrl,
      datePosted: datePosted,
      category: data.category as string,
      techStack: data.techStack as string,
      summary: data.summary as string,
      linkToLiveProject: data.linktoliveproject as string,
      linkToRepository: data.linktogithub as string,
      isFeatured: data.isFeatured === 'true',
    });
    console.log(data);
    return NextResponse.json({ message: "Project added successfully" });
  } catch (error) {
    console.error("Error adding project:", error);
    return NextResponse.json({ message: "Error adding project" }, { status: 500 });
 
  }
}

export async function PUT(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  return NextResponse.json({ message: "Project updated successfully" });
}