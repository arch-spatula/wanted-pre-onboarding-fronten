import { AUTH_PATH, SIGNUP_PATH } from "../constants/constants";
import { client } from "./client";

async function signup(email: string, password: string) {
  try {
    const res = await client.post(
      AUTH_PATH + SIGNUP_PATH,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.status === 201) {
      return "";
    }
  } catch (error) {
    return "동일한 이메일이 이미 존재합니다.";
  }
}

export default signup;
