<template>
  <q-page class="container">
    <!-- //***************  HEADER **************** -->
    <div class="text-center">
      <span class="q-page-header">Perfil de Usuario</span>
    </div>
    <!-- //****************** FORM **************** -->
    <q-card flat bordered class="card-profile">
      <q-card-section>
        <q-form @submit="onSubmitProfile" greedy>
          <div class="row q-col-gutter-x-lg">
            <!-- //++UserName++ -->
            <div class="col-5">
              <span class="q-label-input">Nombre de Usuario</span>
              <span class="text-red q-ml-xs">*</span>
              <q-input
                dense
                outlined
                v-model="dataSend.username"
                type="text"
                placeholder="Ingresar tu nombre de usuario"
                class="q-mt-xs"
                :rules="usernameRequired"
                :no-error-icon="true"
                ref="refUsername"
                @blur="!enableSubmit ? resetErrorfUsername() : ''"
                :hide-bottom-space="
                  refUsername && refUsername.hasError ? false : true
                "
                @click="enableSubmit = false"
              />
            </div>
            <!-- //++Name and LastName++ -->
            <div class="col-7">
              <span class="q-label-input">Nombres y Apellidos</span>
              <span class="text-red q-ml-xs">*</span>
              <q-input
                dense
                outlined
                v-model="dataSend.fullname"
                type="text"
                placeholder="Ingresa tus nombres completos"
                class="q-mt-xs"
                :rules="fullnameRequired"
                :no-error-icon="true"
                ref="refFullName"
                @blur="!enableSubmit ? resetErrorFullname() : ''"
                :hide-bottom-space="
                  refFullName && refFullName.hasError ? false : true
                "
                @click="enableSubmit = false"
              />
            </div>
            <!-- //++Email++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Correo electrónico</span>
              <q-input
                dense
                outlined
                v-model="dataSend.email"
                type="text"
                placeholder="JOSE LUIS LEON OSORES"
                class="q-mt-xs"
                disable
              />
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
                type="text"
                placeholder="Ingresar tu contraseña actual"
                class="q-mt-xs"
                :rules="dataSend.password ? currentPasswordVal : undefined"
                :no-error-icon="true"
                ref="refPassword"
                @blur="resetErrorPassword()"
                :hide-bottom-space="
                  refPassword && refPassword.hasError ? false : true
                "
              />
            </div>
            <!-- //++ New Password -->
            <div class="col-6">
              <span class="q-label-input">Nueva Contraseña</span>
              <q-input
                dense
                outlined
                v-model="dataSend.new_password"
                type="text"
                placeholder="Ingresar tu nueva contraseña"
                class="q-mt-xs"
                :rules="
                  dataSend.password
                    ? newPasswordVal(dataSend.password)
                    : undefined
                "
                :no-error-icon="true"
                ref="refPassword"
                @blur="resetErrorNewPassword()"
                :hide-bottom-space="
                  refPassword && refPassword.hasError ? false : true
                "
              />
            </div>
            <!-- //++ Button Actions ++ -->
            <div class="col-12 text-center q-mt-lg">
              <div class="q-gutter-md">
                <q-btn
                  no-caps
                  unelevated
                  color="grey-6"
                  label="Cancelar"
                  class="q-wp-150"
                  :to="{ name: 'Dashboard' }"
                />
                <q-btn
                  no-caps
                  unelevated
                  color="primary"
                  label="Actualizar"
                  class="q-wp-150"
                  type="submit"
                  @click="enableSubmit = true"
                />
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import {
  usernameRequired,
  fullnameRequired,
  currentPasswordVal,
  newPasswordVal,
} from "@utils/validation";

//***************** Constants *****************
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
const refPassword = ref<any>(null);
const refNewPassword = ref<any>(null);
const enableSubmit = ref<boolean>(false);

//************* Functions Template *************
const resetErrorfUsername = () => {
  refUsername.value.resetValidation();
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

//**************** Functions API ****************
const onSubmitProfile = async () => {
  console.log("xx");
};
</script>

<style lang="scss" scoped>
.card-profile {
  margin-top: 1rem;
  padding: 1rem 2rem;
}
</style>
