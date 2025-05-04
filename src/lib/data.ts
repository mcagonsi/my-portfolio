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
      techStack: row.techStack,
      timeposted: row.timeposted,
      category: row.category,
      linkToLiveProject: row.linkToLiveProject,
      linkToRepository: row.linkToRepository,
      image: row.image?.toString('base64'),
      summary: row.summary,
      isFeatured: row.isFeatured,
    }));

    return formatted ;
    }
    catch(error){
        console.log(error);
        return [];
    }
}