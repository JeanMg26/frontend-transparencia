<template>
  <q-layout view="lHh Lpr lFf">
    <!-- //************** HEADER *************** -->
    <Header :jwt_access="jwt_access" />
    <!-- //************** SIDEBAR ************** -->
    <Sidebar v-if="jwt_access" />
    <!-- //************* PAGES ***************** -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { onMounted, onUpdated, ref } from "vue";

// ++Components
import Sidebar from "./structure/Sidebar.vue";
import Header from "./structure/Header.vue";

// ****************** Constants ******************
const $q = useQuasar();
const jwt_access = ref<boolean>(false);

//************* Functions LifeCycle *************
onMounted(async () => {
  jwt_access.value = $q.localStorage.has("jwt_access");
});

onUpdated(() => {
  jwt_access.value = $q.localStorage.has("jwt_access");
});
</script>
