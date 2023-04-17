import { AxiosError } from "axios";
import {
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
  TODO_ENDPOINT,
} from "../constants/constants";
import { todoClient } from "./client";

/**
 * @example
 * updateTodo(1, { todo: "foo", isCompleted: true });
 */
async function updateTodo(id: number, todo: Omit<Todo, "id" | "userId">) {
  try {
    const client = todoClient();
    const res = await client.put(
      TODO_ENDPOINT + `/${id}`,
      { todo },
      HEADERS_CONTENT_TYPE_APPLICATION_JSON
    );
    if (res.status === 200) return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 400)
      return "비어있거나 잘못된 id로 갱신 요청할 수 없습니다.";
    if (err.response?.status === 401) return "토큰이 없습니다.";
  }
  return;
}

export default updateTodo;
