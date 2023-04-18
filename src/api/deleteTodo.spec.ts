import { rest } from "msw";
import { baseURL, TODO_ENDPOINT } from "../constants/constants";
import { server } from "../mocks/server";
import deleteTodo from "./deleteTodo";

describe("deleteTodo", () => {
  it("todos 삭제 요청 성공", async () => {
    expect(await deleteTodo(1)).toBe("삭제 성공");
  });

  it("접근할 수 없는 id로 삭제 요청", async () => {
    server.use(
      rest.delete(baseURL + TODO_ENDPOINT + "/1", (req, res, ctx) =>
        res(ctx.status(400))
      )
    );

    expect(await deleteTodo(1)).toBe(
      "비어있거나 잘못된 id로 삭제 요청할 수 없습니다."
    );
  });

  it("토큰 없이 삭제 요청", async () => {
    server.use(
      rest.delete(baseURL + TODO_ENDPOINT + "/1", (req, res, ctx) =>
        res(ctx.status(401))
      )
    );

    expect(await deleteTodo(1)).toBe("토큰이 없습니다.");
  });
});
