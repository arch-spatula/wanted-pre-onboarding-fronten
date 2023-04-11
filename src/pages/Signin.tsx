import { CustomButton, CustomInput } from "../components";

function Signin() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">로그인</h1>
      <div className="flex flex-col gap-4">
        <CustomInput
          value=""
          placeholder="user@user.com"
          onChange={(e) => {}}
          label="아이디"
          id="아이디"
          errorMessage="헬퍼 텍스트"
          testId="email-input"
        />
        <CustomInput
          value=""
          placeholder="8자리 이상 입력해주십시오."
          onChange={(e) => {}}
          errorMessage="헬퍼 텍스트"
          testId="password-input"
        />
        <CustomButton
          text="로그인"
          hierarchy="primary"
          testId="signin-button"
        />
      </div>
    </main>
  );
}

export default Signin;
