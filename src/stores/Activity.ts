import { defineStore } from "pinia";
import { Activity } from "@interfaces/interface-store";
import { getListActivitiesAPI, getActivityAPI } from "@services/api_rest";
import { AxiosError } from "axios";

interface ActivityState {
  activities: Activity[];
  activity: Activity;
  isLoadingPageList: boolean;
  isLoadingPageSingle: boolean;
  isLoadingTable: boolean;
}

export const useActivity = defineStore("activity", {
  state: (): ActivityState => ({
    activities: [],
    activity: {} as Activity,
    isLoadingPageList: true,
    isLoadingPageSingle: true,
    isLoadingTable: true,
  }),
  actions: {
    async getListActivitiesStore() {
      try {
        const {
          data: { data },
        } = await getListActivitiesAPI();
        this.activities = data;
        this.isLoadingPageList = false;
        this.isLoadingTable = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    async getActivityStore(id: number) {
      try {
        const {
          data: { data },
        } = await getActivityAPI(id);
        this.activity = data;
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

    cleanActivityStore() {
      this.activity = {} as Activity;
    },
  },
});
