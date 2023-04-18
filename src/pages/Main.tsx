import { CustomButton } from "../components";
import { checkStorage } from "../utils";

/**
 * @todo 1. 조건부 렌더링 추가하기
 * - token을 보유하면 todo로 route할 수 있는 버튼 제공
 * - token이 없으면 현재 제공하는 버튼 제공
 */
function Main() {
  const token = checkStorage();
  return (
    <main className="flex h-screen items-center justify-center gap-4">
      {token.Authorization ? (
        <CustomButton text="Todo" hierarchy="primary" href="/todo" />
      ) : (
        <>
          <CustomButton text="로그인" hierarchy="primary" href="/signin" />
          <CustomButton text="회원가입" hierarchy="secondary" href="/signup" />
        </>
      )}
    </main>
  );
}

export default Main;
