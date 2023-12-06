import { api } from "@boot/axios";

// ++ GetList Users
const getListUsersAPI = () => {
  return api.get("users", {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzAxODI0NzcwLCJleHAiOjE3MDI0Mjk1NzAsIm5iZiI6MTcwMTgyNDc3MCwianRpIjoicDRXVDZMd0U2Z3JiOUtNTiIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.0OBIzQ7BMzRyQcAj-7EmZ7EICsPXJAz0igMVYAQUK7k",
    },
  });
};

export { getListUsersAPI };
