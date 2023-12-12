import { RouteRecordRaw } from "vue-router";
import { LocalStorage } from "quasar";

const routes: RouteRecordRaw[] = [
  // ************** AUTH *********************
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: { name: "MainAuthPage" },
    children: [
      {
        path: "signin",
        name: "MainAuthPage",
        component: () => import("pages/auth/MainAuthPage.vue"),
        redirect: { name: "SignInPage" },
        children: [
          // ++SignIn++
          {
            path: "",
            name: "SignInPage",
            component: () => import("pages/auth/signin/SignInPage.vue"),
          },
        ],
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
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
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
          // ++Articles++
          {
            path: "articles",
            name: "ArticlePage",
            component: () => import("pages/admin/articles/ArticlePage.vue"),
            redirect: { name: "ListArticlePage" },
            children: [
              {
                path: "section",
                name: "ListArticlePage",
                component: () =>
                  import("pages/admin/articles/register/ListArticles.vue"),
              },
              {
                path: "section/add",
                name: "OperationArticle",
                component: () =>
                  import("pages/admin/articles/operation/OperationArticle.vue"),
              },
              {
                path: "categorias",
                name: "CategoryPage",
                component: () =>
                  import("pages/admin/categories/CategoryPage.vue"),
              },
              {
                path: "subcategorias",
                name: "SubCategoryPage",
                component: () =>
                  import("pages/admin/subcategories/SubCategoryPage.vue"),
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
        next({ name: "MainAuthPage" });
      }
    },
  },

  // *************** BLOG ********************
  {
    path: "/blog",
    component: () => import("layouts/blog/MainLayoutBlog.vue"),
    redirect: { name: "BlogPage" },
    children: [
      {
        path: "/blog",
        name: "BlogPage",
        component: () => import("pages/blog/BlogPage.vue"),
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
