import { getAllProjects } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await getAllProjects();
  return NextResponse.json(projects);
}
