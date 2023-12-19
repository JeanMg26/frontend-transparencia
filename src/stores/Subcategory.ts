import { defineStore } from "pinia";
import { getSubcategoriesAPI, getSubcategoryAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { Subcategory } from "@interfaces/interface-store";

interface SubcategoryState {
  subcategories: Subcategory[];
  subcategory: Subcategory;
  subcategories_filter: Subcategory[];
  isLoadingPage: boolean;
  isLoadingTable: boolean;
}

export const useSubcategory = defineStore("subcategory", {
  state: (): SubcategoryState => ({
    subcategories: [],
    subcategories_filter: [],
    subcategory: {} as Subcategory,
    isLoadingPage: true,
    isLoadingTable: true,
  }),
  actions: {
    async getSubCategoriesStore() {
      try {
        const { data } = await getSubcategoriesAPI();
        this.subcategories = data.data;
        this.isLoadingPage = false;
        this.isLoadingTable = false;
        console.log(data.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    async getSubcategoryStore(subcat_id: number) {
      try {
        const { data } = await getSubcategoryAPI(subcat_id);
        this.subcategory = data.data;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    filterSubcategoriesStore(id_cat: number) {
      console.log("here");
      if (this.subcategories) {
        console.log("here 2");
        this.subcategories_filter = this.subcategories.filter(
          (subcat: Subcategory) => {
            if (subcat.category_id == id_cat) {
              return subcat;
            }
          }
        );
      }
    },

    clearSubcategoryStore() {
      this.subcategory = {} as Subcategory;
    },
  },
});
