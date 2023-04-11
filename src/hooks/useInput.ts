import { ChangeEvent, useState } from "react";

function useInput<T>(inputGroup: T) {
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
