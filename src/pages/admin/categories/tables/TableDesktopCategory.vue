<template>
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">Fecha de creación</th>
        <th class="text-left">Nombre</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- //++ Not Records ++ -->
      <template v-if="!categoriesState?.length">
        <tr class="q-tr--no-hover">
          <td colspan="3">
            <NoResults />
          </td>
        </tr>
      </template>
      <!-- //++ Full Records ++ -->
      <template v-else>
        <tr v-for="(cat, index) in categoriesState" :key="index">
          <td class="text-left">
            {{ date.formatDate(cat.created_at, "DD-MM-YYYY HH:mm:ss") }}
          </td>
          <td class="text-left">{{ cat.name }}</td>
          <!-- //++ Actions ++ -->
          <td class="text-right">
            <div class="q-gutter-x-md">
              <!-- //--Edit-- -->
              <q-icon
                name="fa-solid fa-edit"
                color="primary"
                class="cursor-pointer"
                @click="openDialogUpdateCat(cat.id)"
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
                v-if="cat.article.length <= 0"
                name="fa-regular fa-trash-can"
                color="red"
                class="cursor-pointer"
                @click="openDialogDeleteCat(cat.id)"
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
      <!-- //++ INNER LOADING ++ -->
      <q-inner-loading :showing="loadingTableState">
        <q-spinner-bars size="35px" color="primary" />
      </q-inner-loading>
    </tbody>
  </q-markup-table>
</template>

<script setup lang="ts">
import { date } from "quasar";
import { useCategory } from "@stores/Category";
import { PropType, computed, ref } from "vue";

// ++ Components
import NoResults from "@components/others/NoResults.vue";
import { Category } from "@interfaces/interface-store";

// ++Props
defineProps({
  openDialogUpdateCat: {
    type: Function,
    required: true,
  },
  openDialogDeleteCat: {
    type: Function,
    required: true,
  },
  categoriesState: {
    type: Object as PropType<Category[]>,
    required: true,
  },
  loadingTableState: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.q-table {
  tbody {
    td {
      height: 30px !important;
    }
  }
}
</style>
