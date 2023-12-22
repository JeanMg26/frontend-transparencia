import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { getCategoriesAPI, getCategoryAPI } from "@services/api_rest";
import { Category } from "@interfaces/interface-store";

interface CategoryState {
  categories: Category[];
  category: Category;
  isLoadingPage: boolean;
  isLoadingTable: boolean;
}

export const useCategory = defineStore("category", {
  state: (): CategoryState => ({
    categories: [],
    category: {} as Category,
    isLoadingPage: true,
    isLoadingTable: true,
  }),
  actions: {
    async getCategoriesStore() {
      try {
        const {
          data: { data },
        } = await getCategoriesAPI();
        this.categories = data;
        this.isLoadingPage = false;
        this.isLoadingTable = false;
        console.log("cat", data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
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
