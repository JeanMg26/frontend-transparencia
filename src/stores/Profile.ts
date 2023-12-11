import { defineStore } from "pinia";
import { AxiosError } from "axios";
import { getProfileAPI } from "@services/api_rest";
import { Profile } from "@interfaces/interface-store";

interface ProfileState {
  profile: Profile;
  isLoadingPage: boolean;
}

export const useProfile = defineStore("profile", {
  state: (): ProfileState => ({
    profile: {} as Profile,
    isLoadingPage: true,
  }),
  actions: {
    async getProfileStore() {
      try {
        const { data } = await getProfileAPI();
        this.profile = data.data;
        this.isLoadingPage = false;
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data);
        }
      }
    },
  },
});
