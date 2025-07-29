
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//add todo action
export async function addTodoAction(_prevState: any, formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  if (!title || !description) return;

  await prisma.todo.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath('/');
  redirect('/');
}



//edit todo action
export async function updateTodoAction(id: number, formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const completed = formData.get('completed') === 'on';

  if (!title || !description) return;

  await prisma.todo.update({
    where: { id },
    data: { title, description, completed },
  });

  revalidatePath('/');
  redirect('/');
}



// detail route action
export async function getTodoById(id: number) {
  return await prisma.todo.findUnique({ where: { id } });
}