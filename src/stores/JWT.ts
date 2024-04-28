import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

interface JWTState {
  jwt_access: any;
  // jwt_refresh: string;
}

export const useJWTstore = defineStore("jwt", {
  state: (): JWTState => ({
    jwt_access: LocalStorage.getItem("jwt_access")
      ? LocalStorage.getItem("jwt_access")
      : "",
  }),
  actions: {
    setJWTStore(jwt_access: string) {
      this.jwt_access = jwt_access;
    },

    cleanJWTStore() {
      this.jwt_access = "";
    },
  },
});
