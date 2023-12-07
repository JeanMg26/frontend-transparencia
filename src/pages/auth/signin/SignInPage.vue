<template>
  <q-page class="container">
    <div class="container-signin">
      <!-- //************* Title **************** -->
      <div class="q-mb-sm">
        <span class="text-h6">Iniciar Sesión</span>
      </div>
      <!-- //*************** Form Singin *************** -->
      <q-card flat bordered class="card-sigin">
        <q-card-section>
          <q-form @submit="onSignIn" greedy>
            <!-- //++ Username ++ -->
            <div class="form-group">
              <span class="q-label-input">Nombre de usuario</span>
              <q-input
                dense
                outlined
                v-model="dataSignin.username"
                type="text"
                class="q-mt-xs"
                placeholder="Ingresar su bombre de usuario"
                :class="{ 'error-back': errorBackUsername }"
                :rules="usernameRequired"
                :no-error-icon="true"
                ref="refUsername"
                @blur="resetErrorEmail()"
                :hide-bottom-space="
                  refUsername && refUsername.hasError ? false : true
                "
              />
              <!-- //-- ErrorBack -- -->
              <span v-if="errorBackUsername" class="q-label-error">
                {{ errorBackUsername }}
              </span>
            </div>
            <!-- //++ Contraseña ++ -->
            <div class="form-group q-mt-md">
              <span class="q-label-input">Contraseña</span>
              <q-input
                dense
                outlined
                v-model="dataSignin.password"
                :type="showPassword ? 'password' : 'text'"
                class="q-mt-xs"
                placeholder="Ingresar tu contraseña"
                :rules="passwordRequired"
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
                      v-if="showPassword"
                      name="fa-solid fa-eye"
                      size="1rem"
                      class="cursor-pointer"
                    />
                    <q-icon
                      v-if="!showPassword"
                      name="fa-solid fa-eye-slash"
                      size="1rem"
                      class="cursor-pointer"
                    />
                  </span>
                </template>
              </q-input>
            </div>
            <!-- //++Button++ -->
            <div>
              <q-btn
                no-caps
                unelevated
                :ripple="false"
                color="primary"
                label="Ingresar"
                type="submit"
                class="full-width q-mt-lg"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { LocalStorage } from "quasar";
import { reactive, ref } from "vue";
import { usernameRequired, passwordRequired } from "@utils/validation";
import { useRouter } from "vue-router";
import { signInAPI } from "@services/api_rest";
import { AxiosError } from "axios";

// ***************** Constants ***************
const router = useRouter();

const dataSignin = reactive({
  username: "",
  password: "",
});

const errorBackUsername = ref<string>("");

const showPassword = ref<boolean>(false);

// ++Refs
const refUsername = ref<any>(null);
const refPassword = ref<any>(null);

// ********************* Functions Template +++++++++++++++++
const resetErrorEmail = () => {
  errorBackUsername.value = "";
  refUsername.value.resetValidation();
};

const resetErrorPassword = () => {
  refPassword.value.resetValidation();
};

// ************************ Functions API *******************
const onSignIn = async () => {
  try {
    const { data } = await signInAPI({
      username: dataSignin.username,
      password: dataSignin.password,
    });
    LocalStorage.set("jwt_access", data.jwt);
    router.push({ name: "Dashboard" });
    console.log(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        switch (error.response?.data.code) {
          case 1000:
            errorBackUsername.value =
              "El usuario o contraseña son incorrectos.";
            break;
          default:
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container-signin {
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .card-sigin {
    width: 400px;
  }
}
</style>
