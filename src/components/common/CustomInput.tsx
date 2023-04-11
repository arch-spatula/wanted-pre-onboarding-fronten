import { ChangeEvent, HTMLInputTypeAttribute, RefObject } from "react";

/**
 *
 * @todo 1. 아래처럼 label은 독립적이고 id는 의존적이게 props를 갖도록 만드십시오.
 *
 * 에러 발생
 * <CustomInput value="adsf" onChange={(e) => {}} label="label" />
 * <CustomInput value="adsf" onChange={(e) => {}} id="id" />
 *
 * 정상동작
 * <CustomInput value="adsf" onChange={(e) => {}} />
 * <CustomInput value="adsf" onChange={(e) => {}} label="label" id="id" />
 *
 * crypto를 사용해서 id를 지정하면 매 렌더링마다 새로운 id가 지정됩니다. 메모리 낭비가 큽니다.
 */

interface CustomInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  id?: CustomInputProps["label"];
  testId?: string;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
}

function CustomInput({
  value,
  onChange,
  type = "text",
  ref,
  placeholder,
  errorMessage,
  label,
  id = label,
  testId,
}: CustomInputProps) {
  return (
    <div className="flex h-28 flex-col">
      {id && (
        <label htmlFor={id}>
          <h3 className="pb-2 text-xl">{label}</h3>
        </label>
      )}
      <input
        className="w-64 rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        {...(typeof id === "string" && { id })}
        {...(testId && { "data-testid": testId })}
      />
      {errorMessage && (
        <span className=" pt-1 text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}

export default CustomInput;
