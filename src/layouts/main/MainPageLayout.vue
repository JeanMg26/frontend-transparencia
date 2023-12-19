<template>
  <q-layout view="lHh lpr lFf" style="height: 400px" v-if="!loadingPage">
    <!-- //*************** HEADER ************** -->
    <Header v-if="route.name == 'BlogPage'" />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
  <q-inner-loading :showing="loadingPage" class="loading-page">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
// ++ Components
import Header from "./structure/Header.vue";
import { onMounted, ref } from "vue";

//***************** Constants *****************
const route = useRoute();
const loadingPage = ref<boolean>(true);

//************* Functions LifeCycle *************
onMounted(() => {
  setTimeout(() => {
    loadingPage.value = false;
  }, 500);
});
</script>
