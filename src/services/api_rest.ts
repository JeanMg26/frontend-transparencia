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
const getCategoriesAPI = () => {
  return jwtAxios.get("cats");
};

const getCategoryAPI = (cat_id: number) => {
  return jwtAxios.get("cat/" + cat_id);
};

// ++ SubCategories
const getSubcategoriesAPI = () => {
  return jwtAxios.get("subcats");
};

const getSubcategoryAPI = (subcat_id: number) => {
  return jwtAxios.get("subcat/" + subcat_id);
};

// ++ Articles
const getListArticlesAPI = () => {
  return jwtAxios.get("articles");
};

const getArticleAPI = (id: number) => {
  return jwtAxios.get("article/" + id);
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

// ++ Subcategories
const createSubcategoryAPI = (data: any) => {
  return jwtAxios.post("subcat", data);
};

// ++ Articles
const createArticleAPI = (data: any) => {
  return jwtAxios.post("article", data);
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

// ++ Category
const updateCategoryAPI = (cat_id: number, data: any) => {
  return jwtAxios.put("cat/" + cat_id, data);
};

// ++ Subcategory
const updateSubcategoryAPI = (subcat_id: number, data: any) => {
  return jwtAxios.put("subcat/" + subcat_id, data);
};

// ++ Articles
const updateArticleAPI = (article_id: number, data: any) => {
  return jwtAxios.put("article/" + article_id, data);
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

// ++ Subcategory
const deleteSubcategoryAPI = (subcat_id: number) => {
  return jwtAxios.delete("subcat/" + subcat_id);
};

// ++ Articles
const deleteArticleAPI = (article_id: number) => {
  return jwtAxios.delete("article/" + article_id);
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
  getSubcategoriesAPI,
  createSubcategoryAPI,
  getSubcategoryAPI,
  updateSubcategoryAPI,
  deleteSubcategoryAPI,
  getListArticlesAPI,
  createArticleAPI,
  updateArticleAPI,
  getArticleAPI,
  deleteArticleAPI,
};
