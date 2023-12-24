<template>
  <q-page v-if="!loadingPageState" padding>
    <!-- //************** Header ************** -->
    <div class="q-mb-md">
      <div class="container-link q-mb-md">
        <router-link :to="{ name: 'PublicationPage' }">
          <q-icon
            name="fa-solid fa-chevron-left"
            size="0.7rem"
            class="q-mr-xs"
          />
          <span> Regresar </span>
        </router-link>
      </div>
      <div class="text-center">
        <span v-if="!articleState.id" class="q-page-header">
          Añadir una Publicación
        </span>
        <span v-else class="q-page-header"> Actualizar Publicación </span>
      </div>
    </div>
    <q-card flat bordered class="card-article">
      <q-card-section>
        <q-form @submit="onSubmitSection" greedy no-error-focus>
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
                :rules="titleArticleVal"
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
            <!-- //++ Category ++ -->
            <div class="col-12 col-md-6 q-mt-md">
              <span class="q-label-input">Categoria</span>
              <span class="text-red">*</span>
              <q-select
                dense
                outlined
                class="q-mt-xs"
                v-model="categoryState"
                :options="categoriesState"
                behavior="menu"
                popup-content-class="popup-category"
                :rules="selectCategoryVal"
                :no-error-icon="true"
                ref="refSelectCat"
                @blur="!categoryState ? resetErrorCat() : ''"
                :hide-bottom-space="
                  refSelectCat && refSelectCat.hasError ? false : true
                "
                @update:model-value="updateCategory"
              >
                <!-- //++ Selected -->
                <template v-slot:selected>
                  <span v-if="!categoryState" class="text-grey-6">
                    Selecionar la categoria
                  </span>
                  <span v-else>{{ categoryState.name }}</span>
                </template>
                <!-- //++ Options -->
                <template v-slot:option="{ itemProps, opt }">
                  <q-item dense v-bind="itemProps">
                    <q-item-section>
                      <q-item-label>{{ opt.name }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <!-- //++ Route Publication ++ -->
            <div class="col-12 col-md-6 q-mt-md">
              <span class="q-label-input">Ruta de la publicación</span>
              <span class="text-red">*</span>
              <q-input
                dense
                outlined
                v-model="routeState"
                type="text"
                placeholder="Ingresar una ruta sin espacios"
                class="q-mt-xs"
                :rules="routeValidation"
                :no-error-icon="true"
                ref="refRoute"
                @blur="!routeState ? resetErrorRoute() : ''"
                :hide-bottom-space="
                  refRoute && refRoute.hasError ? false : true
                "
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
                ]"
              />
              <span v-if="descBackError" class="q-label-error">
                {{ descBackError }}
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
                  !articleState.id
                    ? 'Agregar publicación'
                    : 'Actualizar publicación'
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
import { useCategory } from "@stores/Category";
import { useArticle } from "@stores/Article";
import { Category } from "@interfaces/interface-store";
import { createArticleAPI, updateArticleAPI } from "@services/api_rest";
import {
  selectCategoryVal,
  titleArticleVal,
  routeValidation,
} from "@utils/validation";
import { AxiosError } from "axios";
import { notify } from "@utils/notify";
import { useRouter, useRoute } from "vue-router";

// ++Components
import UploadImage from "./components/UploadImage.vue";

// ********************* Constants ********************+
const $q = useQuasar();
const router = useRouter();
const route = useRoute();
const categoryStore = useCategory();
const articleStore = useArticle();
const loadingSubmit = ref<boolean>(false);

const dataSend = reactive({
  title: "",
  autor: "",
  description: "",
  route: "",
  image: "",
  description_verify: "",
  category_id: "",
});

const descBackError = ref<string>("");

const selectCategory = ref<Category>();

// ++Refs
const refSelectCat = ref<any>(null);
const refRoute = ref<any>(null);
const refTitle = ref<any>(null);

//************* Functions Template *************
// ++ Errors
const resetErrorCat = () => {
  refSelectCat.value.resetValidation();
};

const resetErrorRoute = () => {
  refRoute.value.resetValidation();
};

const resetErrorTitle = () => {
  refTitle.value.resetValidation();
};

const updateCategory = (cat: Category) => {
  dataSend.category_id = String(cat.id);
};

// ++Emits
const getEmitImageUpload = (value: any) => {
  dataSend.image = value;
  console.log(value);
};

//************* Functions Computed *************
const categoriesState = computed(() => categoryStore.categories);
const articleState = computed(() => articleStore.article);
const loadingPageState = computed(() => articleStore.isLoadingPage);

const titleState = computed({
  get() {
    return articleState.value.title
      ? articleState.value.title
      : dataSend.title
      ? dataSend.title
      : "";
  },
  set(value: any) {
    dataSend.title = value;
  },
});

const autorState = computed({
  get() {
    return articleState.value.autor
      ? articleState.value.autor
      : dataSend.autor
      ? dataSend.autor
      : "";
  },
  set(value: any) {
    dataSend.autor = value;
  },
});

const categoryState = computed({
  get() {
    return selectCategory.value
      ? selectCategory.value
      : categoriesState.value.find(
          (cat: Category) => cat.id == articleState.value.category_id
        );
  },
  set(value: any) {
    selectCategory.value = value;
  },
});

const routeState = computed({
  get() {
    return articleState.value.route
      ? articleState.value.route
      : dataSend.route
      ? dataSend.route
      : "";
  },
  set(value: any) {
    dataSend.route = value;
  },
});

const descriptionState = computed({
  get() {
    return dataSend.description
      ? dataSend.description
      : articleState.value.description
      ? articleState.value.description
      : "";
  },
  set(value: any) {
    dataSend.description = value;
  },
});

//**************** Functions API ****************
// ++ Create Article
const createArticle = async () => {
  const formdata = new FormData();
  formdata.append("image", dataSend.image);
  formdata.append("title", dataSend.title);
  formdata.append("autor", dataSend.autor);
  formdata.append("route", dataSend.route);
  formdata.append("description", dataSend.description);
  formdata.append("category_id", dataSend.category_id);

  loadingSubmit.value = true;
  try {
    await createArticleAPI(formdata);
    notify("success", "Articulo creado correctamente.");
    router.push({ name: "PublicationPage" });
  } catch (error) {
    if (error instanceof AxiosError) {
      let descriptionError = error.response?.data.errors.description;
      if (descriptionError) {
        if (descriptionError[0] == 1005) {
          descBackError.value =
            "Por favor ingrese el cuerpo de la publicación.";
        }
      }
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

// ++ Updated Article
const updateArticle = async () => {
  loadingSubmit.value = true;
  try {
    await updateArticleAPI(articleState.value.id, {
      title: dataSend.title ? dataSend.title : articleState.value.title,
      autor: dataSend.autor ? dataSend.autor : articleState.value.autor,
      route: dataSend.route ? dataSend.route : articleState.value.route,
      description: dataSend.description
        ? dataSend.description
        : articleState.value.description,
      category_id: dataSend.category_id
        ? Number(dataSend.category_id)
        : articleState.value.category_id,
    });
    notify("success", "Articulo actualizado correctamente.");
    router.push({ name: "PublicationPage" });
  } catch (error) {
    if (error instanceof AxiosError) {
      let descriptionError = error.response?.data.errors.description;
      if (descriptionError) {
        if (descriptionError[0] == 1005) {
          descBackError.value =
            "Por favor ingrese el cuerpo de la publicación.";
        }
      }
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

const onSubmitSection = async () => {
  if (!articleState.value.id) {
    createArticle();
  } else {
    updateArticle();
  }
};

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore();

  if (route.params.id) {
    await articleStore.getArticleStore(Number(route.params.id));
  } else {
    articleStore.isLoadingPage = false;
  }
});

onUnmounted(() => {
  articleStore.cleanArticleStore();
  articleStore.isLoadingPage = true;
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
