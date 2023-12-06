<template>
  <q-page class="container">
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
        @click="openDialogAddCat()"
      >
        <q-icon name="fa-solid fa-circle-plus" size="1rem" class="q-mr-sm" />
        <span>Agregar una categoria</span>
      </q-btn>
    </div>
    <!-- //**************** TABLES *************** -->
    <div>
      <TableDesktopCategory
        v-if="$q.screen.width >= 1024"
        :openDialogAddCat="openDialogAddCat"
        :openDialogDeleteCat="openDialogDeleteCat"
      />
    </div>
    <!-- //*************** DIALOGS *************** -->
    <!-- //++ Add Category ++ -->
    <DialogAddCategory :open-dialog="dialogAddCat" />
    <!-- //++ Delete Category ++ -->
    <DialogDeleteCategory :open-dialog="dialogDeleteCat" />
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";

// ++Components
import TableDesktopCategory from "./tables/TableDesktopCategory.vue";
import DialogAddCategory from "./dialogs/DialogAddCategory.vue";
import DialogDeleteCategory from "./dialogs/DialogDeleteCategory.vue";

//***************** Constants *****************
const $q = useQuasar();
const dialogAddCat = ref<boolean>(false);
const dialogDeleteCat = ref<boolean>(false);

//************* Functions Template *************
const openDialogAddCat = () => {
  dialogAddCat.value = !dialogAddCat.value;
};

const openDialogDeleteCat = () => {
  dialogDeleteCat.value = !dialogDeleteCat.value;
};
</script>

<style lang="scss" scoped></style>
