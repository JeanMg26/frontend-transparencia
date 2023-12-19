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
    <TableUserDesktop
      :openDialogUpdateUser="openDialogUpdateUser"
      :openDialogDeleteUser="openDialogDeleteUser"
      :openDialogResetUser="openDialogResetUser"
    />
    <!-- //***************** DIALOGS *************** -->
    <!-- //++Dialog Operation++ -->
    <DialogOperationUser :openDialog="dialogUser" />
    <!-- //++Dialog Reset++ -->
    <DialogResetUser :openDialog="dialogResetUser" :userSelect="userSelect" />
    <!-- //++Dialog Delete++ -->
    <DialogDeleteUser :openDialog="dialogDeleteUser" :userSelect="userSelect" />
  </q-page>
  <!-- //************ INNER LOADING **************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useUser } from "@stores/User";
import { User } from "@interfaces/interface-store";

// ++Components
import TableUserDesktop from "./tables/TableUserDesktop.vue";
import DialogOperationUser from "./dialogs/DialogOperationUser.vue";
import DialogDeleteUser from "./dialogs/DialogDeleteUser.vue";
import DialogResetUser from "./dialogs/DialogResetUser.vue";

// ****************** Constans *******************
const userStore = useUser();
const dialogUser = ref<boolean>(false);
const dialogDeleteUser = ref<boolean>(false);
const dialogResetUser = ref<boolean>(false);

const userSelect = ref<User>();

// **************** Functions Template *******************
const openDialogUpdateUser = async (user_id: number) => {
  await userStore.getUserStore(user_id);
  dialogUser.value = !dialogUser.value;
};

const openDialogDeleteUser = (user: User) => {
  userSelect.value = user;
  dialogDeleteUser.value = !dialogDeleteUser.value;
};

const openDialogResetUser = (user: User) => {
  userSelect.value = user;
  dialogResetUser.value = !dialogResetUser.value;
};

//************* Functions Computed *************
const loadingPageState = computed(() => userStore.isLoadingPage);
const listUsersState = computed(() => userStore.users);

//************* Functions LifeCycle *************
onMounted(async () => {
  await userStore.getUsersStore();
});

onUnmounted(() => {
  userStore.isLoadingPage = true;
});
</script>

<style lang="scss" scoped></style>
