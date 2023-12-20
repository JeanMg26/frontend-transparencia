import axios, { InternalAxiosRequestConfig } from "axios";
import { LocalStorage } from "quasar";
import { removeTokenNotFound } from "@utils/remove";

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

// ++Axios Response++
jwtAxios.interceptors.response.use(
  (resp) => {
    return resp;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    // ++Check Code Error++
    if (status == 500) {
      const code = error.response.data.code;
      // console.log("desde axios", error.response.data.code);

      switch (code) {
        case 1010:
          removeTokenNotFound();
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default jwtAxios;
