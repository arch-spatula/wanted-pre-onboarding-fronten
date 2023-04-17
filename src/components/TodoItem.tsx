import { useId, useState } from "react";
import { useInput, useTodos } from "../hooks";
import CustomButton from "./common/CustomButton";
import CustomInput from "./common/CustomInput";

function TodoItem({ id, todo, isCompleted }: Todo) {
  const [checked, setChecked] = useState(isCompleted);
  const [isEdit, setIsEdit] = useState(false);
  const { inputValues, handleInputChange } = useInput<{ editInput: string }>({
    editInput: todo,
  });

  const markupId = useId();
  const { handleDeleteTodo, handleUpdateTodo } = useTodos();

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  // console.log(todo);

  const handleStartEditTodo = () => {
    setIsEdit(true);
  };

  const handleDoneEditTodo = () => {
    setIsEdit(false);
    handleUpdateTodo(id, { todo: inputValues.editInput, isCompleted: checked });
  };

  return (
    <li>
      <label htmlFor={markupId}>
        <input
          id={markupId}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
        {isEdit ? (
          <CustomInput
            value={inputValues.editInput}
            onChange={handleInputChange("editInput")}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEdit ? (
        <CustomButton
          text="제출"
          hierarchy="primary"
          testId="modify-button"
          onClick={handleDoneEditTodo}
        />
      ) : (
        <CustomButton
          text="수정"
          hierarchy="primary"
          testId="modify-button"
          onClick={handleStartEditTodo}
        />
      )}
      <CustomButton
        text="삭제"
        hierarchy="secondary"
        testId="delete-button"
        onClick={() => handleDeleteTodo(id)}
      />
    </li>
  );
}

export default TodoItem;
