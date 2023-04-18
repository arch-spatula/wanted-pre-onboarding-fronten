import { rest } from "msw";
import { baseURL, SIGNIN_ENDPOINT } from "../constants/constants";
import { server } from "../mocks/server";
import signin from "./signin";

describe("signin", () => {
  it("로그인 성공", async () => {
    expect(await signin("testuser@user.com", "12345678")).toEqual({
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc",
    });
  });

  it("비밀번호 불일치", async () => {
    server.use(
      rest.post(baseURL + SIGNIN_ENDPOINT, (req, res, ctx) =>
        res(ctx.status(401))
      )
    );

    expect(await signin("testuser@user.com", "12345678")).toBe(
      "비밀번호가 일치하지 않습니다."
    );
  });

  it("없는 회원", async () => {
    server.use(
      rest.post(baseURL + SIGNIN_ENDPOINT, (req, res, ctx) =>
        res(ctx.status(404))
      )
    );

    expect(await signin("testuser@user.com", "12345678")).toBe(
      "가입되지 않은 이메일입니다"
    );
    expect(true).toBe(true);
  });
});
