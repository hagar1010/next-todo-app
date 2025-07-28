// app/edit/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditTodoPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) return <div className="text-center mt-10">Todo not found.</div>;

  async function updateTodo(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const completed = formData.get("completed") === "on";

    await prisma.todo.update({
      where: { id },
      data: { title, description, completed },
    });

    redirect("/");
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Todo</h2>
      <form action={updateTodo} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="title"
          defaultValue={todo.title}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          name="description"
          defaultValue={todo.description}
          required
        ></textarea>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="completed"
            defaultChecked={todo.completed}
            className="w-4 h-4"
          />
          <span>Completed</span>
        </label>
        <button className="btn btn-primary w-full">Update Todo</button>
      </form>
    </div>
  );
}
