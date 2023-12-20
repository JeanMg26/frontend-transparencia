<template>
  <q-dialog v-model="dialogStatus" persistent ref="refDialog">
    <q-card class="card-user">
      <q-card-section>
        <div class="flex column justify-center items-center">
          <q-icon
            name="fa-solid fa-circle-exclamation"
            color="grey-4"
            size="2.5rem"
            class="q-mb-md"
          />
          <span v-if="userSelect?.active == 0">
            ¿Esta seguro que desea habilitar a {{ userSelect?.name }} ?
          </span>
          <span v-if="userSelect?.active == 1">
            ¿Esta seguro que desea deshabilitar a {{ userSelect?.name }} ?
          </span>
        </div>
        <div class="btn-actions q-gutter-x-md q-mt-md">
          <q-btn
            no-caps
            unelevated
            color="grey-6"
            label="Cancelar"
            size="0.9rem"
            v-close-popup
          />
          <q-btn
            v-if="userSelect?.active == 0"
            no-caps
            unelevated
            color="positive"
            label="Habilitar"
            size="0.9rem"
            @click="changeStatusUser(1)"
            :loading="loadingSubmit"
          >
            <template v-slot:loading>
              <q-spinner-bars size="20px" />
            </template>
          </q-btn>
          <q-btn
            v-if="userSelect?.active == 1"
            no-caps
            unelevated
            color="negative"
            label="Deshabilitar"
            size="0.9rem"
            @click="changeStatusUser(0)"
            :loading="loadingSubmit"
          >
            <template v-slot:loading>
              <q-spinner-bars size="20px" />
            </template>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from "vue";
import { changeStatusUserAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { User } from "@interfaces/interface-store";
import { useUser } from "@stores/User";
import { notify } from "@utils/notify";

// ++Props
const props = defineProps({
  userSelect: {
    type: Object as PropType<User>,
    required: false,
  },
  openDialog: {
    type: Boolean,
    required: true,
  },
});

// ***************** Constants *****************
const userStore = useUser();
const dialogStatus = ref<boolean>(false);
const refDialog = ref<any>(null);

const loadingSubmit = ref<boolean>(false);

// ****************** Functions API *******************
const changeStatusUser = async (status: number) => {
  loadingSubmit.value = true;
  try {
    await changeStatusUserAPI(props.userSelect!.id, status);
    refDialog.value.hide();
    if (status == 1) {
      notify("success", "Usuario habilitado correctamente.");
    } else {
      notify("success", "Usuario deshabilitado correctamente.");
    }
    userStore.isLoadingTable = true;
    await userStore.getUsersStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogStatus.value = true;
  }
);
</script>

<style lang="scss" scoped>
.card-user {
  width: 300px;
  padding: 0 0.5rem;
}
.text-header {
  font-size: 1.1rem;
  font-weight: 300;
}

.btn-actions {
  display: flex;
  .q-btn {
    flex-grow: 1;
  }
}
</style>
