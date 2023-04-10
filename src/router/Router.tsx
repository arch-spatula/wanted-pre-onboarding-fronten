import { Main, NotFound, Signin, Signup } from "../pages";

/**
 * @todo 1. 레이아웃을 위한 컴포넌트를 추가합니다. Nav, Header, Footer
 */
function Router() {
  switch (window.location.href) {
    case window.origin + "/signin":
      return <Signin />;
    case window.origin + "/signup":
      return <Signup />;
    case window.origin + "/":
      return <Main />;
    default:
      return <NotFound />;
  }
}

export default Router;
