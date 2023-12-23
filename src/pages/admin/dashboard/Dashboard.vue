<template>
  <q-page v-if="!loading" padding>
    <div class="text-center q-mt-lg">
      <span class="text-h4">Dashboard</span>
    </div>
    <div class="row q-mt-sm q-col-gutter-lg">
      <div class="col-12 col-sm-6 col-md-4">
        <q-btn
          unelevated
          no-caps
          :ripple="false"
          outline
          color="primary"
          class="btn-card full-width"
          style="box-shadow: inset 0 4px 0 #264081"
          :to="{ name: 'UserPage' }"
        >
          <div class="content-section">
            <q-icon name="fa-solid fa-user" />
            <span>Crear un Nuevo Usuario</span>
          </div>
        </q-btn>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <q-btn
          unelevated
          no-caps
          :ripple="false"
          outline
          color="positive"
          class="btn-card full-width"
          style="box-shadow: inset 0 4px 0 green"
          :to="{ name: 'CategoryPage' }"
        >
          <div class="content-section">
            <q-icon name="fa-solid fa-user" />
            <span>Crear una Nueva Categoria</span>
          </div>
        </q-btn>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <q-btn
          unelevated
          no-caps
          :ripple="false"
          outline
          color="amber"
          class="btn-card full-width"
          style="box-shadow: inset 0 4px 0 yellow"
          :to="{ name: 'OperationPublication' }"
        >
          <div class="content-section">
            <q-icon name="fa-solid fa-user" />
            <span>Crear una Nueva Publicación</span>
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
  <!-- //*************** INNER LOADING *************** -->
  <q-inner-loading :showing="loading">
    <q-spinner-bars size="35px" color="primary" />
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
  setTimeout(async () => {
    loading.value = false;
    await userStore.getUsersStore();
  }, 500);
});
</script>

<style lang="scss" scoped>
.btn-card {
  height: 200px;

  .content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .q-icon {
      font-size: 2rem;
      padding-bottom: 1.5rem;
    }
    span {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }
}
</style>
