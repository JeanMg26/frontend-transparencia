<template>
  <q-layout v-if="!loadingProfileState" view="lHh Lpr lFf">
    <!-- //************** HEADER *************** -->
    <Header :jwt_access="jwt_access" />
    <!-- //************** SIDEBAR ************** -->
    <Sidebar v-if="jwt_access" />
    <!-- //************* PAGES ***************** -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!-- //**************** INNER LOADING ************** -->
  <q-inner-loading :showing="loadingProfileState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onMounted, onUpdated, ref } from "vue";
import { useProfile } from "@stores/Profile";

// ++Components
import Sidebar from "./structure/Sidebar.vue";
import Header from "./structure/Header.vue";

// ****************** Constants ******************
const $q = useQuasar();
const profileStore = useProfile();
const jwt_access = ref<boolean>(false);

//************* Functions Computed *************
const loadingProfileState = computed(() => profileStore.isLoadingPage);

//************* Functions LifeCycle *************
onMounted(async () => {
  await profileStore.getProfileStore();
  jwt_access.value = $q.localStorage.has("jwt_access");
  profileStore.isLoadingPage = false;
});

onUpdated(() => {
  jwt_access.value = $q.localStorage.has("jwt_access");
});
</script>
