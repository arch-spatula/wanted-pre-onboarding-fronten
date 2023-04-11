import { CustomButton, CustomInput } from "../components";
import { useInput } from "../hooks";
import { checkEmail, checkPassword } from "../utils";

function Signin() {
  const { inputValues, handleInputChange } = useInput<{
    id: string;
    pw: string;
  }>({ id: "", pw: "" });

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">로그인</h1>
      <div className="flex flex-col gap-4">
        <CustomInput
          value={inputValues.id}
          placeholder="user@user.com"
          onChange={handleInputChange("id")}
          inputLabel={{ label: "아이디", id: "아이디" }}
          errorMessage={checkEmail(inputValues.id)}
          testId="email-input"
          type="email"
        />
        <CustomInput
          value={inputValues.pw}
          placeholder="8자리 이상 입력해주십시오."
          onChange={handleInputChange("pw")}
          inputLabel={{ label: "비밀번호", id: "비밀번호" }}
          errorMessage={checkPassword(inputValues.pw)}
          testId="password-input"
          type="password"
        />
        <CustomButton
          text="로그인"
          hierarchy="primary"
          testId="signin-button"
          disabled={
            !!checkEmail(inputValues.id) || !!checkPassword(inputValues.pw)
          }
        />
      </div>
    </main>
  );
}

export default Signin;
