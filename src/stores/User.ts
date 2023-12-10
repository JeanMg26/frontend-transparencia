import { defineStore } from "pinia";
import { AxiosError } from "axios";
import { getListUsersAPI, getUserAPI } from "@services/api_rest";
import { User } from "@interfaces/interface-store";

interface UserState {
  users: User[];
  user: User;
  isLoadingPage: boolean;
  isLoadingTable: boolean;
}

export const useUser = defineStore("user", {
  state: (): UserState => ({
    users: [],
    user: {} as User,
    isLoadingPage: true,
    isLoadingTable: true,
  }),
  actions: {
    // ++++++ List Users +++++++++++
    async getUsersStore() {
      try {
        const { data } = await getListUsersAPI();
        this.users = data.items;
        this.isLoadingPage = false;
        this.isLoadingTable = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error);
        }
      }
    },

    async getUserStore(user_id: number) {
      try {
        const { data } = await getUserAPI(user_id);
        this.user = data.item;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },

    clearUserStore() {
      this.user = {} as User;
    },
  },
});
