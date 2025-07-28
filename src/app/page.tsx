import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ThemeToggle from "@/components/ThemeToggle";

export default async function TodoList() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mb-6 text-center">📝 Todo List</h1>

      <Link href="/add" className="btn btn-primary block text-center mb-6">+ Add New Todo</Link>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-card flex justify-between items-center">
            <div>
              <h2 className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.title}</h2>
              {/* <p className="text-sm text-gray-600">{todo.description}</p> */}
              <Link
                href={`/detail/${todo.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Show Details
              </Link>

            </div>

            <div className="space-x-2 flex items-center">
              <form action={`/api/todo/${todo.id}/toggle`} method="POST">
                <button type="submit" className="btn btn-secondary">
                  {todo.completed ? "Undo" : "Complete"}
                </button>
              </form>

              <Link href={`/edit/${todo.id}`} className="btn btn-primary">Edit</Link>

              <form action={`/api/todo/${todo.id}/delete`} method="POST">
                <button type="submit" className="btn btn-secondary">Delete</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
