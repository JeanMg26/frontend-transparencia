<template>
  <q-dialog v-model="dialogDelete" persistent>
    <q-card class="card-user">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span class="text-header">Eliminar un usuario</span>
          <q-icon
            name="fa-solid fa-xmark"
            class="cursor-pointer"
            size="1rem"
            v-close-popup
          />
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="flex column justify-center items-center">
          <q-icon
            name="fa-solid fa-circle-exclamation"
            color="grey-4"
            size="2.5rem"
            class="q-mb-md"
          />
          <span>¿Esta seguro que desea eliminar este usuario?</span>
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
            v-close-popup
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});

// ***************** Constants *****************
const dialogDelete = ref<boolean>(false);

// ****************** Functions API *******************
const deleteUser = () => {
  console.log("ok");
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
