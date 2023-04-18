import { useTodos } from "../hooks";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();
  console.log(todos);
  return (
    <ul className="flex flex-col gap-4">
      {todos.map(({ todo, isCompleted, id }, idx) => {
        return (
          <TodoItem
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            key={id && idx}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
