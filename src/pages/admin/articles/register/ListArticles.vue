<template>
  <q-page class="container">
    <!-- //***************** HEADER **************** -->
    <div class="text-center q-my-md">
      <span class="q-page-header">Gestión de Publicaciones</span>
    </div>
    <!-- //************* BUTTON ACTIONS ************ -->
    <div class="flex justify-end q-mb-md">
      <q-btn
        no-caps
        unelevated
        :ripple="false"
        color="primary"
        size="0.8rem"
        :to="{ name: 'OperationArticle' }"
      >
        <q-icon name="fa-solid fa-plus" size="0.7rem" class="q-mr-sm" />
        <span>Agregar una publicación</span>
      </q-btn>
    </div>
    <!-- //*************** TABLES ******************* -->
    <div>
      <TableArticleDesktop :opendialogDeleteArticle="opendialogDeleteArticle" />
    </div>
    <!-- //***************** DIALOGS *************** -->
    <DialogDeleteArticle :openDialog="dialogDeleteArticle" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

// ++Components
import TableArticleDesktop from "./tables/tableArticledesktop.vue";
import DialogDeleteArticle from "./dialogs/DialogDeleteArticle.vue";

// ****************** Constants *********************
const dialogDeleteArticle = ref<boolean>(false);

// ****************** Functions Template *********************
const opendialogDeleteArticle = () => {
  console.log("click");
  dialogDeleteArticle.value = !dialogDeleteArticle.value;
};
</script>

<style lang="scss" scoped></style>
