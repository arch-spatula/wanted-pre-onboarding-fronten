function Signup() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div>
        <h1 className="text-3xl">회원가입</h1>
        <h2>아이디</h2>
        <input className="w-64 rounded-lg border border-gray-300 px-3 py-2" />
        <p>헬퍼 텍스트</p>
        <h2>비밀번호</h2>
        <input className="w-64 rounded-lg border border-gray-300 px-3 py-2" />
        <p>헬퍼 텍스트</p>
        <h2>비밀번호 확인</h2>
        <input className="w-64 rounded-lg border border-gray-300 px-3 py-2" />
        <p>헬퍼 텍스트</p>
        <button className="w-40 rounded bg-green-500 px-4 py-2 text-white">
          제출
        </button>
      </div>
    </main>
  );
}

export default Signup;
