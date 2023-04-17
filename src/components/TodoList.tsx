import { useTodos } from "../hooks";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();
  return (
    <ul>
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
