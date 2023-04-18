import { rest } from "msw";
import { baseURL, TODO_ENDPOINT } from "../constants/constants";
import { server } from "../mocks/server";
import updateTodo from "./updateTodo";

describe("updateTodo", () => {
  it("todo 갱신 요청 성공", async () => {
    expect(
      await updateTodo(1, {
        todo: "Hello World",
        isCompleted: true,
      })
    ).toEqual({
      id: 1,
      todo: "Hello World",
      isCompleted: true,
      userId: 2,
    });
  });

  it("토큰 없이 todo 갱신 요청", async () => {
    server.use(
      rest.put(baseURL + TODO_ENDPOINT + "/1", (req, res, ctx) =>
        res(ctx.status(401))
      )
    );

    expect(
      await updateTodo(1, {
        todo: "Hello World",
        isCompleted: true,
      })
    ).toBe("토큰이 없습니다.");
  });

  it("접근할 수 없는 todo id에 갱신요청", async () => {
    server.use(
      rest.put(baseURL + TODO_ENDPOINT + "/1", (req, res, ctx) =>
        res(ctx.status(400))
      )
    );

    expect(
      await updateTodo(1, {
        todo: "Hello World",
        isCompleted: true,
      })
    ).toBe("비어있거나 잘못된 id로 갱신 요청할 수 없습니다.");
  });
});
