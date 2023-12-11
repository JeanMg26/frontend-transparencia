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
        @click="openDialogAddSubcat()"
      >
        <q-icon name="fa-solid fa-circle-plus" size="1rem" class="q-mr-sm" />
        <span>Agregar una subcategoria</span>
      </q-btn>
    </div>
    <!-- //**************** TABLES *************** -->
    <div>
      <TableDesktopSubcategory
        v-if="$q.screen.width >= 1024"
        :openDialogAdd="openDialogAddSubcat"
        :openDialogDelete="openDialogDeleteCat"
      />
    </div>
    <!-- //*************** DIALOGS *************** -->
    <!-- //++ Add Category ++ -->
    <DialogOperationSubcategory :open-dialog="dialogAddSubcat" />
    <!-- //++ Delete Category ++ -->
    <DialogDeleteSubcategory :open-dialog="dialogDeleteSubcat" />
  </q-page>
  <!-- //************** INNER LOADING *************** -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="50px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
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
const dialogAddSubcat = ref<boolean>(false);
const dialogDeleteSubcat = ref<boolean>(false);

//************* Functions Template *************
const openDialogAddSubcat = () => {
  dialogAddSubcat.value = !dialogAddSubcat.value;
};

const openDialogDeleteCat = () => {
  dialogDeleteSubcat.value = !dialogDeleteSubcat.value;
};

//************* Functions Computed *************
const loadingPageState = computed(() => subcategoryStore.isLoadingPage);

//************* Functions LifeCycle *************
onMounted(async () => {
  await subcategoryStore.getSubCategoriesStore();
  await categoryStore.getCategoriesStore();
});
</script>

<style lang="scss" scoped></style>
