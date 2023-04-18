import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api";

type TodoAction =
  | { type: "SET_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | {
      type: "UPDATE_TODO";
      payload: { id: number; todo: string; isCompleted: boolean };
    }
  | { type: "DELETE_TODO"; payload: number };

function reducer(state: Todo[], action: TodoAction) {
  switch (action.type) {
    case "SET_TODOS":
      return [...action.payload];
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return [...state].map((todoItem) =>
        todoItem.id === action.payload.id
          ? {
              ...todoItem,
              todo: action.payload.todo,
              isCompleted: action.payload.isCompleted,
            }
          : todoItem
      );
    case "DELETE_TODO":
      return [...state].filter((todoItem) => todoItem.id !== action.payload);
    default:
      return [...state];
  }
}

/**
 * @todo 1. 불필요한 리랜더링 이슈 해결
 * @todo 4. reducer로 리팩토링하기
 */
function useTodosSource() {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const syncTodos = async () => {
      const todos = await getTodos();
      dispatch({ type: "SET_TODOS", payload: todos });
    };
    syncTodos();
  }, []);

  const handleCreateTodo = useCallback(async (todo: string) => {
    const { id, userId } = await createTodo(todo);
    dispatch({
      type: "ADD_TODO",
      payload: { id, todo, isCompleted: false, userId },
    });
  }, []);

  const handleUpdateTodo = useCallback(
    async (id: number, { todo, isCompleted }: Omit<Todo, "id" | "userId">) => {
      await updateTodo(id, { todo, isCompleted });
      dispatch({ type: "UPDATE_TODO", payload: { id, todo, isCompleted } });
    },
    []
  );

  const handleDeleteTodo = useCallback(async (id: number) => {
    await deleteTodo(id);
    dispatch({ type: "DELETE_TODO", payload: id });
  }, []);

  const contextValue = useMemo(
    () => ({
      todos,
      handleCreateTodo,
      handleUpdateTodo,
      handleDeleteTodo,
    }),
    [todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo]
  );

  return contextValue;
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
