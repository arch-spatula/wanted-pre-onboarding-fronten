import { useEffect } from "react";
import { SIGNIN_PATH, TODO_PATH } from "../constants/constants";
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
      case isToken === "토큰 보유 시 Todo로" && token.Authorization:
        setPath(TODO_PATH, "replace");
        break;
      case isToken === "토큰 없을 시 Signin으로" && !token.Authorization:
        setPath(SIGNIN_PATH, "replace");
        break;
      default:
        break;
    }
  }, []);
}

export default useCheckToken;
