import { defineStore } from "pinia";
import { getSubcategoriesAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { Subcategory } from "@interfaces/interface-store";

interface SubcategoryState {
  subcategories: Subcategory[];
  isLoadingPage: boolean;
  isLoadingTable: boolean;
}

export const useSubcategory = defineStore("subcategory", {
  state: (): SubcategoryState => ({
    subcategories: [],
    isLoadingPage: true,
    isLoadingTable: true,
  }),
  actions: {
    async getSubCategoriesStore() {
      try {
        const { data } = await getSubcategoriesAPI();
        this.subcategories = data.items;
        this.isLoadingPage = false;
        this.isLoadingTable = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },
  },
});
