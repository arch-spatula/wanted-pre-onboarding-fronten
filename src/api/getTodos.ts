import { AxiosError } from "axios";
import { TODO_ENDPOINT } from "../constants/constants";
import { todoClient } from "./client";

/**
 * @example
 * getTodos();
 */
async function getTodos() {
  try {
    const client = todoClient();
    const res = await client.get(TODO_ENDPOINT);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 401) return "토큰이 없습니다.";
  }
}

export default getTodos;
