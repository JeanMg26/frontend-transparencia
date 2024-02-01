import { RouteRecordRaw } from "vue-router";
import { LocalStorage } from "quasar";

const routes: RouteRecordRaw[] = [
  // ************** AUTH *********************
  {
    path: "/signin",
    component: () => import("layouts/admin/MainLayout.vue"),
    redirect: { name: "SignInPage" },
    children: [
      // ++SignIn++
      {
        path: "",
        name: "SignInPage",
        component: () => import("pages/auth/signin/SignInPage.vue"),
      },
    ],
    beforeEnter: (to, from, next) => {
      let jwt_access = LocalStorage.getItem("jwt_access");
      if (jwt_access) {
        next({ name: "MainAdminPage" });
      } else {
        next();
      }
    },
  },

  // ************** MAIN *********************
  {
    path: "/administration",
    component: () => import("layouts/admin/MainLayout.vue"),
    redirect: { name: "MainAdminPage" },
    children: [
      {
        path: "",
        name: "MainAdminPage",
        component: () => import("pages/admin/MainAdminPage.vue"),
        redirect: { name: "Dashboard" },
        children: [
          // ++Dashboard++
          {
            path: "dashboard",
            name: "Dashboard",
            component: () => import("pages/admin/dashboard/Dashboard.vue"),
          },
          // ++Users++
          {
            path: "users",
            name: "UserPage",
            component: () => import("pages/admin/users/UserPage.vue"),
          },
          // ++Profile++
          {
            path: "profile",
            name: "ProfilePage",
            component: () => import("pages/admin/profile/ProfilePage.vue"),
          },
          // ++Categories++
          {
            path: "categorias",
            name: "CategoryPage",
            component: () => import("pages/admin/categories/CategoryPage.vue"),
          },
          // ++Publications++
          {
            path: "publications",
            name: "MainPublication",
            component: () =>
              import("pages/admin/publications/MainPublication.vue"),
            redirect: { name: "PublicationPage" },
            children: [
              {
                path: "",
                name: "PublicationPage",
                component: () =>
                  import(
                    "pages/admin/publications/records/PublicationPage.vue"
                  ),
              },
              {
                path: "operation/:id?",
                name: "OperationPublication",
                component: () =>
                  import(
                    "pages/admin/publications/operation/OperationPublication.vue"
                  ),
              },
            ],
          },
          // ++Actividades++
          {
            path: "activities",
            name: "MainActivity",
            component: () => import("pages/admin/activities/MainActivity.vue"),
            redirect: { name: "ActivityPage" },
            children: [
              {
                path: "",
                name: "ActivityPage",
                component: () =>
                  import("pages/admin/activities/records/ActivityPage.vue"),
              },
              {
                path: "operation/:id?",
                name: "OperationActivity",
                component: () =>
                  import(
                    "pages/admin/activities/operation/OperationActivity.vue"
                  ),
              },
            ],
          },
        ],
      },
    ],
    beforeEnter: (to, from, next) => {
      let jwt_access = LocalStorage.getItem("jwt_access");
      if (jwt_access) {
        next();
      } else {
        next({ name: "SignInPage" });
      }
    },
  },

  // *************** BLOG ********************
  {
    path: "/",
    component: () => import("layouts/main/MainPageLayout.vue"),
    redirect: { name: "MainPage" },
    children: [
      {
        path: "",
        name: "MainPage",
        component: () => import("pages/main/MainPage.vue"),
      },
      {
        path: "transparencia",
        name: "BlogPage",
        component: () => import("pages/blog/BlogPage.vue"),
      },
      {
        path: "transparencia/:publication",
        name: "BlogPublication",
        component: () => import("pages/blog/publication/BlogPublication.vue"),
      },
      {
        path: "prensa",
        name: "BlogPrensa",
        component: () => import("pages/blog/publication/Prensa.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export default routes;
