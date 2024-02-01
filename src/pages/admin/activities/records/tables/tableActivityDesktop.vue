<template>
  <!-- //******************** TABLE **************** -->
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">Título</th>
        <th class="text-left">Autor</th>
        <th class="text-left">Fecha de creación</th>
        <th class="text-left">Fecha de modificación</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- //++ Not Records ++ -->
      <template v-if="!activitiesState?.length">
        <tr class="q-tr--no-hover">
          <td colspan="5">
            <NoResults />
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(activity, index) in activitiesState" :key="index">
          <td class="text-left">{{ activity.title }}</td>
          <td class="text-left">{{ activity.autor }}</td>
          <td class="text-left">
            {{ date.formatDate(activity.created_at, "DD-MM-YYYY HH:mm:ss") }}
          </td>
          <td class="text-left">
            {{ date.formatDate(activity.updated_at, "DD-MM-YYYY HH:mm:ss") }}
          </td>
          <!-- //++Actions++ -->
          <td class="text-right">
            <div class="q-gutter-x-md">
              <!-- //--View-- -->
              <q-icon
                name="fa-solid fa-eye"
                color="positive"
                class="cursor-pointer"
                @click="opendialogShowActivity(activity.id)"
              >
                <q-tooltip
                  anchor="top middle"
                  self="bottom middle"
                  :offset="[10, 10]"
                >
                  <span>Ver</span>
                </q-tooltip>
              </q-icon>
              <!-- //--Edit-- -->
              <q-icon
                name="fa-solid fa-edit"
                color="primary"
                class="cursor-pointer"
                @click="updateArticle(activity.id)"
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
                @click="opendialogDeleteActivity(activity.id)"
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
      <!-- //++ Inner Loafing ++ -->
      <q-inner-loading :showing="loadingTableState">
        <q-spinner-bars size="35px" color="primary" />
      </q-inner-loading>
    </tbody>
  </q-markup-table>
  <!-- //++Pagination++ -->
  <q-pagination
    v-if="activitiesState.length"
    size="0.8rem"
    class="fles justify-end q-mt-md"
    v-model="currentPage"
    max="1"
    direction-links
    outline
    color="primary"
    active-design="unelevated"
    active-color="primary"
    active-text-color="white"
  />
</template>

<script setup lang="ts">
import { PropType, computed, ref } from "vue";
import { date } from "quasar";
import { Activity } from "@interfaces/interface-store";
import { useRouter } from "vue-router";
import { useActivity } from "@stores/Activity";

// ++ Components
import NoResults from "@components/others/NoResults.vue";

// ++Props
defineProps({
  opendialogDeleteActivity: {
    type: Function,
    required: true,
  },
  opendialogShowActivity: {
    type: Function,
    required: true,
  },
  activitiesState: {
    type: Object as PropType<Activity[]>,
    required: true,
  },
});

// ****************** Constants *****************
const router = useRouter();
const currentPage = ref<number>(1);
const activityStore = useActivity();

//************* Functions Computed *************
const loadingTableState = computed(() => activityStore.isLoadingTable);

//************* Functions API *************
const updateArticle = async (id: number) => {
  await activityStore.getActivityStore(id);
  router.push({ name: "OperationActivity", params: { id } });
};
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
