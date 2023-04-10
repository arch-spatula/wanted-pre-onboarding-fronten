import { Main, NotFound, Signin, Signup } from "../pages";

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
