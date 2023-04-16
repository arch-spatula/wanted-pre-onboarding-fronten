/** 서버 origin */
const baseURL = "https://www.pre-onboarding-selection-task.shop";

const SIGNIN_ROUTE = "/signin";

const SIGNIN_ENDPOINT = `/auth${SIGNIN_ROUTE}`;

const SIGNUP_ROUTE = "/signup";

const SIGNUP_ENDPOINT = `/auth${SIGNUP_ROUTE}`;

const MAIN_ROUTE = "/";

const TODO_ROUTE = "/todo";

const TODO_ENDPOINT = "/todos";

const HEADERS_CONTENT_TYPE_APPLICATION_JSON = {
  headers: { "Content-Type": "application/json" },
} as const;

export {
  baseURL,
  MAIN_ROUTE,
  SIGNUP_ROUTE,
  SIGNUP_ENDPOINT,
  SIGNIN_ROUTE,
  SIGNIN_ENDPOINT,
  TODO_ROUTE,
  TODO_ENDPOINT,
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
};
