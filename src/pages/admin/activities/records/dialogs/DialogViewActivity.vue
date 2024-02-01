<template>
  <q-dialog v-model="dialogView" persistent>
    <q-card class="card-user">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span class="text-header">Detalles de la actividad</span>
          <q-icon
            name="fa-solid fa-xmark"
            class="cursor-pointer"
            size="1rem"
            v-close-popup
          />
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="row">
          <!-- //++ Title ++ -->
          <div class="col-6">
            <span class="q-label-input">Título</span>
          </div>
          <div class="col-6">
            <span>{{ activityState.title }}</span>
          </div>
          <!-- //++ Autor ++ -->
          <div class="col-6 q-mt-sm">
            <span class="q-label-input">Autor</span>
          </div>
          <div class="col-6 q-mt-sm">
            <span>{{ activityState.autor }}</span>
          </div>
          <!-- //++ Cuerpo de publicación  ++ -->
          <div class="col-6 q-mt-sm">
            <span class="q-label-input">Cuerpo</span>
          </div>
          <div class="col-12 q-mt-md">
            <q-card flat bordered>
              <q-img :src="activityState.image" style="max-width: 150px" />
              <q-card-section v-html="activityState.description" />
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useActivity } from "@stores/Activity";

// ++Props
const props = defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});

// ***************** Constants *****************
const activityStore = useActivity();
const dialogView = ref<boolean>(false);

//************* Functions Computed *************
const activityState = computed(() => activityStore.activity);

// ****************** Functions LifeCycle ***************
watch(
  () => props.openDialog,
  () => {
    dialogView.value = true;
  }
);
</script>

<style lang="scss" scoped>
.card-user {
  width: 600px;
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
