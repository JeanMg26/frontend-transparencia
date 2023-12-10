import axios, { InternalAxiosRequestConfig } from "axios";
import { LocalStorage } from "quasar";

const jwtAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// ++Axios Request++
jwtAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const jwt_access = LocalStorage.getItem("jwt_access");
    // --JWT Check--
    if (jwt_access) {
      config.headers["Authorization"] = `Bearer ${jwt_access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default jwtAxios;
