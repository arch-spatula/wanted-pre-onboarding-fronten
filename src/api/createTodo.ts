import { AxiosError } from "axios";
import {
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
  TODO_ENDPOINT,
} from "../constants/constants";
import { todoClient } from "./client";

/**
 * @example
 * createTodo("foo");
 */
async function createTodo(todo: string) {
  try {
    const client = todoClient();
    const res = await client.post(
      TODO_ENDPOINT,
      { todo },
      HEADERS_CONTENT_TYPE_APPLICATION_JSON
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 400)
      return "비어있는 todo로 생성 요청할 수 없습니다.";
    if (err.response?.status === 401) return "토큰이 없습니다.";
  }
}

export default createTodo;
