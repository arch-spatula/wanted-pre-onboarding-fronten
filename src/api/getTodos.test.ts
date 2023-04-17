import { rest } from "msw";
import { baseURL, TODO_ENDPOINT } from "../constants/constants";
import { server } from "../mocks/server";
import getTodos from "./getTodos";

describe("getTodos", () => {
  test("본인 todo get 요청 성공", async () => {
    expect(await getTodos()).toEqual([
      {
        id: 1,
        todo: "todo2",
        isCompleted: false,
        userId: 1,
      },
      {
        id: 2,
        todo: "todo3",
        isCompleted: false,
        userId: 1,
      },
    ]);
  });

  test("token이 없을 때 요청", async () => {
    server.use(
      rest.get(baseURL + TODO_ENDPOINT, (req, res, ctx) => res(ctx.status(401)))
    );

    expect(await getTodos()).toBe("토큰이 없습니다.");
  });
});
