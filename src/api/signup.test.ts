import { rest } from "msw";
import { AUTH_PATH, baseURL, SIGNUP_PATH } from "../constants/constants";
import { server } from "../mocks/server";
import signup from "./signup";

describe("signup", () => {
  test("없던 유저 생성", async () => {
    expect(await signup("@", "12345678")).toBe("");
  });

  test("이미 존재하는 유저", async () => {
    server.use(
      rest.post(baseURL + AUTH_PATH + SIGNUP_PATH, (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    expect(await signup("@", "12345678")).toBe(
      "동일한 이메일이 이미 존재합니다."
    );
  });
});
