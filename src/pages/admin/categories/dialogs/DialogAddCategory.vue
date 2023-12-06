<template>
  <q-dialog v-model="dialogAddCat" persistent ref="refDialog">
    <q-card class="card-add-category">
      <q-card-section>
        <div class="flex justify-between items-center">
          <span class="q-dialog-header">Agregar una categoria</span>
          <q-icon
            name="fa-solid fa-xmark"
            size="1.1rem"
            class="cursor-pointer"
            v-close-popup
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="submitCategory" greedy>
          <div class="row">
            <!-- //++ Name ++ -->
            <div class="col-12">
              <span class="q-label-input">Nombre de la categoria</span>
              <q-input
                dense
                outlined
                v-model="dataSend.name"
                type="text"
                class="q-mt-xs"
                placeholder="Ingresar un nombre"
              />
            </div>
            <!-- //++ Button Actions ++ -->
            <div class="col-12 q-mt-md">
              <div class="btn-actions q-gutter-x-md">
                <q-btn
                  no-caps
                  unelevated
                  color="grey-5"
                  type="button"
                  label="Cancelar"
                  v-close-popup
                />
                <q-btn
                  no-caps
                  unelevated
                  color="primary"
                  type="submit"
                  label="Guardar"
                />
              </div>
            </div>
          </div>
        </q-form>
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

//***************** Constants *****************
const dialogAddCat = ref<boolean>(false);
const refDialog = ref<any>(null);

const dataSend = reactive({
  name: "",
});

//************* Functions Template *************
const submitCategory = () => {
  console.log("ok");
  refDialog.value.hide();
};

//************* Functions LifeCycle *************
watch(
  () => props.openDialog,
  () => {
    dialogAddCat.value = true;
  }
);
</script>

<style lang="scss" scoped>
.card-add-category {
  width: 350px;
  .btn-actions {
    display: flex;
    .q-btn {
      flex-grow: 1;
    }
  }
}
</style>
