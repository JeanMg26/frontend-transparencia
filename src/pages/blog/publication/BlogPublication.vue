<template>
  <q-page>
    <div class="header-publication">
      <span>Página principal</span>
      <q-icon name="fa-solid fa-chevron-right" size="0.6rem" />
      <span>{{ subcategoryLS.name }}</span>
    </div>
    <!-- //++Body++ -->
    <div class="section-body">
      <div class="row q-col-gutter-x-lg">
        <div class="col-4">
          <q-list bordered class="list-subcat">
            <q-item
              v-for="(subcat, index) in subcategoriesState"
              :key="index"
              clickable
              :active="subcat.id == subcategoryLS.id"
              active-class="subcat-active"
            >
              <q-item-section>
                <span>{{ subcat.name }}</span>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-8">Notice</div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { useSubcategory } from "@stores/Subcategory";
import { computed, onMounted, ref } from "vue";
import { useArticle } from "@stores/Article";

//***************** Constants *****************
const $q = useQuasar();
const subcategoryStore = useSubcategory();
const subcategoryLS = ref<any>($q.localStorage.getItem("subcat"));
const publicationStore = useArticle();

//************* Functions Computed *************
const subcategoriesState = computed(() => subcategoryStore.subcategories);
// const subcategoriesState = computed(() => subcategoryStore.subcategories);

//************* Functions LifeCycle *************
onMounted(async () => {
  await subcategoryStore.getSubcategoryStore(subcategoryLS.id);
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
  .list-subcat {
    width: 300px;
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

.subcat-active {
  background-color: #264081 !important;
  color: #fff;
}
</style>
