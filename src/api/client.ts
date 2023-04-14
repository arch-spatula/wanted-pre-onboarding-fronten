import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../constants/constants";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

export const client = axios.create(axiosConfig);
