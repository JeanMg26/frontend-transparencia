<template>
  <q-page v-if="!loading" padding>
    <div class="text-center q-mt-lg">
      <span class="text-h4">Dashboard</span>
    </div>
  </q-page>
  <q-inner-loading :showing="loading">
    <q-spinner-bars size="50px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

//***************** Constants *****************
const loading = ref<boolean>(true);

//************* Functions LifeCycle *************
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<style lang="scss" scoped></style>
