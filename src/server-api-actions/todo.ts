

// "use client";

// import { useState } from "react";

// // Server Actions
// async function increment(formData: FormData) {
//   "use server";
//   const current = Number(formData.get("counter") || 0);
//   const newValue = current + 1;
//   return { counter: newValue };
// }

// async function decrement(formData: FormData) {
//   "use server";
//   const current = Number(formData.get("counter") || 0);
//   const newValue = current - 1;
//   return { counter: newValue };
// }

// export default function ServerApiCounterPage() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="flex flex-col gap-4">
//       <p>Count: {count}</p>

//       <form
//         action={async (formData) => {
//           const data = await increment(formData);
//           setCount((prev) => data.counter + (prev - count)); // Adjust only increment
//         }}
//         className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md"
//       >
//         <input type="hidden" name="counter" value={count} />
//         <button type="submit">Increment</button>
//       </form>

//       <form
//         action={async (formData) => {
//           const data = await decrement(formData);
//           setCount((prev) => data.counter + (prev - count)); // Adjust only decrement
//         }}
//         className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md"
//       >
//         <input type="hidden" name="counter" value={count} />
//         <button type="submit">Decrement</button>
//       </form>
//     </div>
//   );
// }

'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateTodoAction(_prevState: any, formData: FormData) {
  const id = Number(formData.get('id'));
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  if (!title || !description) return;

  await prisma.todo.update({
    where: { id },
    data: { title, description },
  });

  revalidatePath('/');
}


export async function getTodoById(id: number) {
  return await prisma.todo.findUnique({ where: { id } });
}
