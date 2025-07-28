import Link from "next/link";
import { todos } from "../data/todos";

export default function TodoList() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <div>
              <Link href={`/detail/${todo.id}`}>Detail</Link> |{" "}
              <Link href={`/edit/${todo.id}`}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
