import { defineStore } from "pinia";
import { AxiosError } from "axios";
import { getListUsersAPI } from "@services/api_rest";
import { User } from "@interfaces/interface-store";

interface UserState {
  users: User[];
  isLoadingPage: boolean;
}

export const useUser = defineStore("user", {
  state: (): UserState => ({
    users: [],
    isLoadingPage: true,
  }),
  actions: {
    // ++++++ List Users +++++++++++
    async getUsersStore() {
      try {
        const { data } = await getListUsersAPI();
        this.users = data.items;
        this.isLoadingPage = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error);
        }
      }
    },
  },
});
