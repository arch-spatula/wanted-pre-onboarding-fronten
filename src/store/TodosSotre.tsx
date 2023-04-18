import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api";

/**
 * @todo 1. 불필요한 리랜더링 이슈 해결
 * @todo 2. reducer로 리팩토링하기
 */
function useTodosSource() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const syncTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    syncTodos();
  }, []);

  const handleCreateTodo = useCallback(async (todo: string) => {
    const arr = new Uint32Array(6);
    const id = parseInt(crypto.getRandomValues(arr).join(""));
    setTodos((prev) => [...prev, { id, todo, isCompleted: false }]);
    await createTodo(todo);
  }, []);

  const handleUpdateTodo = useCallback(
    async (id: number, { todo, isCompleted }: Omit<Todo, "id" | "userId">) => {
      setTodos((prev) =>
        [...prev].map((todoItem) => {
          return todoItem.id === id
            ? { ...todoItem, todo, isCompleted }
            : todoItem;
        })
      );
      await updateTodo(id, { todo, isCompleted });
    },
    []
  );

  const handleDeleteTodo = useCallback(async (id: number) => {
    setTodos((prev) => [...prev].filter((todoItem) => todoItem.id !== id));
    await deleteTodo(id);
  }, []);

  return {
    todos,
    handleCreateTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };
}

const todoCTX = createContext<ReturnType<typeof useTodosSource>>(
  {} as unknown as ReturnType<typeof useTodosSource>
);

export function useTodos() {
  return useContext(todoCTX);
}

interface TodosProviderType {
  children: ReactNode;
}

function TodosProvider({ children }: TodosProviderType) {
  return (
    <todoCTX.Provider value={useTodosSource()}>{children}</todoCTX.Provider>
  );
}

export default TodosProvider;