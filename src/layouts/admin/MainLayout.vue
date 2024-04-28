<template>
  <q-layout view="lHh Lpr lFf">
    <!-- //************** HEADER *************** -->
    <Header :jwtAcessState="jwtAcessState" />
    <!-- //************** SIDEBAR ************** -->
    <Sidebar v-if="jwtAcessState" />
    <!-- //************* PAGES ***************** -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useJWTstore } from "@stores/JWT";

// ++Components
import Sidebar from "./structure/Sidebar.vue";
import Header from "./structure/Header.vue";

// ****************** Constants ******************
const JWTStore = useJWTstore();

//************* Functions Computed *************
const jwtAcessState = computed(() => JWTStore.jwt_access);
</script>
