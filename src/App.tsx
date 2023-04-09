function App() {
  const handleSignUp = () => {
    window.location.href = "signup";
  };
  const handleLogin = () => {
    window.location.href = "login";
  };

  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <button
        className="box-border flex w-40 border-collapse justify-center self-center rounded border border-green-500 bg-white py-2 text-green-500"
        onClick={handleSignUp}
      >
        회원가입
      </button>
      <button
        className="w-40 rounded bg-green-500 px-4 py-2 text-white"
        onClick={handleLogin}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
