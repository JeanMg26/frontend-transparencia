<template>
  <!-- //++ Footer ++ -->
  <div class="container-footer bg-danger">
    <div class="row">
      <!--  -->
      <template v-if="$q.screen.width < 600">
        <div class="col-12">
          <q-list>
            <template v-for="(cat, index) in categoriesState" :key="index">
              <q-expansion-item
                expand-separator
                :label="cat.name"
                expand-icon="fa-solid fa-plus"
                expand-icon-class="text-white"
              >
                <q-card v-if="cat.article" class="bg-danger">
                  <q-card-section class="q-px-none q-pt-none">
                    <q-item
                      dense
                      v-for="(article, index) in cat.article"
                      :key="index"
                      @click="getArticle(article)"
                      clickable
                    >
                      <q-item-section>
                        <q-item-label>{{ article.title }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>
          </q-list>
        </div>
      </template>
      <!--  -->
      <template v-if="$q.screen.width >= 600">
        <div class="col-3" v-for="(cat, index) in categoriesState" :key="index">
          <span class="title-category">{{ cat.name }}</span>
          <q-list v-if="cat.article" dense class="q-mt-md">
            <q-item
              v-for="(article, index) in cat.article"
              :key="index"
              clickable
              class="title-subcategory q-no-hover"
            >
              <q-item-section>
                <q-item-label> {{ article.title }} </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </template>
    </div>
    <!-- //++ Separator ++ -->
    <div v-if="$q.screen.width > 600" class="col-12">
      <div class="row justify-center">
        <div class="col-10">
          <q-separator color="white" class="q-my-md" />
        </div>
      </div>
    </div>
    <!-- //++ Sub Footer ++ -->
    <div class="col-12">
      <div class="sub-header q-gutter-md">
        <span>Resultados</span>
        <span>|</span>
        <span>Aviso Legal</span>
        <span>|</span>
        <span>Privacidad</span>
        <span>|</span>
        <span>Sugerencias y quejas</span>
        <span>|</span>
        <span>Mapa web</span>
        <span>|</span>
        <span>RRSS</span>
        <span>|</span>
        <span @click="goSignIn()">Iniciar Sesión</span>
      </div>
    </div>
    <div class="text-center q-mt-md all-rights">
      <span>Todos los Portales de la Comunidad de Madrid</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useCategory } from "@stores/Category";
import { useArticle } from "@stores/Article";
import { computed } from "vue";
import { Article } from "@interfaces/interface-store";

//***************** Constants *****************
const $q = useQuasar();
const router = useRouter();
const categoryStore = useCategory();
const articleStore = useArticle();

//************* Functions API *************
const goSignIn = () => {
  router.push({ name: "SignInPage" });
};

const getArticle = async (article: Article) => {
  console.log("xxx");
  await articleStore.getArticleStore(article.id);
  router.push({
    name: "BlogPublication",
    params: { publication: article.route },
  });
  $q.localStorage.set("article", article);
};

//************* Functions Computed *************
const categoriesState = computed(() => categoryStore.categories);
</script>

<style lang="scss" scoped>
.container-footer {
  position: relative;
  padding: 2rem 4rem;
  color: #fff;
  .title-category {
    font-size: 1.2rem;
    font-weight: 300;
    user-select: none;
  }
  .title-subcategory {
    font-size: 1rem;
    cursor: pointer;
    user-select: none;
    padding-left: 0 !important;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  .sub-header {
    display: flex;
    justify-content: center;
    cursor: pointer;
    user-select: none;
  }
}

// **************** Media Querys ***********************
@media (max-width: 1023px) {
  .container-footer {
    padding: 1rem;
    .q-expansion-item {
      border-top: 1px solid #fff;
      .q-item {
        cursor: pointer;
      }
      &:last-child {
        border-bottom: 1px solid #fff;
      }
    }
    .sub-header {
      padding: 1rem 0;
      flex-wrap: wrap;
    }
  }
}
</style>
