import { rest } from "msw";
import {
  AUTH_PATH,
  baseURL,
  SIGNIN_PATH,
  SIGNUP_PATH,
  TODO_PATH,
} from "../constants/constants";

/**
 * @todo 1. todo관련 통신 테스트 케이스 추가하기
 */

export const handlers = [
  // 유저 회원가입
  rest.post(baseURL + AUTH_PATH + SIGNUP_PATH, (req, res, ctx) => {
    return res(ctx.status(201), ctx.body(""));
  }),

  // 유저 로그인
  rest.post(baseURL + AUTH_PATH + SIGNIN_PATH, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc",
      })
    );
  }),
];
