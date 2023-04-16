import { AxiosError } from "axios";
import { TODO_PATH } from "../constants/constants";
import { todoClient } from "./todoClient";

async function createTodo(todo: string) {
  try {
    const res = await todoClient.post(
      TODO_PATH + "s",
      { todo },
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 400)
      return "비어있는 todo 생성을 요청할 수 없습니다.";
  }
}

export default createTodo;
