import axios, { AxiosRequestConfig } from "axios";
import {
  baseURL,
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
} from "../constants/constants";

const axiosAuthConfig: AxiosRequestConfig = {
  baseURL,
  headers: HEADERS_CONTENT_TYPE_APPLICATION_JSON.headers,
};

const token: { Authorization?: string } = JSON.parse(
  localStorage.getItem("token") ?? "{}"
);

const axiosTodoConfig: AxiosRequestConfig = {
  baseURL,
  headers: { Authorization: token.Authorization },
};

export const authClient = axios.create(axiosAuthConfig);
export const todoClient = axios.create(axiosTodoConfig);
