<template>
  <q-dialog v-model="dialogUser" persistent ref="refDialog">
    <q-card class="card-user">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span v-if="!userState.id" class="text-header">
            Agregar un nuevo usuario
          </span>
          <span v-else class="text-header">Actualizar un usuario</span>
          <q-icon
            name="fa-solid fa-xmark"
            class="cursor-pointer"
            size="1rem"
            v-close-popup
          />
        </div>
      </q-card-section>
      <q-form @submit.prevent.stop="onSubmitUser" greedy no-error-focus>
        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-12">
              <span class="q-label-input">Nombre de usuario</span>
              <q-input
                dense
                outlined
                v-model="usernameState"
                type="text"
                maxlength="15"
                placeholder="Ingresa tu nombre de usuario"
                class="q-mt-xs"
                :class="{ 'error-back': usernameCodeError }"
                :rules="usernameRequired"
                :no-error-icon="true"
                ref="refUsername"
                @blur="resetErrorUsername()"
                :hide-bottom-space="
                  refUsername && refUsername.hasError ? false : true
                "
              />
              <span v-if="usernameCodeError" class="q-label-error">
                {{ usernameCodeError }}
              </span>
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Nombres Completos</span>
              <q-input
                dense
                outlined
                v-model="fullnameState"
                type="text"
                placeholder="Ingresa tu nombres completos"
                class="q-mt-xs"
                :rules="fullnameRequired"
                :no-error-icon="true"
                ref="refFullname"
                @blur="resetErrorFullname()"
                :hide-bottom-space="
                  refFullname && refFullname.hasError ? false : true
                "
              />
            </div>
            <div class="col-12 q-mt-sm">
              <span class="q-label-input">Correo electrónico</span>
              <q-input
                dense
                outlined
                v-model="emailState"
                type="email"
                placeholder="Ingresa tu nombre de usuario"
                class="q-mt-xs"
                :class="{ 'error-back': emailCodeError }"
                :rules="emailRequired"
                :no-error-icon="true"
                ref="refEmail"
                @blur="resetErrorEmail()"
                :hide-bottom-space="
                  refEmail && refEmail.hasError ? false : true
                "
              />
              <span v-if="emailCodeError" class="q-label-error">
                {{ emailCodeError }}
              </span>
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
                  :label="!userState.id ? 'Agregar' : 'Actualizar'"
                  type="submit"
                  :loading="loadingSubmit"
                >
                  <template v-slot:loading>
                    <q-spinner-bars size="20px" />
                  </template>
                </q-btn>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { createUserAPI, updateUserAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { useUser } from "@stores/User";
import { notify } from "@utils/notify";
import {
  usernameRequired,
  fullnameRequired,
  emailRequired,
} from "@utils/validation";

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

// ++ Refs
const refUsername = ref<any>(null);
const refFullname = ref<any>(null);
const refEmail = ref<any>(null);

const loadingSubmit = ref<boolean>(false);

// ++Errors
const usernameCodeError = ref<string>("");
const emailCodeError = ref<string>("");

//************* Functions Template *************
const resetErrorUsername = () => {
  refUsername.value.resetValidation();
};

const resetErrorFullname = () => {
  refFullname.value.resetValidation();
};

const resetErrorEmail = () => {
  refEmail.value.resetValidation();
};

//************* Functions Computed *************
const userState = computed(() => userStore.user);

const usernameState = computed({
  get() {
    return dataSend.username ? dataSend.username : userState.value.username;
  },
  set(value: any) {
    dataSend.username = value;
  },
});

const fullnameState = computed({
  get() {
    return dataSend.fullname ? dataSend.fullname : userState.value.name;
  },
  set(value: any) {
    dataSend.fullname = value;
  },
});

const emailState = computed({
  get() {
    return dataSend.email ? dataSend.email : userState.value.email;
  },
  set(value: any) {
    dataSend.email = value;
  },
});

// ****************** Functions API *******************

const createUser = async () => {
  loadingSubmit.value = true;
  try {
    await createUserAPI({
      name: dataSend.fullname,
      username: dataSend.username,
      email: dataSend.email,
    });
    loadingSubmit.value = false;
    refDialog.value.hide();
    notify("success", "Usuario creado correctamente.");
    userStore.isLoadingTable = true;
    await userStore.getUsersStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      let emailError = error.response?.data.errors.email;
      let usernameError = error.response?.data.errors.username;
      // ++Username Unique
      if (usernameError) {
        if (usernameError[0] == 1001) {
          usernameCodeError.value = "Este usuario ya está registrado";
        }
      }
      // ++Email Unique
      if (emailError) {
        if (emailError[0] == 1002) {
          emailCodeError.value = "Este email ya esta registrado";
        }
      }
    }
  }
};

const updateUser = async () => {
  loadingSubmit.value = true;
  try {
    await updateUserAPI(userState.value.id, {
      name: dataSend.fullname ? dataSend.fullname : userState.value.name,
      username: dataSend.username
        ? dataSend.username
        : userState.value.username,
      email: dataSend.email ? dataSend.email : userState.value.email,
    });
    loadingSubmit.value = false;
    refDialog.value.hide();
    notify("success", "Usuario actualizado correctamente.");
    userStore.isLoadingTable = true;
    await userStore.getUsersStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      let emailError = error.response?.data.errors.email;
      let usernameError = error.response?.data.errors.username;
      // ++Username Unique
      if (usernameError) {
        if (usernameError[0] == 1001) {
          usernameCodeError.value = "Este usuario ya está registrado";
        }
      }
      // ++Email Unique
      if (emailError) {
        if (emailError[0] == 1002) {
          emailCodeError.value = "Este email ya esta registrado";
        }
      }
    }
  }
};

const onSubmitUser = async () => {
  if (!userState.value.id) {
    createUser();
  } else {
    updateUser();
  }
};

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogUser.value = true;
  }
);

watch(dialogUser, () => {
  if (!dialogUser.value) {
    userStore.clearUserStore();
    (dataSend.email = ""), (dataSend.fullname = ""), (dataSend.username = "");
    usernameCodeError.value = "";
    emailCodeError.value = "";
  }
});
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
