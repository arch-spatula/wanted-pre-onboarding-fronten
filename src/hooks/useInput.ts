import { ChangeEvent, useCallback, useState } from "react";

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

  const handleInputChange = useCallback((field: keyof T) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  }, []);

  const resetAllInput = useCallback(() => {
    const resetObject: { [key: string]: string } = {};
    setInputValues((prev) => {
      if (prev) {
        Object.keys(prev).forEach((item) => {
          resetObject[item] = "";
        });
      }

      return prev;
    });
  }, []);

  const resetSpecificInput = useCallback((field: keyof T, val = "") => {
    setInputValues((prev) => ({
      ...prev,
      [field]: val,
    }));
  }, []);

  return { handleInputChange, inputValues, resetAllInput, resetSpecificInput };
}

export default useInput;
