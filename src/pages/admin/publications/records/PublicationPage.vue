<template>
  <q-page v-if="!loadingPageState" class="container">
    <!-- //***************** HEADER **************** -->
    <div class="text-center q-my-md">
      <span class="q-page-header">Gestión de Publicaciones</span>
    </div>
    <!-- //************* BUTTON ACTIONS ************ -->
    <div class="flex justify-end q-mb-md">
      <q-btn
        no-caps
        unelevated
        :ripple="false"
        color="primary"
        size="0.8rem"
        :to="{ name: 'OperationPublication' }"
        :disable="categoriesState.length == 0 ? true : false"
      >
        <q-icon name="fa-solid fa-plus" size="0.7rem" class="q-mr-sm" />
        <span>Agregar una publicación</span>
      </q-btn>
    </div>
    <!-- //*************** TABLES ******************* -->
    <div>
      <TableArticleDesk
        :opendialogDeleteArticle="opendialogDeleteArticle"
        :opendialogShowArticle="opendialogShowArticle"
        :articlesState="articlesState"
      />
      <!-- //++Pagination++ -->
      <q-pagination
        v-if="articlesState.length"
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
    <!-- //++Show Article++  -->
    <DialogViewArticle :openDialog="dialogShowArticle" />
    <!-- //++Delete Article++ -->
    <DialogDeleteArticle
      :openDialog="dialogDeleteArticle"
      :articleID="articleID"
    />
  </q-page>
  <!-- //************** INNER LOADING ************* -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useArticle } from "@stores/Article";
import { useCategory } from "@stores/Category";

// ++Components
import TableArticleDesk from "./tables/TableDeskArticle.vue";
import DialogDeleteArticle from "./dialogs/DialogDeleteArticle.vue";
import DialogViewArticle from "./dialogs/DialogViewArticle.vue";

// ****************** Constants *********************
const articleStore = useArticle();
const categoryStore = useCategory();
const dialogDeleteArticle = ref<boolean>(false);
const dialogShowArticle = ref<boolean>(false);
const articleID = ref<number>();
const currentPage = ref<number>(1);

// ****************** Functions Template *********************
const opendialogDeleteArticle = (article_id: number) => {
  articleID.value = article_id;
  dialogDeleteArticle.value = !dialogDeleteArticle.value;
};

const opendialogShowArticle = async (article_id: number) => {
  await articleStore.getArticleStore(article_id);
  dialogShowArticle.value = !dialogShowArticle.value;
};

const changePaginate = async (page: number) => {
  articleStore.isLoadingTable = true;
  await articleStore.getListArticlesStore(page);
};

//************* Functions Computed *************
const articlesState = computed(() => articleStore.articles);
const totalPageState = computed(() => articleStore.total_page);
const categoriesState = computed(() => categoryStore.categories);
const loadingPageState = computed(() => articleStore.isLoadingPageList);

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore();
  await articleStore.getListArticlesStore(1);
});

onUnmounted(() => {
  articleStore.isLoadingPageList = true;
  categoryStore.isLoadingPage = true;
});
</script>

<style lang="scss" scoped></style>
