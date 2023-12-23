<template>
  <q-page>
    <div class="header-publication">
      <span @click="goBackMain()">Página principal</span>
      <q-icon name="fa-solid fa-chevron-right" size="0.6rem" />
      <span>{{ articleLS.title }}</span>
    </div>
    <!-- //++Body++ -->
    <div class="section-body">
      <div class="row">
        <div class="col-4">
          <q-list bordered class="list-articles">
            <q-item
              v-for="(article, index) in articlesState"
              :key="index"
              clickable
              :active="article.id == articleState.id"
              active-class="article-active"
              @click="goArticle(article)"
            >
              <q-item-section>
                <span>{{ article.title }}</span>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-8">
          <q-card flat bordered>
            <q-card-section>
              <!-- //++ Image ++ -->
              <div class="text-center q-mt-md">
                <q-img
                  :src="articleState.image"
                  spinner-color="primary"
                  spinner-size="82px"
                  class="image-publication"
                />
              </div>
              <!-- //++ Title++ -->
              <div class="title-article">
                <span>{{ articleState.title }}</span>
              </div>
            </q-card-section>
            <q-card-section v-html="articleState.description" />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
import { useArticle } from "@stores/Article";
import { Article } from "@interfaces/interface-store";
import { useRouter } from "vue-router";

//***************** Constants *****************
const $q = useQuasar();
const router = useRouter();
const articleLS = ref<any>($q.localStorage.getItem("article"));
const articleStore = useArticle();

//************* Functions Template *************
const goBackMain = () => {
  router.push({
    name: "BlogPage",
  });
};

//************* Functions Computed *************
const articlesState = computed(() => articleStore.articles);
const articleState = computed(() => articleStore.article);

//**************** Functions API ****************
const goArticle = async (article: Article) => {
  await articleStore.getArticleStore(article.id);
  router.push({
    name: "BlogPublication",
    params: { publication: article.route },
  });
};

//************* Functions LifeCycle *************
onMounted(async () => {
  await articleStore.getListArticlesStore();
  await articleStore.getArticleStore(articleLS.value.id);
  // await publicationStore.getArticleStore();
});
</script>

<style lang="scss" scoped>
.header-publication {
  background-color: #fff;
  height: 50px;
  border-bottom: 1px solid $grey-4;
  display: flex;
  align-items: center;
  padding-left: 4rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);

  span {
    &:first-child {
      color: #264081;
      font-weight: 300;
      margin-right: 0.5rem;
      cursor: pointer;
      text-decoration: underline;
    }
    &:last-child {
      font-weight: 300;
    }
  }
  .q-icon {
    margin-right: 0.5rem;
  }
}

.section-body {
  padding: 2rem 6rem;
  .list-articles {
    width: 350px;
    background-color: $grey-2;
    .q-item {
      background-color: #fff;
      margin: 1rem;
      border-radius: 4px;
      &:hover {
        background-color: #264081;
        color: #fff;
      }
    }
  }
}

.article-active {
  background-color: #264081 !important;
  color: #fff;
}

.image-publication {
  width: 400px;
  // width: 400px;
}

.title-article {
  margin-top: 1rem;
  span {
    &:last-child {
      font-size: 2rem;
      font-weight: 300;
      border-left: 0.5rem solid #264081;
      padding-left: 0.5rem;
    }
  }
}
</style>
