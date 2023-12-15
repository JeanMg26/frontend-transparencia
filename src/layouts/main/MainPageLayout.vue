<template>
  <q-layout view="lHh lpr lFf" style="height: 400px">
    <!-- //*************** HEADER ************** -->
    <!-- <Header /> -->

    <!-- <q-footer reveal elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// ++ Components
import Header from "./structure/Header.vue";
</script>
