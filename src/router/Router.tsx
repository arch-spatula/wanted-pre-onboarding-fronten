import {
  MAIN_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  TODO_ROUTE,
} from "../constants/constants";
import { Main, NotFound, Signin, Signup, Todo } from "../pages";
import TodosProvider from "../store/TodosSotre";

/**
 * @todo 1. 레이아웃을 위한 컴포넌트를 추가합니다. Nav, Header, Footer
 */
function Router() {
  switch (window.location.href) {
    case window.origin + SIGNIN_ROUTE:
      return <Signin />;
    case window.origin + SIGNUP_ROUTE:
      return <Signup />;
    case window.origin + MAIN_ROUTE:
      return <Main />;
    case window.origin + TODO_ROUTE:
      return (
        <TodosProvider>
          <Todo />
        </TodosProvider>
      );
    default:
      return <NotFound />;
  }
}

export default Router;
