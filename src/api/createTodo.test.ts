import { rest } from "msw";
import { baseURL, TODO_ENDPOINT } from "../constants/constants";
import { server } from "../mocks/server";
import createTodo from "./createTodo";

describe("createTodo", () => {
  test("todo 생성 요청 성공", async () => {
    const task = "과제하기";
    const todo: Todo = {
      id: 1,
      isCompleted: false,
      todo: task,
      userId: 1,
    };
    expect(await createTodo(task)).toEqual(todo);
  });
  test("비어있는 todo 생성 요청", async () => {
    server.use(
      rest.post(baseURL + TODO_ENDPOINT, (req, res, ctx) =>
        res(ctx.status(400))
      )
    );

    const emptyTask = "";
    expect(await createTodo(emptyTask)).toEqual(
      "비어있는 todo 생성을 요청할 수 없습니다."
    );
  });
});
