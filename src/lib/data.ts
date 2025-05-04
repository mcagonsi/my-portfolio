import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from "next/cache";
import { query } from './db';
import { project } from './definition';


export async function GET() {
  try {
    const res = await query('SELECT NOW()');
    return NextResponse.json({ status: 'connected', time: res.rows[0].now });
  } catch (err) {
    return NextResponse.json({ status: 'error', error: err }, { status: 500 });
  }
}


export async function getFeaturedProjects():Promise<project[]> {
    try{
     noStore()  // disable caching
        const { rows } = await query('SELECT * FROM projects WHERE isFeatured = true');

   
    const formatted = rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      techStack: row.techstack,
      timeposted: row.timeposted,
      category: row.category,
      linkToLiveProject: row.linktoliveproject,
      linkToRepository: row.linktogitrepository,
      image: row.image?.toString('base64'),
      summary: row.projectsummary,
      isFeatured: row.isfeatured,
    }));
        console.log(formatted)

    return formatted ;
    }
    catch(error){
        console.log(error);
        return [];
    }
    
}