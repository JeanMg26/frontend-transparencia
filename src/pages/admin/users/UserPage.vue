<template>
  <q-page v-if="!loadingPageState" class="container">
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
    <DialogDeleteUser :openDialog="dialogDeleteUser" :userSelect="userSelect" />
  </q-page>
  <!-- //************ INNER LOADING **************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="50px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useUser } from "@stores/User";

// ++Components
import TableUserDesktop from "./tables/TableUserDesktop.vue";
import DialogOperationUser from "./dialogs/DialogOperationUser.vue";
import DialogDeleteUser from "./dialogs/DialogDeleteUser.vue";
import { User } from "@interfaces/interface-store";

// ****************** Constans *******************
const userStore = useUser();
const dialogUser = ref<boolean>(false);
const dialogDeleteUser = ref<boolean>(false);

const userSelect = ref<User>();

// **************** Functions Template *******************
const openDialogOperationUser = () => {
  dialogUser.value = !dialogUser.value;
};

const openDialogDeleteUser = (user: User) => {
  console.log("click");
  userSelect.value = user;
  dialogDeleteUser.value = !dialogDeleteUser.value;
};

//************* Functions Computed *************
const loadingPageState = computed(() => userStore.isLoadingPage);
const listUsersState = computed(() => userStore.users);

//************* Functions LifeCycle *************
onMounted(async () => {
  await userStore.getUsersStore();
});
</script>

<style lang="scss" scoped></style>
