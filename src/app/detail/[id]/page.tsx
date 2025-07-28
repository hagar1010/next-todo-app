'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
};

export default function TodoDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/todo/${id}`)
        .then((res) => res.json())
        .then((data) => setTodo(data))
        .catch((err) => console.error('Failed to fetch todo:', err));
    }
  }, [id]);

  if (!todo) {
    return (
      <Spinner />
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
