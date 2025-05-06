
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

    // Optional: convert BYTEA image to base64 if needed
    const formatted: project[] = data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      techStack: row.techstack,
      timeposted: row.timeposted,
      category: row.category,
      linkToLiveProject: row.linktoliveproject,
      linkToRepository: row.linktogitrepository,
      image: row.image, // or image?.toString('base64') if needed
      summary: row.projectsummary,
      isFeatured: row.isfeatured,
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
      .select('*');

    if (error) {
      console.error("Supabase error:", error.message);
      return [];
    }

    // Optional: convert BYTEA image to base64 if needed
    const formatted: project[] = data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      techStack: row.techstack,
      timeposted: row.timeposted,
      category: row.category,
      linkToLiveProject: row.linktoliveproject,
      linkToRepository: row.linktogitrepository,
      image: row.image, // or image?.toString('base64') if needed
      summary: row.projectsummary,
      isFeatured: row.isfeatured,
    }));

    return formatted;
  } catch (err) {
    console.error("Unexpected fetch error:", err);
    return [];
  }
}