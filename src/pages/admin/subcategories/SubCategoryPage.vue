<template>
  <q-page v-if="!loadingPageState" class="container">
    <!-- //**************** HEADER *************** -->
    <div class="text-center q-my-md">
      <span class="q-page-header">Gestión de Subcategorias</span>
    </div>
    <!-- //**************** BODY *************** -->
    <!-- //++Buttons Actions++ -->
    <div class="flex justify-end q-mb-md">
      <q-btn
        no-caps
        unelevated
        :ripple="false"
        color="primary"
        size="0.8rem"
        @click="dialogOperationSubcat = !dialogOperationSubcat"
        :disable="categoryState.length == 0 ? true : false"
      >
        <q-icon name="fa-solid fa-circle-plus" size="1rem" class="q-mr-sm" />
        <span>Agregar una subcategoria</span>
      </q-btn>
    </div>
    <!-- //**************** TABLES *************** -->
    <div>
      <TableDesktopSubcategory
        v-if="$q.screen.width >= 1024"
        :openDialogUpdateSubcat="openDialogUpdateSubcat"
        :openDialogDeleteSubcat="openDialogDeleteSubcat"
      />
    </div>
    <!-- //*************** DIALOGS *************** -->
    <!-- //++ Add Category ++ -->
    <DialogOperationSubcategory :open-dialog="dialogOperationSubcat" />
    <!-- //++ Delete Category ++ -->
    <DialogDeleteSubcategory
      :open-dialog="dialogDeleteSubcat"
      :subcatID="subcatID"
    />
  </q-page>
  <!-- //************** INNER LOADING *************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useSubcategory } from "@stores/Subcategory";
import { useCategory } from "@stores/Category";

// ++Components
import TableDesktopSubcategory from "./tables/TableDesktopSubcategory.vue";
import DialogOperationSubcategory from "./dialogs/DialogOperationSubcategory.vue";
import DialogDeleteSubcategory from "./dialogs/DialogDeleteSubcategory.vue";

//***************** Constants *****************
const categoryStore = useCategory();
const subcategoryStore = useSubcategory();
const $q = useQuasar();
const dialogOperationSubcat = ref<boolean>(false);
const dialogDeleteSubcat = ref<boolean>(false);
const subcatID = ref<number>();

//************* Functions Template *************
// ++ Dialog Updated
const openDialogUpdateSubcat = async (subcat_id: number) => {
  await subcategoryStore.getSubcategoryStore(subcat_id);
  dialogOperationSubcat.value = !dialogOperationSubcat.value;
};

// ++ Dialog Delete
const openDialogDeleteSubcat = (subcat_id: number) => {
  subcatID.value = subcat_id;
  dialogDeleteSubcat.value = !dialogDeleteSubcat.value;
};

//************* Functions Computed *************
const categoryState = computed(() => categoryStore.categories);
const loadingPageState = computed(() => subcategoryStore.isLoadingPage);

//************* Functions LifeCycle *************
onMounted(async () => {
  await subcategoryStore.getSubCategoriesStore();
  await categoryStore.getCategoriesStore();
});

onUnmounted(() => {
  subcategoryStore.isLoadingPage = true;
});
</script>

<style lang="scss" scoped></style>
