<template>
  <q-page v-if="!loadingPageState" padding>
    <!-- //************** Header ************** -->
    <div class="q-mb-md">
      <div class="container-link q-mb-md">
        <router-link :to="{ name: 'ActivityPage' }">
          <q-icon
            name="fa-solid fa-chevron-left"
            size="0.7rem"
            class="q-mr-xs"
          />
          <span> Regresar </span>
        </router-link>
      </div>
      <div class="text-center">
        <span v-if="!activityState.id" class="q-page-header">
          Añadir una Actividad
        </span>
        <span v-else class="q-page-header"> Actualizar Actividad </span>
      </div>
    </div>
    <!-- //***************** FORM ***************** -->
    {{ descriptionState }}
    <q-card flat bordered class="card-article">
      <q-card-section>
        <q-form @submit="onSubmitActivity" greedy no-error-focus>
          <div class="row q-col-gutter-x-lg">
            <!-- //++Title++ -->
            <div class="col-12">
              <span class="q-label-input">Título</span>
              <span class="text-red">*</span>
              <q-input
                dense
                outlined
                v-model="titleState"
                type="text"
                placeholder="Ingresar el título"
                class="q-mt-xs"
                :rules="titleActivityVal"
                :no-error-icon="true"
                ref="refTitle"
                @blur="!dataSend.title ? resetErrorTitle() : ''"
                :hide-bottom-space="
                  refTitle && refTitle.hasError ? false : true
                "
              />
            </div>
            <!-- //++Autor++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Autor</span>
              <span class="q-ml-xs" style="font-size: 0.8rem">(opcional)</span>
              <q-input
                outlined
                autogrow
                dense
                rows="2"
                v-model="autorState"
                type="textarea"
                placeholder="Ingresar el nombre del autor"
                class="q-mt-xs"
              />
            </div>
            <!-- //++ Upload Image ++ -->
            <div class="col-12">
              <UploadImage @emitImageUpload="getEmitImageUpload" />
            </div>
            <!-- //++Editor++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Cuerpo de la publicación</span>
              <span class="text-red">*</span>
              <q-editor
                v-model="descriptionState"
                class="q-mt-xs"
                @update:model-value="updateDescription"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify'],
                    },
                    {
                      label: $q.lang.editor.fontSize,
                      icon: $q.iconSet.editor.fontSize,
                      fixedLabel: true,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7',
                      ],
                    },
                    {
                      label: $q.lang.editor.formatting,
                      icon: $q.iconSet.editor.formatting,
                      list: 'no-icons',
                      options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code',
                      ],
                    },
                  ],
                  ['bold', 'italic', 'strike', 'underline'],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                  ['viewsource'],
                ]"
              />
              <!-- //--Description Verify-- -->
              <q-input
                dense
                outlined
                v-model="dataSend.description_verify"
                type="text"
                placeholder="Ingresar el título"
                class="q-mt-xs hidden"
                :rules="descRequired"
                ref="refDescription"
              />
              <span
                v-if="refDescription && refDescription.hasError"
                class="q-label-error"
              >
                Por favor, ingrese una descripción para la publicación.
              </span>
            </div>
            <!-- //++Buttons Actions++ -->
            <div class="col-12 q-mt-md flex justify-center">
              <q-btn
                no-caps
                unelevated
                :ripple="false"
                color="primary"
                :label="
                  !activityState.id
                    ? 'Agregar actividad'
                    : 'Actualizar actividad'
                "
                type="submit"
                :loading="loadingSubmit"
              >
                <template v-slot:loading>
                  <q-spinner-bars size="20px" />
                </template>
              </q-btn>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
  <!-- //**************** INNER LOADING *************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { useQuasar } from "quasar";
import { useActivity } from "@stores/Activity";
import {
  createActivityAPI,
  updateActivityAPI,
  uploadImageAPI,
} from "@services/api_rest";
import { titleActivityVal, descRequired } from "@utils/validation";
import { AxiosError } from "axios";
import { notify } from "@utils/notify";
import { useRouter, useRoute } from "vue-router";

// ++Components
import UploadImage from "./components/UploadImage.vue";

// ********************* Constants ********************+
const $q = useQuasar();
const router = useRouter();
const route = useRoute();
const activityStore = useActivity();
const loadingSubmit = ref<boolean>(false);

const dataSend = reactive({
  title: "",
  autor: "",
  description: "",
  image: "",
  description_verify: "",
});

// ++Refs
const refTitle = ref<any>(null);
const refDescription = ref<any>(null);

//************* Functions Template *************
// ++ Errors
const resetErrorTitle = () => {
  refTitle.value.resetValidation();
};

// ++Emits
const getEmitImageUpload = (value: any) => {
  dataSend.image = value;
  console.log(value);
};

// ++Update
const updateDescription = (value: any) => {
  dataSend.description_verify = value;
};

//************* Functions Computed *************
const activityState = computed(() => activityStore.activity);
const loadingPageState = computed(() => activityStore.isLoadingPageSingle);

const titleState = computed({
  get() {
    return dataSend.title
      ? dataSend.title
      : activityState.value
      ? activityState.value.title
      : "";
  },
  set(value: any) {
    dataSend.title = value;
  },
});

const autorState = computed({
  get() {
    return dataSend.autor
      ? dataSend.autor
      : activityState.value
      ? activityState.value.autor
      : "";
  },
  set(value: any) {
    dataSend.autor = value;
  },
});

const descriptionState = computed({
  get() {
    return dataSend.description
      ? dataSend.description
      : activityState.value
      ? activityState.value.description
      : "";
  },
  set(value: any) {
    dataSend.description = value;
  },
});

//**************** Functions API ****************
// ++ Save Create Article
const saveCreateActivity = async (id_image: number) => {
  loadingSubmit.value = true;
  try {
    await createActivityAPI({
      title: dataSend.title,
      autor: dataSend.autor,
      storage_id: id_image,
      description: dataSend.description,
    });
    notify("success", "Actividad creada correctamente.");
    router.push({ name: "ActivityPage" });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

// ++ Save Updated Article
const saveUpdateArticle = async (id_image?: number) => {
  loadingSubmit.value = true;
  try {
    await updateActivityAPI(activityState.value.id, {
      title: dataSend.title ? dataSend.title : activityState.value.title,
      autor: dataSend.autor ? dataSend.autor : activityState.value.autor,
      storage_id: id_image ? id_image : activityState.value.id_img,
      description: dataSend.description
        ? dataSend.description
        : activityState.value.description,
    });
    notify("success", "Actividad actualizado correctamente.");
    router.push({ name: "ActivityPage" });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

// ++ Create
const createActivity = async () => {
  // --Get ID Image
  const formdata = new FormData();
  formdata.append("path", dataSend.image);
  try {
    const {
      data: { id_image },
    } = await uploadImageAPI(formdata);
    // -- Create Activity
    await saveCreateActivity(id_image);
    console.log(id_image);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};

// ++ Update
const updateActivity = async () => {
  // --Get ID Image
  const formdata = new FormData();
  formdata.append("path", dataSend.image);
  try {
    const {
      data: { id_image },
    } = await uploadImageAPI(formdata);
    // -- Create Activity
    await saveUpdateArticle(id_image);
    console.log(id_image);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};

const onSubmitActivity = async () => {
  if (!activityState.value.id) {
    createActivity();
  } else {
    if (dataSend.image) {
      updateActivity();
    } else {
      saveUpdateArticle();
    }
  }
};

//************* Functions LifeCycle *************
onMounted(async () => {
  if (route.params.id) {
    await activityStore.getActivityStore(Number(route.params.id));
    dataSend.description_verify = activityState.value.description;
  } else {
    activityStore.isLoadingPageSingle = false;
  }
});

onUnmounted(() => {
  activityStore.cleanActivityStore();
  activityStore.isLoadingPageSingle = true;
});
</script>

<style lang="scss" scoped>
.container-link {
  a {
    color: $primary !important;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
  }
}
</style>
