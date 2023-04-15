import {
  MAIN_PATH,
  SIGNIN_PATH,
  SIGNUP_PATH,
  TODO_PATH,
} from "../constants/constants";
import { Main, NotFound, Signin, Signup, Todo } from "../pages";

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
    case window.origin + TODO_PATH:
      return <Todo />;
    default:
      return <NotFound />;
  }
}

export default Router;
