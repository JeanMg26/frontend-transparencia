<template>
  <q-page class="container">
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
    <DialogAddSubcategory :open-dialog="dialogAddSubcat" />
    <!-- //++ Delete Category ++ -->
    <DialogDeleteSubcategory :open-dialog="dialogDeleteSubcat" />
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";

// ++Components
import TableDesktopSubcategory from "./tables/TableDesktopSubcategory.vue";
import DialogAddSubcategory from "./dialogs/DialogAddSubcategory.vue";
import DialogDeleteSubcategory from "./dialogs/DialogDeleteSubcategory.vue";

//***************** Constants *****************
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
</script>

<style lang="scss" scoped></style>
