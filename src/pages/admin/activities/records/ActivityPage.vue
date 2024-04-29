<template>
  <q-page v-if="!loadingPageState" class="container">
    <!-- //***************** HEADER **************** -->
    <div class="text-center q-my-md">
      <span class="q-page-header">Gestión de Actividades</span>
    </div>
    <!-- //************* BUTTON ACTIONS ************ -->
    <div class="flex justify-end q-mb-md">
      <q-btn
        no-caps
        unelevated
        :ripple="false"
        color="primary"
        size="0.8rem"
        :to="{ name: 'OperationActivity' }"
      >
        <q-icon name="fa-solid fa-plus" size="0.7rem" class="q-mr-sm" />
        <span>Agregar una actividad</span>
      </q-btn>
    </div>
    <!-- //*************** TABLES ******************* -->
    <div>
      <TableActivityDesk
        :opendialogDeleteActivity="opendialogDeleteActivity"
        :opendialogShowActivity="opendialogShowActivity"
        :activitiesState="activitiesState"
      />
      <!-- //++PAGINATION++ -->
      <q-pagination
        v-if="activitiesState.length"
        size="0.8rem"
        class="fles justify-end q-mt-md"
        v-model="currentPage"
        :max="totalPageState"
        direction-links
        outline
        color="primary"
        active-design="unelevated"
        active-color="primary"
        active-text-color="white"
        @update:model-value="changePaginate"
      />
    </div>
    <!-- //***************** DIALOGS *************** -->
    <!-- //++Show Activity++  -->
    <DialogViewActivity :openDialog="dialogShowActivity" />
    <!-- //++Delete Activity++ -->
    <DialogDeleteActivity
      :openDialog="dialogDeleteActivity"
      :activityID="activityID"
    />
  </q-page>
  <!-- //************** INNER LOADING ************* -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="30px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useActivity } from "@stores/Activity";

// ++Components
import TableActivityDesk from "./tables/TableActivityDesk.vue";
import DialogDeleteActivity from "./dialogs/DialogDeleteActivity.vue";
import DialogViewActivity from "./dialogs/DialogViewActivity.vue";

// ****************** Constants *********************
const activityStore = useActivity();
const dialogDeleteActivity = ref<boolean>(false);
const dialogShowActivity = ref<boolean>(false);
const activityID = ref<number>();
const currentPage = ref<number>(1);

// ****************** Functions Template *********************
const opendialogDeleteActivity = (article_id: number) => {
  activityID.value = article_id;
  dialogDeleteActivity.value = !dialogDeleteActivity.value;
};

const opendialogShowActivity = async (article_id: number) => {
  await activityStore.getActivityStore(article_id);
  dialogShowActivity.value = !dialogShowActivity.value;
};

//************* Functions Computed *************
const activitiesState = computed(() => activityStore.activities);
const totalPageState = computed(() => activityStore.total_pages);
const loadingPageState = computed(() => activityStore.isLoadingPageList);

const changePaginate = async (page: number) => {
  activityStore.isLoadingTable = true;
  await activityStore.getListActivitiesStore(page);
};

//************* Functions LifeCycle *************
onMounted(async () => {
  await activityStore.getListActivitiesStore(1);
});

onUnmounted(() => {
  activityStore.isLoadingPageList = true;
});
</script>

<style lang="scss" scoped></style>
