<template>
  <q-page v-if="!loadingPageState" class="container">
    <!-- //***************  HEADER **************** -->
    <div class="text-center">
      <span class="q-page-header">Perfil de Usuario</span>
    </div>
    <!-- //****************** FORM **************** -->
    <q-card flat bordered class="card-profile">
      <q-card-section>
        <q-form @submit="updateProfile" greedy no-error-focus>
          <div class="row q-col-gutter-x-lg">
            <!-- //++UserName++ -->
            <div class="col-5">
              <span class="q-label-input">Nombre de Usuario</span>
              <span class="text-red q-ml-xs">*</span>
              <q-input
                dense
                outlined
                v-model="usernameState"
                type="text"
                placeholder="Ingresar tu nombre de usuario"
                class="q-mt-xs"
                :class="{ 'error-back': usernameBackError }"
                :rules="usernameRequired"
                :no-error-icon="true"
                ref="refUsername"
                @blur="resetErrorfUsername()"
                :hide-bottom-space="
                  refUsername && refUsername.hasError ? false : true
                "
              />
              <span v-if="usernameBackError" class="q-label-error">
                {{ usernameBackError }}
              </span>
            </div>
            <!-- //++Name and LastName++ -->
            <div class="col-7">
              <span class="q-label-input">Nombres y Apellidos</span>
              <span class="text-red q-ml-xs">*</span>
              <q-input
                dense
                outlined
                v-model="fullnameState"
                type="text"
                placeholder="Ingresa tus nombres completos"
                class="q-mt-xs"
                :rules="fullnameRequired"
                :no-error-icon="true"
                ref="refFullName"
                @blur="resetErrorFullname()"
                :hide-bottom-space="
                  refFullName && refFullName.hasError ? false : true
                "
              />
            </div>
            <!-- //++Email++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Correo electrónico</span>
              <span class="text-red q-ml-xs">*</span>
              <q-input
                dense
                outlined
                v-model="emailState"
                type="text"
                class="q-mt-xs"
                :class="{ 'error-back': emailBackError }"
                :rules="emailRequired"
                :no-error-icon="true"
                ref="refEmail"
                @blur="resetErrorEmail()"
                :hide-bottom-space="
                  refEmail && refEmail.hasError ? false : true
                "
              />
              <span v-if="emailBackError" class="q-label-error">
                {{ emailBackError }}
              </span>
            </div>
            <!-- //++ Separator -->
            <div class="col-12 q-my-md">
              <q-separator />
            </div>
            <!-- //++ Current Password -->
            <div class="col-6">
              <span class="q-label-input">Contraseña Actual</span>
              <q-input
                dense
                outlined
                v-model="dataSend.password"
                :type="!showPassword ? 'password' : 'text'"
                placeholder="Ingresar tu contraseña actual"
                class="q-mt-xs"
                :class="{ 'error-back': passwordBackError }"
                :rules="dataSend.password ? currentPasswordVal : undefined"
                :no-error-icon="true"
                ref="refPassword"
                @blur="resetErrorPassword()"
                :hide-bottom-space="
                  refPassword && refPassword.hasError ? false : true
                "
              >
                <template v-slot:append>
                  <span @click="showPassword = !showPassword">
                    <q-icon
                      v-if="!showPassword"
                      name="fa-solid fa-eye"
                      size="1rem"
                      class="cursor-pointer"
                    />
                    <q-icon
                      v-if="showPassword"
                      name="fa-solid fa-eye-slash"
                      size="1rem"
                      class="cursor-pointer"
                    />
                  </span>
                </template>
              </q-input>
              <span v-if="passwordBackError" class="q-label-error">
                {{ passwordBackError }}
              </span>
            </div>
            <!-- //++ New Password -->
            <div class="col-6">
              <span class="q-label-input">Nueva Contraseña</span>
              <q-input
                dense
                outlined
                v-model="dataSend.new_password"
                :type="!showNewPassword ? 'password' : 'text'"
                placeholder="Ingresar tu nueva contraseña"
                class="q-mt-xs"
                :rules="dataSend.password ? newPasswordVal : undefined"
                :no-error-icon="true"
                ref="refNewPassword"
                @blur="resetErrorNewPassword()"
                :hide-bottom-space="
                  refNewPassword && refNewPassword.hasError ? false : true
                "
              >
                <template v-slot:append>
                  <span @click="showNewPassword = !showNewPassword">
                    <q-icon
                      v-if="!showNewPassword"
                      name="fa-solid fa-eye"
                      size="1rem"
                      class="cursor-pointer"
                    />
                    <q-icon
                      v-if="showNewPassword"
                      name="fa-solid fa-eye-slash"
                      size="1rem"
                      class="cursor-pointer"
                    />
                  </span>
                </template>
              </q-input>
            </div>
            <!-- //++ Button Actions ++ -->
            <div class="col-12 text-center q-mt-xl">
              <div class="q-gutter-md">
                <q-btn
                  no-caps
                  unelevated
                  color="grey-6"
                  label="Cancelar"
                  class="q-wp-150"
                  :ripple="false"
                  :to="{ name: 'Dashboard' }"
                />
                <q-btn
                  no-caps
                  unelevated
                  color="primary"
                  label="Actualizar"
                  class="q-wp-150"
                  type="submit"
                  :ripple="false"
                  :loading="loadingSubmit"
                >
                  <template v-slot:loading>
                    <q-spinner-bars size="20px" />
                  </template>
                </q-btn>
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
  <!-- ///*************** INNER LOADING ************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useProfile } from "@stores/Profile";
import {
  usernameRequired,
  fullnameRequired,
  emailRequired,
  currentPasswordVal,
  newPasswordVal,
} from "@utils/validation";
import { updateProfileAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { notify } from "@utils/notify";

//***************** Constants *****************
const router = useRouter();
const profileStore = useProfile();
const showPassword = ref<boolean>(false);
const showNewPassword = ref<boolean>(false);

const dataSend = reactive({
  username: "",
  fullname: "",
  email: "",
  password: "",
  new_password: "",
});

// ++Ref
const refUsername = ref<any>(null);
const refFullName = ref<any>(null);
const refEmail = ref<any>(null);
const refPassword = ref<any>(null);
const refNewPassword = ref<any>(null);

const loadingSubmit = ref<boolean>(false);
const usernameBackError = ref<string>("");
const emailBackError = ref<string>("");
const passwordBackError = ref<string>("");

//************* Functions Template *************
const resetErrorfUsername = () => {
  refUsername.value.resetValidation();
};

const resetErrorEmail = () => {
  refEmail.value.resetValidation();
};

const resetErrorFullname = () => {
  refFullName.value.resetValidation();
};

const resetErrorPassword = () => {
  if (!dataSend.password) {
    refPassword.value.resetValidation();
  }
};

const resetErrorNewPassword = () => {
  if (!dataSend.new_password) {
    refNewPassword.value.resetValidation();
  }
};

//************* Functions Computed *************
const profileState = computed(() => profileStore.profile);
const loadingPageState = computed(() => profileStore.isLoadingPage);

// ++ Fields State
const usernameState = computed({
  get() {
    return dataSend.username ? dataSend.username : profileState.value.username;
  },
  set(value: any) {
    dataSend.username = value;
  },
});

const fullnameState = computed({
  get() {
    return dataSend.fullname ? dataSend.fullname : profileState.value.name;
  },
  set(value: string) {
    dataSend.fullname = value;
  },
});

const emailState = computed({
  get() {
    return dataSend.email ? dataSend.email : profileState.value.email;
  },
  set(value: any) {
    dataSend.email = value;
  },
});

//**************** Functions API ****************
const updateProfile = async () => {
  loadingSubmit.value = true;
  try {
    if (dataSend.password) {
      await updateProfileAPI({
        name: dataSend.fullname ? dataSend.fullname : fullnameState.value,
        username: dataSend.username ? dataSend.username : usernameState.value,
        email: dataSend.email ? dataSend.email : emailState.value,
        password: dataSend.password,
        new_password: dataSend.new_password,
      });
    } else {
      await updateProfileAPI({
        name: dataSend.fullname ? dataSend.fullname : fullnameState.value,
        username: dataSend.username ? dataSend.username : usernameState.value,
        email: dataSend.email ? dataSend.email : emailState.value,
      });
    }
    notify("success", "Perfil actualizado correctamente.");
    router.push({ name: "Dashboard" });
  } catch (error) {
    if (error instanceof AxiosError) {
      let emailError = error.response?.data.errors.email;
      let usernameError = error.response?.data.errors.username;
      let passwordError = error.response?.data.errors.password;
      // ++Username Unique
      if (usernameError) {
        if (usernameError[0] == 1001) {
          usernameBackError.value = "Este nombre de usuario ya está registrado";
        }
      }
      // ++Email Unique
      if (emailError) {
        if (emailError[0] == 1002) {
          emailBackError.value = "Este email ya esta registrado";
        }
      }
      // ++Password not match
      if (passwordError) {
        if (passwordError.code == 1004) {
          passwordBackError.value = "La contraseña actual es incorrecta. ";
        }
      }
      // console.log(error.response?.data.errors);
    }
  } finally {
    loadingSubmit.value = false;
  }
};
</script>

<style lang="scss" scoped>
.card-profile {
  margin-top: 1rem;
  padding: 1rem 2rem;
}
</style>
