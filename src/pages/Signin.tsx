import { signin } from "../api";
import { CustomButton, CustomInput } from "../components";
import { useInput } from "../hooks";
import { checkEmail, checkPassword, isValid } from "../utils";

function Signin() {
  const { email, password } = JSON.parse(
    sessionStorage.getItem("user") ?? "{ email: '', password: '' }"
  );
  const { inputValues, handleInputChange } = useInput<{
    email: string;
    password: string;
  }>({ email, password });

  const validEmail = checkEmail(inputValues.email);
  const validPassword = checkPassword(inputValues.password);
  const disabled = !isValid(validEmail, validPassword);

  const handleSignin = async () => {
    await signin(inputValues.email, inputValues.password);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">로그인</h1>
      <div className="flex flex-col gap-4">
        <CustomInput
          value={inputValues.email}
          placeholder="user@user.com"
          onChange={handleInputChange("email")}
          inputLabel={{ label: "아이디", id: "아이디" }}
          errorMessage={validEmail}
          testId="email-input"
          type="email"
        />
        <CustomInput
          value={inputValues.password}
          placeholder="8자리 이상 입력해주십시오."
          onChange={handleInputChange("password")}
          inputLabel={{ label: "비밀번호", id: "비밀번호" }}
          errorMessage={validPassword}
          testId="password-input"
          type="password"
        />
        <CustomButton
          text="로그인"
          hierarchy="primary"
          testId="signin-button"
          disabled={disabled}
          onClick={handleSignin}
        />
      </div>
    </main>
  );
}

export default Signin;
