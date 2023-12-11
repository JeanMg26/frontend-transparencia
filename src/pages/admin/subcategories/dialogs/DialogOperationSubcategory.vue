<template>
  <q-dialog v-model="dialogOperation" persistent ref="refDialog">
    <q-card class="card-add-category">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span class="q-dialog-header">Agregar una subcategoria</span>
          <q-icon
            name="fa-solid fa-xmark"
            size="1.1rem"
            class="cursor-pointer"
            v-close-popup
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="submitCategory" greedy no-error-focus>
          <div class="row">
            <!-- //++ Suncategory ++ -->
            <div class="col-12">
              <span class="q-label-input">Selecciona la categoria</span>
              <q-select
                dense
                outlined
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
            <!-- //++ Name ++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Nombre de la subcategoria</span>
              <q-input
                dense
                outlined
                v-model="dataSend.name"
                type="text"
                class="q-mt-xs"
                placeholder="Ingresar un nombre"
                maxlength="30"
                :rules="nameSubcategoryVal"
                :no-error-icon="true"
                ref="refNameSubcat"
                @blur="!dataSend.name ? resetErrorNameSubcat() : ''"
                :hide-bottom-space="
                  refNameSubcat && refNameSubcat.hasError ? false : true
                "
              />
            </div>
            <!-- //++ Button Actions ++ -->
            <div class="col-12 q-mt-md">
              <div class="btn-actions q-gutter-x-md">
                <q-btn
                  no-caps
                  unelevated
                  color="grey-5"
                  type="button"
                  label="Cancelar"
                  v-close-popup
                />
                <q-btn
                  no-caps
                  unelevated
                  color="primary"
                  type="submit"
                  label="Guardar"
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
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { nameSubcategoryVal, selectCategoryVal } from "@utils/validation";
import { AxiosError } from "axios";
import { createSubcategoryAPI } from "@services/api_rest";
import { useSubcategory } from "@stores/Subcategory";
import { useCategory } from "@stores/Category";
import { Category } from "@interfaces/interface-store";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});

//***************** Constants *****************
const categoryStore = useCategory();
const subcategoryStore = useSubcategory();
const dialogOperation = ref<boolean>(false);
const refDialog = ref<any>(null);

const dataSend = reactive({
  name: "",
  category_id: 0,
});

const selectCategory = ref<Category>();

const loadingSubmit = ref<boolean>(false);
const refNameSubcat = ref<any>(null);
const refSelectCat = ref<any>(null);

//************* Functions Template *************
const resetErrorNameSubcat = () => {
  refNameSubcat.value.resetValidation();
};

const resetErrorCat = () => {
  refSelectCat.value.resetValidation();
};

// ++ Updated
const updateCategory = (value: Category) => {
  dataSend.category_id = value.id;
  console.log(value);
};

//************* Functions Computed *************
const categoriesState = computed(() => categoryStore.categories);

//**************** Functions API ***************
const createSubcategoy = async () => {
  loadingSubmit.value = true;
  try {
    const resp = await createSubcategoryAPI({
      name: dataSend.name,
      category_id: dataSend.category_id,
    });
    console.log(resp);
    refDialog.value.hide();
    subcategoryStore.isLoadingTable = true;
    await subcategoryStore.getSubCategoriesStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

const submitCategory = () => {
  createSubcategoy();
};

//************* Functions LifeCycle *************
watch(
  () => props.openDialog,
  () => {
    dialogOperation.value = true;
  }
);

watch(dialogOperation, () => {
  if (!dialogOperation.value) {
    dataSend.name = "";
  }
});
</script>

<style lang="scss" scoped>
.card-add-category {
  width: 450px;
  .btn-actions {
    display: flex;
    .q-btn {
      flex-grow: 1;
    }
  }
}
</style>
