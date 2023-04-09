import { MouseEvent } from "react";

/**
 * @todo 1. 라우트 컴포넌트로 관심사 분리하기
 * @todo 2. 버튼 컴포넌트 분리
 * @todo 3. 환경변수 설정으로 개발환경, 배포환경 origin 분리하기
 */

function App() {
  const handleSignUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/signup";
  };
  const handleSignIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/signin";
  };

  switch (window.location.href) {
    case "http://localhost:3000/signin":
      return <div>signin</div>;
    case "http://localhost:3000/signup":
      return <div>signup</div>;
    case "http://localhost:3000/":
      return (
        <div className="flex h-screen items-center justify-center gap-4">
          <button
            className="box-border flex w-40 border-collapse justify-center self-center rounded border border-green-500 bg-white py-2 text-green-500"
            onClick={(e) => handleSignUp(e)}
          >
            회원가입
          </button>
          <button
            className="w-40 rounded bg-green-500 px-4 py-2 text-white"
            onClick={handleSignIn}
          >
            로그인
          </button>
        </div>
      );
    default:
      return <div>404page</div>;
  }
}

export default App;
