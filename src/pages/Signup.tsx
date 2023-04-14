import { useRef } from "react";
import { CustomButton, CustomInput } from "../components";
import { useInput } from "../hooks";
import { checkEmail, checkPassword, isValid } from "../utils";

function Signup() {
  const { inputValues, handleInputChange } = useInput<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSignUp = () => {};

  const validEmail = checkEmail(inputValues.email);
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
