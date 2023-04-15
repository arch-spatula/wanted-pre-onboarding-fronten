import { useRef, useState } from "react";
import signup from "../api/signup";
import { SIGNIN_PATH } from "../constants/constants";
import {
  checkEmail,
  checkPassword,
  checkTakenEmail,
  isValid,
  setPath,
} from "../utils";
import useInput from "./useInput";

const useSignup = () => {
  const { inputValues, handleInputChange } = useInput<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const [takenEmail, setTakenEmail] = useState<string[]>([]);

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSignUp = async (email: string, password: string) => {
    const res = await signup(email, password);
    if (res === "") {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          email,
          password,
        })
      );
      setPath(SIGNIN_PATH);
    } else if (res === "동일한 이메일이 이미 존재합니다.") {
      emailRef.current?.focus();
      setTakenEmail((prev) => [...prev, email]);
    }
  };

  const validEmail =
    checkEmail(inputValues.email) ||
    checkTakenEmail(inputValues.email, takenEmail);
  const validPassword = checkPassword(inputValues.password);
  const disabled = !isValid(validEmail, validPassword);

  return {
    handleSignUp,
    emailRef,
    inputValues,
    handleInputChange,
    validEmail,
    validPassword,
    disabled,
  };
};

export default useSignup;
