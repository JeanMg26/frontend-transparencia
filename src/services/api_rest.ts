import { api } from "@boot/axios";
import jwtAxios from "@services/jwt_axios";

// ********************** AUTHENTICATE ************************
const signInAPI = (data: any) => {
  return api.post("login", data);
};

// ************************************************************
// ******************* ADMINISTRATION *************************
// ************************************************************

// *********************** API-GET ****************************
// ++ Users
const getListUsersAPI = () => {
  return jwtAxios.get("users");
};

const getUserAPI = (user_id: number) => {
  return jwtAxios.get("user/" + user_id);
};

// *********************** API-POST ****************************
const createUserAPI = (data: any) => {
  return jwtAxios.post("user", data);
};

// *********************** API-UPDATE ****************************
const updateUserAPI = (user_id: number, data: any) => {
  return jwtAxios.put("user/" + user_id, data);
};

const resetUserAPI = (user_id: number) => {
  return jwtAxios.put("user/reset/" + user_id);
};

// *********************** API-DELETE ****************************
const deleteUserAPI = (user_id: number) => {
  return jwtAxios.delete("user/" + user_id);
};

export {
  getListUsersAPI,
  signInAPI,
  createUserAPI,
  deleteUserAPI,
  getUserAPI,
  updateUserAPI,
  resetUserAPI,
};
