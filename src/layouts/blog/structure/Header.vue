<template>
  <q-header bordered reveal class="bg-header">
    <!-- //++ Logos ++ -->
    <div class="row">
      <div class="col-12 header-blog bg-white">
        <q-img src="@assets/img/logo-transparencia.svg" class="img-logo-left" />
        <q-img src="@assets/img/logo-entidad.png" class="img-logo-right" />
      </div>
      <!-- //++ Categories ++ -->
      <div class="col-12 section-category">
        <div class="row">
          <div class="col-2">
            <q-item clickable class="item-category q-no-hover">
              <q-item-section>
                <q-item-label>transparencia en la comunidad</q-item-label>
              </q-item-section>
              <!-- //-- Menu -- -->
              <q-menu square class="q-menu-subcategory">
                <q-list bordered>
                  <q-item
                    clickable
                    v-close-popup
                    class="item-subcategory q-no-hover"
                  >
                    <q-item-section>
                      <q-item-label>Que es transparencia</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-popup
                    class="item-subcategory q-no-hover"
                  >
                    <q-item-section>
                      <q-item-label>Evaluando transparencia</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-popup
                    class="item-subcategory q-no-hover"
                  >
                    <q-item-section>
                      <q-item-label>Sujetos obligados</q-item-label>
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
import { ref } from "vue";
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
    user-select: none;
    .q-item__label {
      text-transform: uppercase;
      color: $grey-9;
      font-size: 1rem;
      font-weight: 500;
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

.q-menu-subcategory {
  .q-list {
    min-width: 250px;
    .item-subcategory {
      .q-item__label {
        font-size: 1rem;
        font-weight: 500;
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
}
</style>
