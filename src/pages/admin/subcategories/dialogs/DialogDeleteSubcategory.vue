<template>
  <q-dialog v-model="dialogDelete" persistent ref="refDialog">
    <q-card class="card-user">
      <q-card-section>
        <div class="flex column justify-center items-center">
          <q-icon
            name="fa-solid fa-circle-exclamation"
            color="grey-4"
            size="2.5rem"
            class="q-mb-md"
          />
          <span>¿Esta seguro que desea eliminar esta subcategoría?</span>
        </div>
        <div class="btn-actions q-gutter-x-md q-mt-md">
          <q-btn
            no-caps
            unelevated
            color="grey-6"
            label="Cancelar"
            size="0.9rem"
            v-close-popup
          />
          <q-btn
            no-caps
            unelevated
            color="red"
            label="Eliminar"
            size="0.9rem"
            :loading="loadingSubmit"
            @click="deleteSubcategory()"
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
import { ref, watch } from "vue";
import { deleteSubcategoryAPI } from "@services/api_rest";
import { useSubcategory } from "@stores/Subcategory";
import { AxiosError } from "axios";
import { notify } from "@utils/notify";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
  subcatID: {
    type: Number,
    required: false,
  },
});

// ***************** Constants *****************
const subcategoryStore = useSubcategory();
const dialogDelete = ref<boolean>(false);
const refDialog = ref<any>(null);

const loadingSubmit = ref<boolean>(false);

// ****************** Functions API *******************
const deleteSubcategory = async () => {
  loadingSubmit.value = true;
  try {
    await deleteSubcategoryAPI(props.subcatID!);
    refDialog.value.hide();
    notify("success", "Subcategoria creada correctamente.");
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

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogDelete.value = true;
  }
);
</script>

<style lang="scss" scoped>
.card-user {
  width: 300px;
  padding: 0 0.5rem;
}
.text-header {
  font-size: 1.1rem;
  font-weight: 500;
}

.btn-actions {
  display: flex;
  .q-btn {
    flex-grow: 1;
  }
}
</style>
