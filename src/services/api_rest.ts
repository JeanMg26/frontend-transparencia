import jwtAxios from "@services/jwt_axios";

// ********************** AUTHENTICATE ************************
const signInAPI = (data: any) => {
  return jwtAxios.post("login", data);
};

// ************************************************************
// ******************* ADMINISTRATION *************************
// ************************************************************

// *********************** API-GET ****************************
// ++ GetList Users
const getListUsersAPI = () => {
  return jwtAxios.get("users");
};

// *********************** API-POST ****************************
const createUserAPI = (data: any) => {
  return jwtAxios.post("user", data);
};

// *********************** API-DELETE ****************************
const deleteUserAPI = (user_id: number) => {
  return jwtAxios.delete("user/" + user_id);
};

export { getListUsersAPI, signInAPI, createUserAPI, deleteUserAPI };
