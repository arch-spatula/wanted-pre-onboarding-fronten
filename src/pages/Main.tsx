import { MouseEvent } from "react";

/**
 * @todo 1. 버튼 컴포넌트 분리
 */

function Main() {
  const handleSignUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/signup";
  };
  const handleSignIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/signin";
  };
  return (
    <main className="flex h-screen items-center justify-center gap-4">
      <button
        className="w-40 rounded bg-green-500 px-4 py-2 text-white"
        onClick={handleSignIn}
      >
        로그인
      </button>
      <button
        className="box-border flex w-40 border-collapse justify-center self-center rounded border border-green-500 bg-white py-2 text-green-500"
        onClick={handleSignUp}
      >
        회원가입
      </button>
    </main>
  );
}

export default Main;
