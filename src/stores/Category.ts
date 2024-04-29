import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { getCategoriesAPI, getCategoryAPI } from "@services/api_rest";
import { Category } from "@interfaces/interface-store";

interface CategoryState {
  categories: Category[];
  category: Category;
  total_pages: number;
  isLoadingPage: boolean;
  isLoadingTable: boolean;
}

export const useCategory = defineStore("category", {
  state: (): CategoryState => ({
    categories: [],
    category: {} as Category,
    total_pages: 0,
    isLoadingPage: true,
    isLoadingTable: true,
  }),
  actions: {
    async getCategoriesStore(page: number) {
      try {
        const { data } = await getCategoriesAPI(page);
        this.categories = data.data;
        this.total_pages = data.meta.last_page;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      } finally {
        this.isLoadingPage = false;
        this.isLoadingTable = false;
      }
    },

    async getCategoryStore(cat_id: number) {
      try {
        const { data } = await getCategoryAPI(cat_id);
        this.category = data.item;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    cleanCategoryStore() {
      this.category = {} as Category;
    },
  },
});
