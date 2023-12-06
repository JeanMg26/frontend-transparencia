import { defineStore } from "pinia";

export const useSignIn = defineStore("signin", {
  state: () => ({
    signin: false,
  }),
  actions: {
    signInStore() {
      this.signin = true;
    },
  },
});
