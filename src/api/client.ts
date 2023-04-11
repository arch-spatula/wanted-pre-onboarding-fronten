import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../constants/constant";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

export const client = axios.create(axiosConfig);
