import { CustomButton, CustomInput, TodoList } from "../components";
import { useCheckToken, useInput, useTodos } from "../hooks";

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

  const { handleCreateTodo } = useTodos();

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
          onClick={() => {
            handleCreateTodo(inputValues.todoInput);
            resetSpecificInput("todoInput");
          }}
          testId="new-todo-add-button"
          disabled={!inputValues.todoInput}
        />
      </form>
      <TodoList />
    </main>
  );
}

export default Todo;
