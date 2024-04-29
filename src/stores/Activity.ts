import { defineStore } from "pinia";
import { Activity } from "@interfaces/interface-store";
import { getListActivitiesAPI, getActivityAPI } from "@services/api_rest";
import { AxiosError } from "axios";

interface ActivityState {
  activities: Activity[];
  activity: Activity;
  total_pages: number;
  isLoadingPageList: boolean;
  isLoadingPageSingle: boolean;
  isLoadingTable: boolean;
}

export const useActivity = defineStore("activity", {
  state: (): ActivityState => ({
    activities: [],
    activity: {} as Activity,
    total_pages: 0,
    isLoadingPageList: true,
    isLoadingPageSingle: true,
    isLoadingTable: true,
  }),
  actions: {
    async getListActivitiesStore(page: number) {
      try {
        const { data } = await getListActivitiesAPI(page);
        this.activities = data.data;
        this.total_pages = data.meta.last_page;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      } finally {
        this.isLoadingPageList = false;
        this.isLoadingTable = false;
      }
    },

    async getActivityStore(id: number) {
      try {
        const {
          data: { data },
        } = await getActivityAPI(id);
        this.activity = data;
        this.isLoadingPageSingle = false;
        this.isLoadingTable = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    cleanActivityStore() {
      this.activity = {} as Activity;
    },
  },
});
