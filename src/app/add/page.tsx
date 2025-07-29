'use client';

import { addTodoAction } from '@/server-api-actions/todo';
// import { useFormState } from 'react-dom';
import { useActionState } from 'react';

export default function AddTodoPage() {
  const [state, formAction] = useActionState(addTodoAction, null);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Todo</h1>

      <form action={formAction} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            name="title"
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border rounded px-4 py-2"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
}
