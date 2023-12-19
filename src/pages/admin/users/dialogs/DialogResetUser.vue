<template>
  <q-dialog v-model="dialogReset" persistent ref="refDialog">
    <q-card class="card-user">
      <q-card-section>
        <div class="flex column justify-center items-center">
          <q-icon
            name="fa-solid fa-circle-exclamation"
            color="grey-4"
            size="2.5rem"
            class="q-mb-md"
          />
          <span>
            La contraseña del usuario {{ userSelect?.username }} será reseteado
            a "123456".
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
            no-caps
            unelevated
            color="positive"
            label="Resetear"
            size="0.9rem"
            @click="resetUser()"
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
import { resetUserAPI } from "@services/api_rest";
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
const dialogReset = ref<boolean>(false);
const refDialog = ref<any>(null);

const loadingSubmit = ref<boolean>(false);

// ****************** Functions API *******************
const resetUser = async () => {
  loadingSubmit.value = true;
  try {
    await resetUserAPI(props.userSelect!.id);
    loadingSubmit.value = false;
    refDialog.value.hide();
    notify("success", "La contrasela fue reseteado correctamente.");
    userStore.isLoadingTable = true;
    await userStore.getUsersStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogReset.value = true;
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
