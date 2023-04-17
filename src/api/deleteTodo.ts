import { AxiosError } from "axios";
import { TODO_ENDPOINT } from "../constants/constants";
import { todoClient } from "./client";

/**
 * @example
 * deleteTodo(1);
 */
async function deleteTodo(id: number) {
  try {
    const client = todoClient();
    const res = await client.delete(TODO_ENDPOINT + `/${id}`);
    if (res.status === 204) return "삭제 성공";
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 400)
      return "비어있거나 잘못된 id로 삭제 요청할 수 없습니다.";
    if (err.response?.status === 401) return "토큰이 없습니다.";
  }
}

export default deleteTodo;
