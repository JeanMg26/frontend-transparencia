<template>
  <q-layout view="lHh Lpr lFf">
    <!-- //************** HEADER *************** -->
    <Header />
    <!-- //************** SIDEBAR ************** -->
    <Sidebar v-if="signInState" />
    <!-- //************* PAGES ***************** -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
import { useSignIn } from "@stores/Signin";
import { getListUsersAPI } from "@services/api_rest";
import { AxiosError } from "axios";

// ++Components
import Sidebar from "./structure/Sidebar.vue";
import Header from "./structure/Header.vue";

// ****************** Constants ******************
const $q = useQuasar();
const signinStore = useSignIn();

// **************** Functions Computed ***************
const signInState = computed(() => signinStore.signin);

const getListUsers = async () => {
  try {
    const {
      data: { data },
    } = await getListUsersAPI();
    console.log(data);
  } catch (error) {
    // if (error instanceof AxiosError) {
    //   console.log(error);
    // }
    console.log(error);
  }
};

//************* Functions LifeCycle *************
onMounted(() => {
  getListUsers();
});
</script>
