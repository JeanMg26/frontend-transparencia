import { defineStore } from "pinia";
import { AxiosError } from "axios";
import { getListUsersAPI } from "@services/api_rest";

export const useUser = defineStore("user", {
  state: () => ({
    users: [],
  }),
  actions: {
    // ++++++ List Users +++++++++++
    async getUsersStore() {
      try {
        const { data } = await getListUsersAPI();
        this.users = data.items;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error);
        }
      }
    },
  },
});
