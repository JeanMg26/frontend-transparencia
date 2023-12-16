<template>
  <q-drawer v-model="leftDrawerState" show-if-above bordered :breakpoint="1024">
    <q-list>
      <q-item-label header class="text-center">
        <span class="header-title">Menu de Administración</span>
      </q-item-label>
      <!-- //++ List Menu ++ -->
      <template v-for="(item, index) in listMenu" :key="index">
        <q-item
          clickable
          :to="{ name: item.nameRoute }"
          class="list-menu"
          @click="itemExpanded = false"
        >
          <q-item-section v-if="item.icon" avatar class="icon-sidemenu">
            <q-icon :name="item.icon" size="1rem" style="width: 10px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <!-- //++Expansion++ -->
      <q-expansion-item
        v-model="itemExpanded"
        header-class="item-expand"
        ref="itemExpantion"
      >
        <template v-slot:header>
          <div class="flex items-center">
            <q-icon
              name="fa-regular fa-file-lines"
              size="1rem"
              class="q-mr-md"
            />
            <span>Artículos</span>
          </div>
        </template>
        <!-- //--Category-- -->
        <q-item clickable :to="{ name: 'CategoryPage' }">
          <q-item-section>
            <q-item-label class="q-pl-30">
              <q-icon name="fa-solid fa-circle" size="0.4rem" class="q-mr-sm" />
              <span class="q-item-text">Categorias </span>
            </q-item-label>
          </q-item-section>
        </q-item>
        <!-- //--Sub Category-- -->
        <q-item clickable :to="{ name: 'SubCategoryPage' }">
          <q-item-section>
            <q-item-label class="q-pl-30">
              <q-icon name="fa-solid fa-circle" size="0.4rem" class="q-mr-sm" />
              <span class="q-item-text">SubCategorias </span>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'ListArticlePage' }">
          <q-item-section>
            <q-item-label class="q-pl-30">
              <q-icon name="fa-solid fa-circle" size="0.4rem" class="q-mr-sm" />
              <span class="q-item-text">Publicaciones</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
    <!-- //++Button++ -->
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { listMenu } from "@router/route-list";
import { useDrawer } from "@stores/Sidebar";

// ***************** Constants ******************
const itemExpanded = ref<boolean>(false);
const itemExpantion = ref<any>(null);
const drawerStore = useDrawer();

// ***************** Functions Computed ****************
const leftDrawerState = computed({
  get() {
    return drawerStore.leftDrawer;
  },
  set(value) {
    drawerStore.leftDrawer = value;
  },
});
</script>

<style lang="scss" scoped>
.header-title {
  font-size: 1rem;
  font-weight: 500;
}
</style>
