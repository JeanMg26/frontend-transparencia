import { defineStore } from "pinia";

export const useDrawer = defineStore("drawer", {
  state: () => ({
    leftDrawer: false,
  }),
  actions: {
    toggleLeftDrawerStore() {
      this.leftDrawer = !this.leftDrawer;
    },
  },
});
