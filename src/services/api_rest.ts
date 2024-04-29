import { api } from "@boot/axios";
import jwtAxios from "@services/jwt_axios_interceptor";

// ********************** AUTHENTICATE ************************
const signInAPI = (data: any) => {
  return api.post("login", data);
};

// ************************************************************
// ******************* ADMINISTRATION *************************
// ************************************************************

// *********************** API-GET ****************************
// ++ Profile
const getProfileAPI = () => {
  return jwtAxios.get("profile");
};

// ++ Users
const getListUsersAPI = () => {
  return jwtAxios.get("users");
};

const getUserAPI = (user_id: number) => {
  return jwtAxios.get("user/" + user_id);
};

// ++ Categories
const getCategoriesAPI = (page: number) => {
  return jwtAxios.get("cats?page=" + page);
};

const getCategoryAPI = (cat_id: number) => {
  return jwtAxios.get("cat/" + cat_id);
};

// ++ Articles
const getListArticlesAPI = (page: number) => {
  return jwtAxios.get("articles?page=" + page);
};

const getArticleAPI = (id: number) => {
  return jwtAxios.get("article/" + id);
};

// ++ Activities
const getListActivitiesAPI = (page: number) => {
  return jwtAxios.get("activities?page=" + page);
};

const getActivityAPI = (id: number) => {
  return jwtAxios.get("activity/" + id);
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

// ++ Articles
const createArticleAPI = (data: any) => {
  return jwtAxios.post("article", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// ++Upload
const uploadImageAPI = (data: any) => {
  return jwtAxios.post("upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// ++ Activities
const createActivityAPI = (data: any) => {
  return jwtAxios.post("activity", data);
};

// *********************** API-UPDATE ****************************
// ++ Profile
const updateProfileAPI = (data: any) => {
  return jwtAxios.put("profile", data);
};

// ++ Users
const updateUserAPI = (user_id: number, data: any) => {
  return jwtAxios.put("user/" + user_id, data);
};

const resetUserAPI = (user_id: number) => {
  return jwtAxios.put("user/reset/" + user_id);
};

const changeStatusUserAPI = (user_id: number, status: number) => {
  return jwtAxios.put("user/status/" + user_id, { active: status });
};

// ++ Category
const updateCategoryAPI = (cat_id: number, data: any) => {
  return jwtAxios.put("cat/" + cat_id, data);
};

// ++ Articles
const updateArticleAPI = (article_id: number, data: any) => {
  return jwtAxios.put("article/" + article_id, data);
};

// ++ Activity
const updateActivityAPI = (activity_id: number, data: any) => {
  return jwtAxios.put("activity/" + activity_id, data);
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

// ++ Articles
const deleteArticleAPI = (article_id: number) => {
  return jwtAxios.delete("article/" + article_id);
};

// ++ Activity
const deleteActivityAPI = (activity_id: number) => {
  return jwtAxios.delete("activity/" + activity_id);
};

export {
  getProfileAPI,
  getListUsersAPI,
  signInAPI,
  createUserAPI,
  deleteUserAPI,
  getUserAPI,
  updateProfileAPI,
  updateUserAPI,
  resetUserAPI,
  createCategoryAPI,
  getCategoriesAPI,
  getCategoryAPI,
  updateCategoryAPI,
  deleteCategoryAPI,
  getListArticlesAPI,
  createArticleAPI,
  updateArticleAPI,
  getArticleAPI,
  deleteArticleAPI,
  changeStatusUserAPI,
  getListActivitiesAPI,
  getActivityAPI,
  deleteActivityAPI,
  createActivityAPI,
  updateActivityAPI,
  uploadImageAPI,
};
