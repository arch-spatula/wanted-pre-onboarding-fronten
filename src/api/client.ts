import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../constants/constants";

/**
 * @todo 1. authClient, todoClient 분리하고 만들기
 */

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

export const client = axios.create(axiosConfig);
