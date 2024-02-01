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
          <span>¿Esta seguro que desea eliminar esta actividad?</span>
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
            @click="deleteActivity()"
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
import { deleteActivityAPI } from "@services/api_rest";
import { notify } from "@utils/notify";
import { useActivity } from "@stores/Activity";
import { AxiosError } from "axios";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
  activityID: {
    type: Number,
    required: false,
  },
});

// ***************** Constants *****************
const activityStore = useActivity();
const dialogDelete = ref<boolean>(false);
const loadingSubmit = ref<boolean>(false);
const refDialog = ref<any>(null);

// ****************** Functions API *******************
const deleteActivity = async () => {
  loadingSubmit.value = true;
  try {
    await deleteActivityAPI(props.activityID!);
    notify("success", "Actividad eliminada correctamente");
    refDialog.value.hide();
    activityStore.isLoadingTable = true;
    await activityStore.getListActivitiesStore();
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
