import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function DELETE(request: Request) {
  const deleteProjectId = request.url.split('/').pop(); // Extract the project ID from the URL
  const projectId = deleteProjectId ? parseInt(deleteProjectId) : null; // Convert to number

  if (!projectId) {
    return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', projectId);

  if (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Project deleted successfully' });
}

export async function PUT(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const deleteProjectId = request.url.split('/').pop();
  const projectId = deleteProjectId ? parseInt(deleteProjectId) : null; 
  

  if (!projectId) {
    return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
  }

  // Remove id from data so it doesn't get updated
  delete data.id;

  const { error } = await supabase
    .from('projects')
    .update(data)
    .eq('id', projectId);

  if (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
  return NextResponse.json({ message: "Project updated successfully" });
}