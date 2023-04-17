import axios, { AxiosRequestConfig } from "axios";
import {
  baseURL,
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
} from "../constants/constants";

export function authClient() {
  const { headers } = HEADERS_CONTENT_TYPE_APPLICATION_JSON;
  const axiosAuthConfig: AxiosRequestConfig = {
    baseURL,
    headers,
  };
  const client = axios.create(axiosAuthConfig);
  return client;
}

export function todoClient() {
  const token: { Authorization?: string } = JSON.parse(
    localStorage.getItem("token") ?? "{}"
  );

  const { Authorization } = token;
  const axiosTodoConfig: AxiosRequestConfig = {
    baseURL,
    headers: { Authorization },
  };

  return axios.create(axiosTodoConfig);
}
