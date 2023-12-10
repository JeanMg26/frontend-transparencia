<template>
  <q-dialog v-model="dialogOperation" persistent ref="refDialog">
    <q-card class="card-add-category">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span v-if="!categoryState.id" class="q-dialog-header">
            Agregar una categoria
          </span>
          <span v-else class="q-dialog-header">Actualizar una categoria</span>
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
            <!-- //++ Name ++ -->
            <div class="col-12">
              <span class="q-label-input">Nombre de la categoria</span>
              <q-input
                dense
                outlined
                v-model="nameState"
                type="text"
                class="q-mt-xs"
                placeholder="Ingresar un nombre"
                maxlength="30"
                :class="{ 'error-back': nameCatError }"
                :rules="nameCategoryVal"
                :no-error-icon="true"
                ref="refNameCat"
                @blur="!dataSend.name ? resetErrorNameCat() : ''"
                :hide-bottom-space="
                  refNameCat && refNameCat.hasError ? false : true
                "
              />
              <span v-if="nameCatError" class="q-label-error">
                {{ nameCatError }}
              </span>
            </div>
            <!-- //++ Button Actions ++ -->
            <div class="col-12 q-mt-lg">
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
                  :label="!categoryState.id ? 'Guardar' : 'Actualizar'"
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
import { AxiosError } from "axios";
import { computed, reactive, ref, watch } from "vue";
import { createCategoryAPI, updateCategoryAPI } from "@services/api_rest";
import { notify } from "@utils/notify";
import { useCategory } from "@stores/Category";
import { nameCategoryVal } from "@utils/validation";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});

//***************** Constants *****************
const categoryStore = useCategory();
const dialogOperation = ref<boolean>(false);
const refDialog = ref<any>(null);

const dataSend = reactive({
  name: "",
});

const refNameCat = ref<any>(null);
const nameCatError = ref<string>("");
const loadingSubmit = ref<boolean>(false);

//************* Functions Template *************
const resetErrorNameCat = () => {
  refNameCat.value.resetValidation();
};

//************* Functions Computed *************
const categoryState = computed(() => categoryStore.category);

const nameState = computed({
  get() {
    return dataSend.name ? dataSend.name : categoryState.value.name;
  },
  set(value: any) {
    dataSend.name = value;
  },
});

//************* Functions API *************
// ++ Created API
const createCategory = async () => {
  loadingSubmit.value = true;
  try {
    await createCategoryAPI({
      name: dataSend.name,
    });
    loadingSubmit.value = false;
    refDialog.value.hide();
    notify("success", "Categoria creada correctamente.");
    categoryStore.isLoadingTable = true;
    await categoryStore.getCategoriesStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      let nameError = error.response?.data.errors.name;
      // ++Username Unique
      if (nameError) {
        if (nameError[0] == 1003) {
          nameCatError.value = "Este nombre ya está registrado";
        }
      }
    }
  } finally {
    loadingSubmit.value = false;
  }
};

// ++ Updated API
const updateCategory = async () => {
  loadingSubmit.value = true;
  try {
    await updateCategoryAPI(categoryState.value.id, {
      name: dataSend.name ? dataSend.name : categoryState.value.name,
    });
    loadingSubmit.value = false;
    refDialog.value.hide();
    notify("success", "Categoria actualizada correctamente.");
    categoryStore.isLoadingTable = true;
    await categoryStore.getCategoriesStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      let nameError = error.response?.data.errors.name;
      // ++Username Unique
      if (nameError) {
        if (nameError[0] == 1003) {
          nameCatError.value = "Este nombre ya está registrado";
        }
      }
    }
  } finally {
    loadingSubmit.value = false;
  }
};

const submitCategory = () => {
  if (!categoryState.value.id) {
    createCategory();
  } else {
    updateCategory();
  }
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
    categoryStore.cleanCategoryStore();
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
