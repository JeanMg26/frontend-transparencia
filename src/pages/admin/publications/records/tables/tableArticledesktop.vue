<template>
  <!-- //******************** TABLE **************** -->
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">Categoria</th>
        <th class="text-left">Título</th>
        <th class="text-left">Autor</th>
        <th class="text-left">Fecha de creación</th>
        <th class="text-left">Fecha de modificación</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- //++ Not Records ++ -->
      <template v-if="!articlesState?.length">
        <tr class="q-tr--no-hover">
          <td colspan="5">
            <NoResults />
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(article, index) in articlesState" :key="index">
          <td class="text-left">{{ article.category }}</td>
          <td class="text-left">{{ article.title }}</td>
          <td class="text-left">{{ article.autor }}</td>
          <td class="text-left">
            {{ date.formatDate(article.created_at, "DD-MM-YYYY HH:mm:ss") }}
          </td>
          <td class="text-left">
            {{ date.formatDate(article.updated_at, "DD-MM-YYYY HH:mm:ss") }}
          </td>
          <!-- //++Actions++ -->
          <td class="text-right">
            <div class="q-gutter-x-md">
              <!-- //--View-- -->
              <q-icon
                name="fa-solid fa-eye"
                color="positive"
                class="cursor-pointer"
                @click="opendialogShowArticle(article.id)"
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
                @click="updateArticle(article.id)"
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
                @click="opendialogDeleteArticle(article.id)"
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
    v-if="articlesState.length"
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
import { Article } from "@interfaces/interface-store";
import { useRouter } from "vue-router";
import { useArticle } from "@stores/Article";

// ++ Components
import NoResults from "@components/others/NoResults.vue";

// ++Props
defineProps({
  opendialogDeleteArticle: {
    type: Function,
    required: true,
  },
  opendialogShowArticle: {
    type: Function,
    required: true,
  },
  articlesState: {
    type: Object as PropType<Article[]>,
    required: true,
  },
});

// ****************** Constants *****************
const router = useRouter();
const currentPage = ref<number>(1);
const articleStore = useArticle();

//************* Functions Computed *************
const loadingTableState = computed(() => articleStore.isLoadingTable);

//************* Functions API *************
const updateArticle = async (id: number) => {
  await articleStore.getArticleStore(id);
  router.push({ name: "OperationPublication", params: { id } });
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
