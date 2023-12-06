<template>
  <q-page padding>
    <router-view></router-view>
  </q-page>
</template>

<script setup lang="ts">
import { useSignIn } from "@stores/Signin";
import { onMounted } from "vue";

// ****************** Constants *****************
const signInStore = useSignIn();

// ******************* Functions LifeCycle *****************
onMounted(() => {
  signInStore.signin = true;
});
</script>

<style lang="scss" scoped></style>
