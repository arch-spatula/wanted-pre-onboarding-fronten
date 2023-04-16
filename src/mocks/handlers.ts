import { rest } from "msw";
import {
  baseURL,
  SIGNIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  TODO_ENDPOINT,
} from "../constants/constants";

/**
 * @todo 1. 하드 코딩한 "과제하기"를 request body에서 가져오게 만들기
 */

export const handlers = [
  // 유저 회원가입
  rest.post(baseURL + SIGNUP_ENDPOINT, (req, res, ctx) => {
    return res(ctx.status(201), ctx.body(""));
  }),

  // 유저 로그인
  rest.post(baseURL + SIGNIN_ENDPOINT, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc",
      })
    );
  }),

  rest.post(baseURL + TODO_ENDPOINT, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        id: 1,
        todo: "과제하기",
        isCompleted: false,
        userId: 1,
      })
    );
  }),

  rest.get(baseURL + TODO_ENDPOINT, (req, res, ctx) => {
    // return res(ctx.status(200));
  }),

  rest.put(baseURL + TODO_ENDPOINT + "/1", (req, res, ctx) => {
    // return res(ctx.status(200));
  }),

  rest.delete(baseURL + TODO_ENDPOINT + "/1", (req, res, ctx) => {
    // return res(ctx.status(204));
  }),
];
