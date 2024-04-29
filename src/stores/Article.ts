import { defineStore } from "pinia";
import { Article } from "@interfaces/interface-store";
import { getListArticlesAPI, getArticleAPI } from "@services/api_rest";
import { AxiosError } from "axios";

interface ArticleState {
  articles: Article[];
  article: Article;
  isLoadingPageList: boolean;
  isLoadingPageSingle: boolean;
  isLoadingTable: boolean;
}

export const useArticle = defineStore("article", {
  state: (): ArticleState => ({
    articles: [],
    article: {} as Article,
    isLoadingPageList: true,
    isLoadingPageSingle: true,
    isLoadingTable: true,
  }),
  actions: {
    async getListArticlesStore() {
      try {
        const {
          data: { data },
        } = await getListArticlesAPI();
        this.articles = data;
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
