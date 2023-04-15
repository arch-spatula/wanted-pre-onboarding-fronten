import { useCheckToken } from "../hooks";

function Todo() {
  useCheckToken("토큰 없을 시 Signin으로");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div>hello, todo!</div>
    </main>
  );
}

export default Todo;
