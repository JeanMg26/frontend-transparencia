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
        v-if="$q.screen.width >= 1024"
        :openDialogUpdateCat="openDialogUpdateCat"
        :openDialogDeleteCat="openDialogDeleteCat"
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
import { useQuasar } from "quasar";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useCategory } from "@stores/Category";

// ++Components
import TableDesktopCategory from "./tables/TableDesktopCategory.vue";
import DialogOperationCategory from "./dialogs/DialogOperationCategory.vue";
import DialogDeleteCategory from "./dialogs/DialogDeleteCategory.vue";

//***************** Constants *****************
const $q = useQuasar();
const categoryStore = useCategory();
const dialogAddCat = ref<boolean>(false);
const dialogDeleteCat = ref<boolean>(false);
const catID = ref<number>();

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
const loadingPageState = computed(() => categoryStore.isLoadingPage);

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore();
});

onUnmounted(() => {
  categoryStore.isLoadingPage = true;
});
</script>

<style lang="scss" scoped></style>
