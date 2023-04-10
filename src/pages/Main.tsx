import { CustomButton } from "../components";

function Main() {
  return (
    <main className="flex h-screen items-center justify-center gap-4">
      <CustomButton text="로그인" hierarchy="primary" href="/signin" />
      <CustomButton text="회원가입" hierarchy="secondary" href="/signup" />
    </main>
  );
}

export default Main;
