import { ChangeEvent, useState } from "react";

/**
 * @param {{ [key: string]: string }} inputGroup
 * @returns {{ handleInputChange, inputValues, resetAllInput, resetSpecificInput }}
 * @example
 * const { inputValues, handleInputChange } = useInput<{
 *   id: string;
 *   pw: string;
 * }>({ id: "", pw: "" });
 */
function useInput<T extends { [key: string]: string }>(inputGroup: T) {
  const [inputValues, setInputValues] = useState(inputGroup);

  const handleInputChange = (field: keyof T) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  const resetAllInput = () => {
    const resetObject: { [key: string]: string } = {};
    setInputValues((prev) => {
      if (prev) {
        Object.keys(prev).forEach((item) => {
          resetObject[item] = "";
        });
      }

      return prev;
    });
  };

  const resetSpecificInput = (field: keyof T) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  return { handleInputChange, inputValues, resetAllInput, resetSpecificInput };
}

export default useInput;
