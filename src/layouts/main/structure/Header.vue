<template>
  <q-header bordered reveal>
    <!-- //++ Logos ++ -->
    <div class="row">
      <div class="col-12 header-blog bg-white">
        <!-- //-------- Icon Menu Mobile -------- -->
        <div>
          <q-icon
            name="fa-solid fa-bars"
            size="1.5rem"
            class="icon-menu-mobile"
          >
            <q-menu square :offset="[0, 22]">
              <q-list class="list-menu-mobile">
                <q-item clickable v-close-popup>
                  <q-item-section>Transparencia en la comunidad</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Transparencia en la comunidad</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-icon>
          <q-img
            src="@assets/img/logo-transparencia.svg"
            class="img-logo-left"
            :no-spinner="true"
          />
        </div>
        <q-img
          src="@assets/img/logo-entidad.png"
          class="img-logo-right"
          :no-spinner="true"
        />
      </div>
      <!-- //++ Categories ++ -->
      <div v-if="$q.screen.width > 600" class="col-12 section-category">
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
import { useQuasar } from "quasar";

//***************** Constants *****************
const $q = useQuasar();
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
    min-width: 95vw !important;
  }
}
</style>
