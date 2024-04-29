<template>
  <q-page v-if="!loadingPageState" class="container">
    <!-- //**************** HEADER *************** -->
    <div class="text-center q-my-md">
      <span class="q-page-header">Gestión de Categorias</span>
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
        @click="openDialogOperationCat()"
      >
        <q-icon name="fa-solid fa-circle-plus" size="1rem" class="q-mr-sm" />
        <span>Agregar una categoria</span>
      </q-btn>
    </div>
    <!-- //**************** TABLES *************** -->
    <div>
      <TableDesktopCategory
        :openDialogUpdateCat="openDialogUpdateCat"
        :openDialogDeleteCat="openDialogDeleteCat"
        :categoriesState="categoriesState"
        :loadingTableState="loadingTableState"
      />
      <!-- //++Pagination++ -->
      <q-pagination
        v-if="categoriesState.length"
        size="0.8rem"
        class="fles justify-end q-mt-md"
        v-model="currentPage"
        max="1"
        direction-links
        outline
        color="primary"
        active-design="unelevated"
        active-color="primary"
        active-text-color="white"
      />
    </div>
    <!-- //*************** DIALOGS *************** -->
    <!-- //++ Add Category ++ -->
    <DialogOperationCategory :open-dialog="dialogAddCat" />
    <!-- //++ Delete Category ++ -->
    <DialogDeleteCategory :open-dialog="dialogDeleteCat" :catID="catID" />
  </q-page>
  <!-- //************** INNER LOADING ****************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useCategory } from "@stores/Category";

// ++Components
import TableDesktopCategory from "./tables/TableDesktopCategory.vue";
import DialogOperationCategory from "./dialogs/DialogOperationCategory.vue";
import DialogDeleteCategory from "./dialogs/DialogDeleteCategory.vue";

//***************** Constants *****************
const categoryStore = useCategory();
const dialogAddCat = ref<boolean>(false);
const dialogDeleteCat = ref<boolean>(false);
const catID = ref<number>();
const currentPage = ref<number>(1);

//************* Functions Template *************
const openDialogOperationCat = () => {
  dialogAddCat.value = !dialogAddCat.value;
};

// ++ Update Cat
const openDialogUpdateCat = async (cat_id: number) => {
  await categoryStore.getCategoryStore(cat_id);
  dialogAddCat.value = !dialogAddCat.value;
};

const openDialogDeleteCat = (cat_id: number) => {
  catID.value = cat_id;
  dialogDeleteCat.value = !dialogDeleteCat.value;
};

//************* Functions Computed *************
const categoriesState = computed(() => categoryStore.categories);
const loadingPageState = computed(() => categoryStore.isLoadingPage);
const loadingTableState = computed(() => categoryStore.isLoadingTable);

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore(1);
});

onUnmounted(() => {
  categoryStore.isLoadingPage = true;
});
</script>

<style lang="scss" scoped></style>
