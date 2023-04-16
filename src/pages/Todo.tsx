import { FormEvent } from "react";
import { CustomButton, CustomInput } from "../components";
import { useCheckToken, useInput } from "../hooks";

function Todo() {
  useCheckToken("토큰 없을 시 Signin으로");

  const { inputValues, handleInputChange, resetSpecificInput } = useInput<{
    todoInput: string;
  }>({
    todoInput: "",
  });

  const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetSpecificInput("todoInput");
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <form className="flex h-10 flex-row gap-4" onSubmit={handleCreateTodo}>
        <CustomInput
          value={inputValues.todoInput}
          placeholder="오늘 배운 일 블로깅하기"
          onChange={handleInputChange("todoInput")}
          testId="new-todo-input"
        />
        <CustomButton
          text="추가"
          hierarchy="primary"
          onClick={() => {}}
          testId="new-todo-add-button"
          customType="submit"
        />
      </form>
    </main>
  );
}

export default Todo;
