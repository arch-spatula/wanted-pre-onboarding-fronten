import { ChangeEvent, HTMLInputTypeAttribute, RefObject, useId } from "react";

interface CustomInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  customType?: HTMLInputTypeAttribute;
  inputLabel?: string;
  testId?: string;
  customRef?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
  feedback?: boolean;
}

/**
 * crypto를 사용해서 id를 지정하면 매 렌더링마다 새로운 id가 지정됩니다. 메모리 낭비가 큽니다.
 * @example
 * <CustomInput value="adsf" onChange={(e) => {}} />
 * <CustomInput value="adsf" onChange={(e) => {}} inputLabel={{ label: "label", id: "id" }} />
 */

function CustomInput({
  value,
  onChange,
  customType = "text",
  customRef,
  placeholder,
  errorMessage,
  inputLabel,
  testId,
  feedback = true,
}: CustomInputProps) {
  const id = useId();
  return (
    <div className={feedback ? "flex h-28 flex-col" : "flex h-10 flex-col"}>
      {inputLabel && (
        <label htmlFor={id}>
          <h3 className="pb-2 text-xl">{inputLabel}</h3>
        </label>
      )}
      <input
        className="w-64 rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
        type={customType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={customRef}
        {...(typeof inputLabel === "string" && { id })}
        {...(testId && { "data-testid": testId })}
      />
      {errorMessage && feedback && (
        <span role="caption" className=" truncate pt-1 text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default CustomInput;
