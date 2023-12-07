import { api } from "@boot/axios";
import jwtAxios from "@services/jwt_axios";

// ********************** AUTHENTICATE ************************
const signInAPI = (data: any) => {
  return jwtAxios.post("login", data);
};

// ++ GetList Users
const getListUsersAPI = () => {
  return jwtAxios.get("users");
};

export { getListUsersAPI, signInAPI };
