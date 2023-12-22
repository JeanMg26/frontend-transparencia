<template>
  <q-layout
    view="lHh lpr lFf"
    style="height: 400px"
    v-if="!loadingPage"
    @scroll="getPosition"
  >
    <!-- //*************** HEADER ************** -->
    <Header v-if="route.name == 'BlogPage'" />
    <q-page-container>
      <router-view></router-view>
      <!-- //++Button Floating++ -->
      <q-page-sticky
        v-if="positionScroll > 0"
        position="bottom-right"
        :offset="[18, 18]"
      >
        <q-btn
          :fab="$q.screen.width >= 600 ? true : false"
          color="primary"
          :fab-mini="$q.screen.width < 600 ? true : false"
          @click="goScrollTop()"
        >
          <q-icon name="fa-solid fa-arrow-up" />
        </q-btn>
      </q-page-sticky>
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
const positionScroll = ref<number>(0);

//************* Functions Template *************
const getPosition = (value: any) => {
  positionScroll.value = value.position;
};

const goScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//************* Functions LifeCycle *************
onMounted(() => {
  setTimeout(() => {
    loadingPage.value = false;
  }, 500);
});
</script>
