import axios from "axios";
import { LocalStorage } from "quasar";

const jwt_access = LocalStorage.getItem("jwt_access");

const jwtAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + jwt_access,
  },
});
export default jwtAxios;
