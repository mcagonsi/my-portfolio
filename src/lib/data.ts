
import { unstable_noStore as noStore } from "next/cache";
import { supabase } from './supabaseClient'; // ✅ using @supabase/supabase-js

import { project } from './definition';



export async function getFeaturedProjects(): Promise<project[]> {
  try {
    noStore(); // optional: disable SSR cache

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('isfeatured', true);

    if (error) {
      console.error("Supabase error:", error.message);
      return [];
    }

    
    const formatted: project[] = data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      techstack: row.techstack,
      timeposted: row.timeposted,
      category: row.category,
      linkToLiveProject: row.linktoliveproject,
      linkToRepository: row.linktogitrepository,
      image: row.image, // or image?.toString('base64') if needed
      summary: row.projectsummary,
      isfeatured: row.isfeatured,
    }));

    return formatted;
  } catch (err) {
    console.error("Unexpected fetch error:", err);
    return [];
  }
}

export async function getAllProjects(): Promise<project[]> {
  try {
    noStore(); // optional: disable SSR cache

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('timeposted',{ascending:false});

    if (error) {
      console.error("Supabase error:", error.message);
      return [];
    }

    
    const formatted: project[] = data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      techstack: row.techstack,
      timeposted: row.timeposted,
      category: row.category,
      linkToLiveProject: row.linktoliveproject,
      linkToRepository: row.linktogitrepository,
      image: row.image as string, // or image?.toString('base64') if needed
      summary: row.projectsummary,
      isfeatured: row.isfeatured,
    }));
    

    return formatted;
  } catch (err) {
    console.error("Unexpected fetch error:", err);
    return [];
  }
}

export async function addNewProject(data: {title:string,description:string,image:string,datePosted:string,category:string,techStack:string,summary:string,linkToLiveProject:string,linkToRepository:string,isfeatured:boolean}) {

 const {error} = await supabase
 .from('projects')
   .insert(
    [
       {
        title: data.title,
        description: data.description,
        techstack: data.techStack,
        timeposted: data.datePosted,
        category: data.category,
        linktoliveproject: data.linkToLiveProject,
        linktogitrepository: data.linkToRepository,
        image: data.image,
        isfeatured: data.isfeatured,
        projectsummary: data.summary,

      }
    ]
  );
  
   if (error) {
    throw new Error(`Supabase insert error: ${error.message}`);
  }
 
  
}
