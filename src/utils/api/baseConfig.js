import axios from 'axios';
import { HTTP_METHODS } from '../constants/api';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_BASE_URL,
});

const handleRequestConfig = config => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };
};

const createApi = (axiosInstance, methodType) => config => {
  return axiosInstance({
    ...handleRequestConfig(config),
    method: methodType,
  });
};

export default {
  get: createApi(axiosInstance, HTTP_METHODS.GET),
};
