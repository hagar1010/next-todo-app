import Link from 'next/link';
import { getTodoById } from '@/server-api-actions/todo';


type TodoDetailPageProps = {
  params: { id: string };
};

export default async function TodoDetailPage({ params }: TodoDetailPageProps) {
  const id = Number(params.id);
  const todo = await getTodoById(id);

  if (!todo) {
    return (
      <div className="text-center mt-10">Todo not found.</div>
    );
  }


  return (
    <>
      <div className="p-6 rounded shadow max-w-lg mx-auto mt-8 detail-card">
        <h2 className="text-xl font-bold mb-2">{todo.title}</h2>
        <br />
        <p className="mb-2"><strong>Description:</strong> {todo.description}</p>
        <p className="mb-2">
          <strong>Completed:</strong>{' '}
          <span className={todo.completed ? 'text-green-600' : 'text-red-600'}>
            {todo.completed ? 'Yes' : 'No'}
          </span>
        </p>
        <br />
        <p><strong>Created At:</strong> {new Date(todo.createdAt).toLocaleString()}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Back to Todo List
        </Link>
      </div>
    </>

  );
}
