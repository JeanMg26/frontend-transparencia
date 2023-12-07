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
import { useUser } from "@stores/User";

//***************** Constants *****************
const loading = ref<boolean>(true);
const userStore = useUser();

//************* Functions LifeCycle *************
onMounted(async () => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
  await userStore.getUsersStore();
});
</script>

<style lang="scss" scoped></style>
