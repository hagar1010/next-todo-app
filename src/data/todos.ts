export type Todo = {
  id: number;
  title: string;
  description: string;
};

export let todos: Todo[] = [
  { id: 1, title: "Buy milk", description: "Buy from supermarket" },
  { id: 2, title: "Learn Next.js", description: "Start with routing" }
];

export function getTodoById(id: number): Todo | undefined {
  return todos.find(todo => todo.id === id);
}

export function updateTodo(id: number, updated: Partial<Todo>): void {
  const index = todos.findIndex(todo => todo.id === id);
  if (index > -1) {
    todos[index] = { ...todos[index], ...updated };
  }
}