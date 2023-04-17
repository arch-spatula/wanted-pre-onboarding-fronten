import { useEffect } from "react";
import { SIGNIN_ROUTE, TODO_ROUTE } from "../constants/constants";
import { setPath } from "../utils";

/**
 * @param {"토큰 보유 시 Todo로" | "토큰 없을 시 Signin으로"} isToken 토큰의 보유여부에 따라 리다이렉팅 결정
 * 정책상 확장이 있으면 switch-case에 case와 매개변수를 추가합니다.
 */

function useCheckToken(
  isToken: "토큰 보유 시 Todo로" | "토큰 없을 시 Signin으로"
) {
  useEffect(() => {
    const token: { Authorization?: string } = JSON.parse(
      localStorage.getItem("token") ?? "{}"
    );

    switch (true) {
      case token.Authorization && isToken === "토큰 보유 시 Todo로":
        setPath(TODO_ROUTE);
        break;
      case !token.Authorization && isToken === "토큰 없을 시 Signin으로":
        setPath(SIGNIN_ROUTE);
        break;
      default:
        break;
    }
  }, []);
}

export default useCheckToken;
