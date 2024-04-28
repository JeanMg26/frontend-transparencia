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
      <tableActivityDesktop
        :opendialogDeleteActivity="opendialogDeleteActivity"
        :opendialogShowActivity="opendialogShowActivity"
        :activitiesState="activitiesState"
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
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useActivity } from "@stores/Activity";

// ++Components
import tableActivityDesktop from "./tables/tableActivityDesktop.vue";
import DialogDeleteActivity from "./dialogs/DialogDeleteActivity.vue";
import DialogViewActivity from "./dialogs/DialogViewActivity.vue";

// ****************** Constants *********************
const activityStore = useActivity();
const dialogDeleteActivity = ref<boolean>(false);
const dialogShowActivity = ref<boolean>(false);
const activityID = ref<number>();

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
const loadingPageState = computed(() => activityStore.isLoadingPageList);

//************* Functions LifeCycle *************
onMounted(async () => {
  await activityStore.getListActivitiesStore();
});

onUnmounted(() => {
  activityStore.isLoadingPageList = true;
});
</script>

<style lang="scss" scoped></style>
