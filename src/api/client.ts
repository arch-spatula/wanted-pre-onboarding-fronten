import axios, { AxiosRequestConfig } from "axios";
import {
  baseURL,
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
} from "../constants/constants";

const { headers } = HEADERS_CONTENT_TYPE_APPLICATION_JSON;
const axiosAuthConfig: AxiosRequestConfig = {
  baseURL,
  headers,
};

const token: { Authorization: string } = JSON.parse(
  localStorage.getItem("token") ?? "{ 'Authorization': '' }"
);

const { Authorization } = token;
const axiosTodoConfig: AxiosRequestConfig = {
  baseURL,
  headers: { Authorization },
};

export const authClient = axios.create(axiosAuthConfig);
export const todoClient = axios.create(axiosTodoConfig);
