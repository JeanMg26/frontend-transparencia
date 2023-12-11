<template>
  <q-page padding>
    <!-- //************** Header ************** -->
    <div class="q-mb-md">
      <div class="container-link q-mb-md">
        <router-link :to="{ name: 'ListArticlePage' }">
          <q-icon
            name="fa-solid fa-chevron-left"
            size="0.7rem"
            class="q-mr-xs"
          />
          <span> Regresar </span>
        </router-link>
      </div>
      <span class="text-h6"> Añadir una publicación </span>
    </div>
    <q-card flat bordered class="card-article">
      <q-card-section>
        <q-form @submit="onSubmitSection" greedy no-error-focus>
          <div class="row q-col-gutter-x-lg">
            <!-- //++Title++ -->
            <div class="col-12">
              <span class="q-label-input">Título</span>
              <q-input
                dense
                outlined
                v-model="dataSend.title"
                type="text"
                placeholder="Ingresar el título"
                class="q-mt-xs"
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
                v-model="dataSend.autor"
                type="textarea"
                placeholder="Ingresar el nombre del autor"
                class="q-mt-xs"
              />
            </div>
            <!-- //++ Category and Subcategory ++ -->
            <div class="col-6 q-mt-md">
              <span class="q-label-input">Categoria</span>
              <q-select
                dense
                outlined
                class="q-mt-xs"
                v-model="selectCategory"
                :options="categoriesState"
                behavior="menu"
                popup-content-class="popup-category"
                :rules="selectCategoryVal"
                :no-error-icon="true"
                ref="refSelectCat"
                @blur="!selectCategory ? resetErrorCat() : ''"
                :hide-bottom-space="
                  refSelectCat && refSelectCat.hasError ? false : true
                "
                @update:model-value="updateCategory"
              >
                <!-- //++ Selected -->
                <template v-slot:selected>
                  <span v-if="!selectCategory" class="text-grey-6">
                    Selecionar la categoria
                  </span>
                  <span v-else>{{ selectCategory.name }}</span>
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
            <!-- //++ Subcategory ++ -->
            <div class="col-6 q-mt-md">
              <span class="q-label-input">SubCategoria</span>
            </div>
            <!-- //++Editor++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Cuerpo de la publicación</span>
              <q-editor
                v-model="dataSend.body"
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
                  ],
                  ['bold', 'italic', 'strike', 'underline'],
                  ['upload', 'save'],
                ]"
              />
            </div>
            <!-- //++Buttons Actions++ -->
            <div class="col-12 q-mt-md flex justify-center">
              <q-btn
                no-caps
                unelevated
                color="primary"
                label="Agregar publicación"
                type="submit"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useQuasar } from "quasar";
import { useCategory } from "@stores/Category";
import { Category } from "@interfaces/interface-store";
import { selectCategoryVal } from "@utils/validation";

// ********************* Constants ********************+
const $q = useQuasar();
const categoryStore = useCategory();

const dataSend = reactive({
  title: "",
  autor: "",
  body: "",
});

const selectCategory = ref<Category>();

// ++Refs
const refSelectCat = ref<any>(null);

//************* Functions Template *************
const onSubmitSection = async () => {
  console.log(dataSend.body);
};

// ++ Errors
const resetErrorCat = () => {
  refSelectCat.value.resetValidation();
};

// ++ Update Value Select ID
const updateCategory = (value: Category) => {
  // dataSend.category_id = String(value.id);
};

//************* Functions Computed *************
const categoriesState = computed(() => categoryStore.categories);

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore();
});
</script>

<style lang="scss" scoped>
.container-link {
  a {
    color: $primary !important;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
  }
}
</style>
