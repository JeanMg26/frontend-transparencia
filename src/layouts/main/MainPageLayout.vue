<template>
  <q-layout
    view="lHh lpr lFf"
    style="height: 400px"
    v-if="!loadingPageState"
    @scroll="getPosition"
  >
    <!-- //*************** HEADER ************** -->
    <Header v-if="route.name != 'MainPage'" />
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
  <!-- //************** INNER LOADING ***************** -->
  <q-inner-loading :showing="loadingPageState" class="loading-page">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCategory } from "@stores/Category";

// ++ Components
import Header from "./structure/Header.vue";

//***************** Constants *****************
const route = useRoute();
const positionScroll = ref<number>(0);
const categoryStore = useCategory();

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

//************* Functions Computed *************
const loadingPageState = computed(() => categoryStore.isLoadingPage);

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore();
});
</script>
