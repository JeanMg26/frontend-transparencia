import { ListMenu } from "@interfaces/interface-sidebar";

const listMenu: ListMenu[] = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-gauge-simple",
    link: "/dashboard",
    nameRoute: "Dashboard",
  },
  {
    title: "Usuarios",
    icon: "fa-solid fa-users",
    link: "/users",
    nameRoute: "UserPage",
  },
  // {
  //   title: "Publicaciones",
  //   icon: "fa-regular fa-file-lines",
  //   link: "/articles",
  // },
];

export { listMenu };
