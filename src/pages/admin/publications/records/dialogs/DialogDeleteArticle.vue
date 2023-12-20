<template>
  <q-dialog v-model="dialogDelete" persistent ref="refDialog">
    <q-card class="card-article">
      <q-card-section>
        <div class="flex column justify-center items-center">
          <q-icon
            name="fa-solid fa-circle-exclamation"
            color="grey-4"
            size="2.5rem"
            class="q-mb-md"
          />
          <span>¿Esta seguro que desea eliminar esta publicación?</span>
        </div>
        <div class="btn-actions q-gutter-x-md q-mt-md">
          <q-btn
            no-caps
            unelevated
            color="grey-6"
            label="Cancelar"
            size="0.9rem"
            type="button"
            v-close-popup
          />
          <q-btn
            no-caps
            unelevated
            color="red"
            label="Eliminar"
            size="0.9rem"
            type="submit"
            :loading="loadingSubmit"
            @click="deleteArticle()"
          >
            <template v-slot:loading>
              <q-spinner-bars size="20px" />
            </template>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { deleteArticleAPI } from "@services/api_rest";
import { notify } from "@utils/notify";
import { useArticle } from "@stores/Article";
import { AxiosError } from "axios";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
  articleID: {
    type: Number,
    required: false,
  },
});

// ***************** Constants *****************
const articleStore = useArticle();
const dialogDelete = ref<boolean>(false);
const loadingSubmit = ref<boolean>(false);
const refDialog = ref<any>(null);

// ****************** Functions API *******************
const deleteArticle = async () => {
  loadingSubmit.value = true;
  try {
    await deleteArticleAPI(props.articleID!);
    notify("success", "Categoria eliminada correctamente");
    refDialog.value.hide();
    articleStore.isLoadingTable = true;
    await articleStore.getListArticlesStore();
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  } finally {
    loadingSubmit.value = false;
  }
};

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogDelete.value = true;
  }
);
</script>

<style lang="scss" scoped>
.card-article {
  width: 300px;
  padding: 0 0.5rem;
}
.text-header {
  font-size: 1.1rem;
  font-weight: 300;
}

.btn-actions {
  display: flex;
  .q-btn {
    flex-grow: 1;
  }
}
</style>
