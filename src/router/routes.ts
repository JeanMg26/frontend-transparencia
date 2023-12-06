import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // ************** AUTH *********************
      {
        path: "",
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
      // ************** MAIN *********************
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
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
