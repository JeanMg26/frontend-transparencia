import { defineStore } from "pinia";
import { Article } from "@interfaces/interface-store";
import { getListArticlesAPI, getArticleAPI } from "@services/api_rest";
import { AxiosError } from "axios";

interface ArticleState {
  articles: Article[];
  article: Article;
  total_page: number;
  isLoadingPageList: boolean;
  isLoadingPageSingle: boolean;
  isLoadingTable: boolean;
}

export const useArticle = defineStore("article", {
  state: (): ArticleState => ({
    articles: [],
    article: {} as Article,
    total_page: 0,
    isLoadingPageList: true,
    isLoadingPageSingle: true,
    isLoadingTable: true,
  }),
  actions: {
    async getListArticlesStore(page: number) {
      try {
        const { data } = await getListArticlesAPI(page);
        this.articles = data.data;
        this.total_page = data.meta.last_page;
        this.isLoadingPageList = false;
        this.isLoadingTable = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    async getArticleStore(id: number) {
      try {
        const {
          data: { data },
        } = await getArticleAPI(id);
        this.article = data;
        setTimeout(() => {
          this.isLoadingPageSingle = false;
        }, 1000);
        this.isLoadingTable = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    cleanArticleStore() {
      this.article = {} as Article;
    },
  },
});
