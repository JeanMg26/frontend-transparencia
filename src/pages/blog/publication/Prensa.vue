<template>
  <q-page>
    <div class="header-publication">
      <span @click="goBackMain()">Página principal</span>
      <q-icon name="fa-solid fa-chevron-right" size="0.6rem" />
      <span>Prensa</span>
    </div>
    <!-- //++Body++ -->
    <div class="section-body">
      <div class="row q-col-gutter-x-md">
        <!-- //--Articles Menu-- -->
        <div v-if="$q.screen.width >= 1024" class="col-md-4 col-xl-3">
          <q-list bordered class="list-articles">
            <q-item
              v-for="(social, index) in listSocialMedia"
              :key="index"
              clickable
              :active="social.id == socialMedia"
              active-class="article-active"
              @click="goSocialMedia(social.id)"
            >
              <q-item-section>
                <div class="flex items-center">
                  <q-icon :name="social.icon" size="0.8rem" class="q-mr-sm" />
                  <span>{{ social.name }}</span>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <!-- //--Articles Post-- -->
        <div class="col-12 col-md-8 col-xl-9 q-pl-none">
          <q-card flat bordered class="card-body">
            <q-card-section>
              <div class="text-center">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgerenciageneralgorea&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                  width="500"
                  height="500"
                  style="border: none; overflow: hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- //++ Footer ++ -->
    <Footer />
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useArticle } from "@stores/Article";
import { Article } from "@interfaces/interface-store";

// ++Componens
import Footer from "../components/Footer.vue";

//***************** Constants *****************
const $q = useQuasar();
const router = useRouter();
const articleLS = ref<any>($q.localStorage.getItem("article"));
const articleStore = useArticle();

const socialMedia = ref<number>(1);

const listSocialMedia = ref<any>([
  { id: 1, name: "Facebook", icon: "fa-brands fa-facebook-f" },
  { id: 2, name: "Instagram", icon: "fa-brands fa-instagram" },
  { id: 3, name: "Youtube", icon: "fa-brands fa-youtube" },
  { id: 4, name: "Twitter", icon: "fa-brands fa-x-twitter" },
  { id: 5, name: "Linkedin", icon: "fa-brands fa-linkedin-in" },
]);

//************* Functions Template *************
const goBackMain = () => {
  router.push({
    name: "BlogPage",
  });
};

//************* Functions Computed *************
const articlesState = computed(() => articleStore.articles);
const articleState = computed(() => articleStore.article);
const loadingListArticleState = computed(() => articleStore.isLoadingPageList);
const loadingSingleArticleState = computed(
  () => articleStore.isLoadingPageSingle
);
// const loadingArticleState = computed(() => cate.isLoadingPage);

//**************** Functions API ****************
const goSocialMedia = async (social_id: number) => {
  socialMedia.value = social_id;
  // router.push({
  //   name: "BlogPublication",
  //   params: { publication: article.route },
  // });
};

const goSignIn = () => {
  router.push({ name: "SignInPage" });
};

//************* Functions LifeCycle *************
onMounted(async () => {
  await articleStore.getArticleStore(articleLS.value.id);
  await articleStore.getListArticlesStore();
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
  padding: 2rem 2rem;
  .list-articles {
    width: 350px;
    background-color: $grey-2;
    user-select: none;
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
  .card-body {
    padding: 1rem;
  }
}

.article-active {
  background-color: #264081 !important;
  color: #fff;
}

.image-publication {
  max-width: 400px;
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
@media (min-width: 1500px) {
  .section-body {
    padding: 2rem 6rem;
  }
}

@media (min-width: 1700px) {
  .section-body {
    padding: 2rem 8rem;
  }
}

@media (max-width: 1023px) {
  .section-body {
    padding: 2rem 1rem;
  }

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
