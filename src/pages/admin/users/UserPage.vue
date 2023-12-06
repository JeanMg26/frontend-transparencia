<template>
  <q-page class="container">
    <!-- //***************** HEADER **************** -->
    <div class="text-center q-my-md">
      <span class="q-page-header">Gestión de Usuarios</span>
    </div>
    <!-- //************* BUTTON ACTIONS ************ -->
    <div class="flex justify-end q-mb-md">
      <q-btn
        no-caps
        unelevated
        :ripple="false"
        color="primary"
        size="0.8rem"
        @click="dialogUser = !dialogUser"
      >
        <q-icon name="fa-solid fa-plus" size="0.7rem" class="q-mr-sm" />
        <span>Agregar usuario</span>
      </q-btn>
    </div>
    <!-- //***************** TABLES **************** -->
    <TableUserDesktop :openDialogDeleteUser="openDialogDeleteUser" />
    <!-- //***************** DIALOGS *************** -->
    <!-- //++Dialog Operation++ -->
    <DialogOperationUser :openDialog="dialogUser" />
    <!-- //++Dialog Delete++ -->
    <DialogDeleteUser :openDialog="dialogDeleteUser" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

// ++Components
import TableUserDesktop from "./tables/TableUserDesktop.vue";
import DialogOperationUser from "./dialogs/DialogOperationUser.vue";
import DialogDeleteUser from "./dialogs/DialogDeleteUser.vue";

// ****************** Constans *******************
const dialogUser = ref<boolean>(false);
const dialogDeleteUser = ref<boolean>(false);

// **************** Functions Template *******************
const openDialogOperationUser = () => {
  dialogUser.value = !dialogUser.value;
};

const openDialogDeleteUser = () => {
  console.log("click");
  dialogDeleteUser.value = !dialogDeleteUser.value;
};
</script>

<style lang="scss" scoped></style>
