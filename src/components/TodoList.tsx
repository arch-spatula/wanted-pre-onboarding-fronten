import { memo } from "react";
import { useTodos } from "../hooks";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();
  return (
    <ul className="flex flex-col gap-4">
      {todos.map(({ todo, isCompleted, id }) => {
        return (
          <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} />
        );
      })}
    </ul>
  );
}

export default memo(TodoList);
