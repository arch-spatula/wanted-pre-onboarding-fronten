import { useRef, useState } from "react";
import signup from "../api/signup";
import { CustomButton, CustomInput } from "../components";
import { SIGNIN_PATH } from "../constants/constants";
import { useInput } from "../hooks";
import {
  checkEmail,
  checkPassword,
  checkTakenEmail,
  isValid,
  setPath,
} from "../utils";

function Signup() {
  const { inputValues, handleInputChange } = useInput<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const [takenEmail, setTakenEmail] = useState<string[]>([]);

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSignUp = async () => {
    const res = await signup(inputValues.email, inputValues.password);
    if (res === "") {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          email: inputValues.email,
          password: inputValues.password,
        })
      );
      setPath(SIGNIN_PATH);
    } else if (res === "동일한 이메일이 이미 존재합니다.") {
      emailRef.current?.focus();
      setTakenEmail((prev) => [...prev, inputValues.email]);
    }
  };

  const validEmail =
    checkEmail(inputValues.email) ||
    checkTakenEmail(inputValues.email, takenEmail);
  const validPassword = checkPassword(inputValues.password);
  const disabled = !isValid(validEmail, validPassword);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="pb-2 text-3xl">회원가입</h1>
      <div className="flex flex-col gap-4">
        <CustomInput
          value={inputValues.email}
          placeholder="user@user.com"
          onChange={handleInputChange("email")}
          inputLabel={{ label: "email", id: "email" }}
          errorMessage={validEmail}
          testId="email-input"
          type="email"
          customRef={emailRef}
        />
        <CustomInput
          value={inputValues.password}
          placeholder="8자리 이상 입력해주십시오."
          onChange={handleInputChange("password")}
          inputLabel={{ label: "password", id: "password" }}
          errorMessage={validPassword}
          testId="password-input"
          type="password"
        />
        <CustomButton
          text="회원가입"
          hierarchy="primary"
          testId="signup-button"
          disabled={disabled}
          onClick={handleSignUp}
        />
      </div>
    </main>
  );
}

export default Signup;
