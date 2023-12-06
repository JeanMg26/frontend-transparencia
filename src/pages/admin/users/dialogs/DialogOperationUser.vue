<template>
  <q-dialog v-model="dialogUser" persistent>
    <q-card class="card-user">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span class="text-header">Agregar un nuevo usuario</span>
          <q-icon
            name="fa-solid fa-xmark"
            class="cursor-pointer"
            size="1rem"
            v-close-popup
          />
        </div>
      </q-card-section>
      <q-form @submit="operationUser" greedy>
        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-12">
              <span class="q-label-input">Nombre de usuario</span>
              <q-input
                dense
                outlined
                v-model="dataSend.username"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                class="full-width"
              />
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Nombre</span>
              <q-input
                dense
                outlined
                v-model="dataSend.first_name"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                class="full-width"
              />
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Apellidos</span>
              <q-input
                dense
                outlined
                v-model="dataSend.last_name"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                class="full-width"
              />
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Correo electrónico</span>
              <q-input
                dense
                outlined
                v-model="dataSend.email"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                class="full-width"
              />
            </div>
            <!-- //++Button Actions++ -->
            <div class="col-12 q-mt-md">
              <div class="btn-actions q-gutter-x-md">
                <q-btn
                  no-caps
                  unelevated
                  color="grey-6"
                  label="Cancelar"
                  size="0.9rem"
                  v-close-popup
                />
                <q-btn
                  no-caps
                  unelevated
                  color="primary"
                  label="Agregar"
                  size="0.9rem"
                  v-close-popup
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});

// ***************** Constants *****************
const dialogUser = ref<boolean>(false);

const dataSend = reactive({
  username: "",
  first_name: "",
  last_name: "",
  email: "",
});

// ****************** Functions API *******************
const operationUser = () => {
  console.log("ok");
};

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogUser.value = true;
  }
);
</script>

<style lang="scss" scoped>
.card-user {
  width: 400px;
}
.text-header {
  font-size: 1.1rem;
  font-weight: 500;
}

.btn-actions {
  display: flex;
  .q-btn {
    flex-grow: 1;
  }
}
</style>
