import { MAIN_PATH, SIGNIN_PATH, SIGNUP_PATH } from "../constants/constants";
import { Main, NotFound, Signin, Signup } from "../pages";

/**
 * @todo 1. 레이아웃을 위한 컴포넌트를 추가합니다. Nav, Header, Footer
 */
function Router() {
  switch (window.location.href) {
    case window.origin + SIGNIN_PATH:
      return <Signin />;
    case window.origin + SIGNUP_PATH:
      return <Signup />;
    case window.origin + MAIN_PATH:
      return <Main />;
    default:
      return <NotFound />;
  }
}

export default Router;
