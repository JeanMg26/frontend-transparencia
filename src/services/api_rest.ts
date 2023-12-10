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

// ++ Categories
const getCategoriesAPI = () => {
  return jwtAxios.get("cats");
};

const getCategoryAPI = (cat_id: number) => {
  return jwtAxios.get("cat/" + cat_id);
};

// *********************** API-POST ****************************
// ++ Users
const createUserAPI = (data: any) => {
  return jwtAxios.post("user", data);
};

// ++ Categories
const createCategoryAPI = (data: any) => {
  return jwtAxios.post("cat", data);
};

// *********************** API-UPDATE ****************************
// ++ Users
const updateUserAPI = (user_id: number, data: any) => {
  return jwtAxios.put("user/" + user_id, data);
};

const resetUserAPI = (user_id: number) => {
  return jwtAxios.put("user/reset/" + user_id);
};

// ++ Category
const updateCategoryAPI = (cat_id: number, data: any) => {
  return jwtAxios.put("cat/" + cat_id, data);
};

// *********************** API-DELETE ****************************
// ++ Users
const deleteUserAPI = (user_id: number) => {
  return jwtAxios.delete("user/" + user_id);
};

// ++ Category
const deleteCategoryAPI = (cat_id: number) => {
  return jwtAxios.delete("cat/" + cat_id);
};

export {
  getListUsersAPI,
  signInAPI,
  createUserAPI,
  deleteUserAPI,
  getUserAPI,
  updateUserAPI,
  resetUserAPI,
  createCategoryAPI,
  getCategoriesAPI,
  getCategoryAPI,
  updateCategoryAPI,
  deleteCategoryAPI,
};
