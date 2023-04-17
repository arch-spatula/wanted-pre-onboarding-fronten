import { useId, useState } from "react";
import { useTodos } from "../hooks";
import CustomButton from "./common/CustomButton";

function TodoItem({ id, todo, isCompleted }: Todo) {
  const [checked, setChecked] = useState(isCompleted);
  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  const markupId = useId();

  const { handleDeleteTodo } = useTodos();
  console.log(todo);

  return (
    <li>
      <label htmlFor={markupId}>
        <input
          id={markupId}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
        <span>{todo}</span>
      </label>
      <CustomButton text="수정" hierarchy="primary" testId="modify-button" />
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
