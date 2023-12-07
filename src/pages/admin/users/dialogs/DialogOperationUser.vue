<template>
  <q-dialog v-model="dialogUser" persistent ref="refDialog">
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
      <q-form @submit="onSubmitUser" greedy>
        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-12">
              <span class="q-label-input">Nombre de usuario</span>
              <q-input
                dense
                outlined
                v-model="dataSend.username"
                type="text"
                maxlength="15"
                placeholder="Ingresa tu nombre de usuario"
                class="q-mt-xs"
              />
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Nombres Completos</span>
              <q-input
                dense
                outlined
                v-model="dataSend.fullname"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                class="q-mt-xs"
              />
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Correo electrónico</span>
              <q-input
                dense
                outlined
                v-model="dataSend.email"
                type="email"
                placeholder="Ingresa tu nombre de usuario"
                class="q-mt-xs"
              />
            </div>
            <!-- //++Button Actions++ -->
            <div class="col-12 q-mt-lg">
              <div class="btn-actions q-gutter-x-md">
                <q-btn
                  no-caps
                  unelevated
                  color="grey-6"
                  label="Cancelar"
                  size="0.8rem"
                  v-close-popup
                />
                <q-btn
                  no-caps
                  unelevated
                  :ripple="false"
                  color="primary"
                  size="0.8rem"
                  label="Agregar"
                  type="submit"
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
import { createUserAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { useUser } from "@stores/User";
import { notify } from "@utils/notify";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});

// ***************** Constants *****************
const userStore = useUser();
const dialogUser = ref<boolean>(false);
const refDialog = ref<any>(null);

const dataSend = reactive({
  username: "",
  fullname: "",
  email: "",
});

// ****************** Functions API *******************
const onSubmitUser = async () => {
  try {
    await createUserAPI({
      name: dataSend.fullname,
      username: dataSend.username,
      email: dataSend.email,
    });
    refDialog.value.hide();
    notify("success", "Usuario creado correctamente.");
    userStore.isLoadingTable = true;
    await userStore.getUsersStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
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
