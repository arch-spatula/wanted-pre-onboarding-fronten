import { useState } from "react";
import { createTodo } from "../api";
import { CustomButton, CustomInput } from "../components";
import { useCheckToken, useInput } from "../hooks";

/**
 * @todo 1. throttle 걸어두기
 * @todo 2. idx 대신 서버 id 활용하기
 * @todo 3. 낙관적 업데이트 패턴으로 클라이언트를 먼저 반영하고 나중에 서버와 동기화합니다.
 */
function Todo() {
  useCheckToken("토큰 없을 시 Signin으로");

  const { inputValues, handleInputChange, resetSpecificInput } = useInput<{
    todoInput: string;
  }>({
    todoInput: "",
  });

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleCreateTodo = async () => {
    await createTodo(inputValues.todoInput);
    setTodos((prev) => [
      ...prev,
      { todo: inputValues.todoInput, isCompleted: false },
    ]);

    resetSpecificInput("todoInput");
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <form className="flex h-10 flex-row gap-4">
        <CustomInput
          value={inputValues.todoInput}
          placeholder="오늘 배운 일 블로깅하기"
          onChange={handleInputChange("todoInput")}
          testId="new-todo-input"
        />
        <CustomButton
          text="추가"
          hierarchy="primary"
          onClick={() => handleCreateTodo()}
          testId="new-todo-add-button"
        />
      </form>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              <p>{todo.todo}</p>
              {/* <input type="checkbox" checked={todo.isCompleted} /> */}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Todo;
