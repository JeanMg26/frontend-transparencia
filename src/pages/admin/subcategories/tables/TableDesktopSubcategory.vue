<template>
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">Fecha de creación</th>
        <th class="text-left">Categoria</th>
        <th class="text-left">Subcategoria</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- //++ Not Records ++ -->
      <template v-if="!subcategoriesState?.length">
        <tr>
          <td colspan="4">
            <NoResults />
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(subcat, index) in subcategoriesState" :key="index">
          <td class="text-left">
            {{ date.formatDate(subcat.created_at, "DD-MM-YYYY HH:mm:ss") }}
          </td>
          <td>{{ subcat.category }}</td>
          <td>{{ subcat.name }}</td>
          <!-- //++ Actions ++ -->
          <td class="text-right">
            <div class="q-gutter-x-md">
              <!-- //--Edit-- -->
              <q-icon
                name="fa-solid fa-edit"
                color="primary"
                class="cursor-pointer"
                @click="openDialogUpdateSubcat(subcat.id)"
              >
                <q-tooltip
                  anchor="top middle"
                  self="bottom middle"
                  :offset="[10, 10]"
                >
                  <span>Editar</span>
                </q-tooltip>
              </q-icon>
              <!-- //--Eliminar-- -->
              <q-icon
                name="fa-regular fa-trash-can"
                color="red"
                class="cursor-pointer"
                @click="openDialogDeleteSubcat(subcat.id)"
              >
                <q-tooltip
                  anchor="top middle"
                  self="bottom middle"
                  :offset="[10, 10]"
                >
                  <span>Eliminar</span>
                </q-tooltip>
              </q-icon>
            </div>
          </td>
        </tr>
      </template>
      <!-- //++ Inner Loading ++ -->
      <q-inner-loading :showing="loadingTableState">
        <q-spinner-bars size="35px" color="primary" />
      </q-inner-loading>
    </tbody>
  </q-markup-table>
</template>

<script setup lang="ts">
import { date } from "quasar";
import { computed } from "vue";
import { useSubcategory } from "@stores/Subcategory";

// ++ Components
import NoResults from "@components/others/NoResults.vue";

// ++Props
defineProps({
  openDialogUpdateSubcat: {
    type: Function,
    required: true,
  },
  openDialogDeleteSubcat: {
    type: Function,
    required: true,
  },
});

//***************** Constants *****************
const subcategoryStore = useSubcategory();

//************* Functions Computed *************
const subcategoriesState = computed(() => subcategoryStore.subcategories);
const loadingTableState = computed(() => subcategoryStore.isLoadingTable);
</script>

<style lang="scss" scoped></style>
