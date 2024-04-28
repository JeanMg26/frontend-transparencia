<template>
  <q-page padding>
    <router-view></router-view>
  </q-page>
</template>

<script setup lang="ts">
import { useProfile } from "@stores/Profile";
import { onMounted } from "vue";

//***************** Constants *****************
const profileStore = useProfile();

//************* Functions LifeCycle *************
onMounted(async () => {
  await profileStore.getProfileStore();
});
</script>

<style lang="scss" scoped></style>
