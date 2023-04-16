import axios, { AxiosRequestConfig } from "axios";
import {
  baseURL,
  HEADERS_CONTENT_TYPE_APPLICATION_JSON,
} from "../constants/constants";

/**
 * @todo 1. authClient, todoClient 분리하고 만들기
 */

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

const axiosAuthConfig: AxiosRequestConfig = {
  ...axiosConfig,
  headers: HEADERS_CONTENT_TYPE_APPLICATION_JSON.headers,
};

const token: { Authorization?: string } = JSON.parse(
  localStorage.getItem("token") ?? "{}"
);

const axiosTodoConfig: AxiosRequestConfig = {
  ...axiosConfig,
  headers: { Authorization: token.Authorization },
};

export const client = axios.create(axiosConfig);
export const authClient = axios.create(axiosAuthConfig);
export const todoClient = axios.create(axiosTodoConfig);
