import { memo, useId, useState } from "react";
import { useInput, useTodos } from "../hooks";
import CustomButton from "./common/CustomButton";
import CustomCheckBox from "./common/CustomCheckBox";
import CustomInput from "./common/CustomInput";

function TodoItem({ id, todo, isCompleted }: Todo) {
  const [isEdit, setIsEdit] = useState(false);
  const { inputValues, handleInputChange, resetSpecificInput } = useInput<{
    editInput: string;
  }>({
    editInput: todo,
  });
  const markupId = useId();
  const { handleDeleteTodo, handleUpdateTodo } = useTodos();

  const handleCheck = () => {
    handleUpdateTodo(id, { todo, isCompleted: !isCompleted });
  };

  const handleStartEditTodo = () => {
    setIsEdit(true);
  };

  const handleDoneEditTodo = () => {
    setIsEdit(false);
    handleUpdateTodo(id, {
      todo: inputValues.editInput,
      isCompleted: isCompleted,
    });
  };

  const handleCancelEditTodo = () => {
    setIsEdit(false);
    resetSpecificInput("editInput", todo);
  };

  return (
    <li className="flex h-10 justify-start gap-4" key={id}>
      <label htmlFor={markupId} className="flex items-center gap-2">
        <CustomCheckBox
          id={markupId}
          checked={isCompleted}
          onChange={handleCheck}
        />
        {isEdit ? (
          <CustomInput
            value={inputValues.editInput}
            onChange={handleInputChange("editInput")}
            testId="modify-input"
            feedback={false}
            focusOnMount={true}
          />
        ) : (
          <span className="w-64 truncate">{todo}</span>
        )}
      </label>
      {isEdit ? (
        <>
          <CustomButton
            text="제출"
            hierarchy="primary"
            testId="modify-button"
            onClick={handleDoneEditTodo}
            disabled={!inputValues.editInput}
          />
          <CustomButton
            text="취소"
            hierarchy="secondary"
            testId="cancel-button"
            onClick={handleCancelEditTodo}
          />
        </>
      ) : (
        <>
          <CustomButton
            text="수정"
            hierarchy="primary"
            testId="modify-button"
            onClick={handleStartEditTodo}
          />
          <CustomButton
            text="삭제"
            hierarchy="secondary"
            testId="delete-button"
            onClick={() => handleDeleteTodo(id)}
          />
        </>
      )}
    </li>
  );
}

export default memo(TodoItem);
