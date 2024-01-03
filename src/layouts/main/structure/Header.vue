<template>
  <q-header bordered>
    <!-- //++ Logos ++ -->
    <div class="row">
      <div class="col-12 header-blog bg-white">
        <!-- //-------- Menu Mobile -------- -->
        <div>
          <q-icon
            v-if="$q.screen.width < 600"
            name="fa-solid fa-bars"
            size="1.5rem"
            class="icon-menu-mobile"
          >
            <q-menu square :offset="[0, 23]">
              <q-list class="list-menu-mobile">
                <q-expansion-item
                  expand-separator
                  header-class="menu-expansion-article"
                  style="border-bottom: 4px solid #264081"
                  v-for="(cat, index) in categoriesState"
                  :key="index"
                >
                  <template v-slot:header>
                    <span>{{ cat.name }}</span>
                  </template>
                  <template v-if="cat.article">
                    <q-list
                      bordered
                      separator
                      :class="{ 'list-expasion': cat.article.length > 4 }"
                    >
                      <q-item
                        v-for="(article, index) in cat.article"
                        :key="index"
                        clickable
                        v-close-popup
                        @click="getArticle(article)"
                      >
                        <q-item-section>
                          <q-item-label>{{ article.title }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-expansion-item>
                <!-- </div> -->
                <q-separator />
              </q-list>
            </q-menu>
          </q-icon>
          <q-img
            src="@assets/img/logo-entidad.png"
            class="img-logo-right"
            :no-spinner="true"
            @click="goMainPage()"
          />
        </div>
        <q-img
          src="@assets/img/logo-transparencia.svg"
          class="img-logo-left"
          :no-spinner="true"
        />
      </div>
      <!-- //++ Categories ++ -->
      <div v-if="$q.screen.width > 600" class="col-12 section-category">
        <div class="row">
          <div class="col-12 column-category">
            <q-item
              v-for="(cat, index) in categoriesState"
              :key="index"
              clickable
              class="item-category q-no-hover"
            >
              <q-item-section>
                <q-item-label>{{ cat.name }}</q-item-label>
              </q-item-section>
              <!-- //-- Menu -- -->
              <q-menu v-if="cat.article" square class="q-menu-subcategory">
                <q-list bordered>
                  <q-item
                    v-for="(article, index) in cat.article"
                    :key="index"
                    clickable
                    v-close-popup
                    class="item-subcategory q-no-hover"
                    @click="getArticle(article)"
                  >
                    <q-item-section v-if="article">
                      <q-item-label>{{ article.title }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </div>
        </div>
      </div>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useCategory } from "@stores/Category";
import { useArticle } from "@stores/Article";

import { useRouter } from "vue-router";
import { Article } from "@interfaces/interface-store";

//***************** Constants *****************
const $q = useQuasar();
const router = useRouter();
const categoryStore = useCategory();
const articleStore = useArticle();

//************* Functions Computed *************
const categoriesState = computed(() => categoryStore.categories);

//**************** Functions API ****************
const getArticle = async (article: Article) => {
  await articleStore.getArticleStore(article.id);
  router.push({
    name: "BlogPublication",
    params: { publication: article.route },
  });
  $q.localStorage.set("article", article);
};

const goMainPage = () => {
  router.push({ name: "MainPage" });
};

//************* Functions LifeCycle *************
onMounted(async () => {
  await categoryStore.getCategoriesStore();
});
</script>

<style lang="scss" scoped>
.header-blog {
  padding: 0.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(../../../assets/img/pattern.png) !important;
}

.section-category {
  background-color: $blue-grey-1;
  padding: 0 4rem;
  .item-category {
    max-width: 250px;
    user-select: none;
    .q-item__label {
      text-transform: uppercase;
      color: $grey-9;
      font-size: 1rem;
      font-weight: 300;
      padding: 0 0.5rem;
      &::first-line {
        line-height: 1.8rem;
      }
    }
    &:hover {
      background-color: white;
      box-shadow: inset 0 -4px 0 #264081;
    }
    // ++Subcategory
  }
}

.column-category {
  display: flex;
}

.q-menu-subcategory {
  .q-list {
    min-width: 250px;
    .item-subcategory {
      .q-item__label {
        font-size: 1rem;
        font-weight: 200;
      }
      &:hover {
        background-color: #264081;
        color: #fff;
      }
    }
  }
}

.img-logo-left {
  width: 16rem;
}
.img-logo-right {
  width: 4rem;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .list-menu-mobile {
    .q-item {
      &:hover {
        background-color: #264081;
        color: #fff;
      }
    }
  }
}

@media (max-width: 600px) {
  .header-blog {
    padding: 0.5rem;
    .img-logo-left {
      width: 170px;
    }
    .img-logo-right {
      width: 50px;
    }
  }

  .icon-menu-mobile {
    margin-left: -0.5rem;
    padding-left: 1rem;
    cursor: pointer;
    margin-right: 1rem;
    &:hover {
      color: $grey-5;
    }
  }

  .list-menu-mobile {
    min-width: 90vw !important;
  }
}
</style>
