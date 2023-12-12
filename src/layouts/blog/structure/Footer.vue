<template>
  <q-footer>
    <!-- //************* CATEGORIES ******************** -->
    <div class="row container-footer">
      <div class="col-4">
        <span class="title-category">Transparencia en la Comunidad</span>
        <q-list>
          <q-item>
            <q-item-section>
              <q-label-item class="cursor-pointer"> Subategora 1 </q-label-item>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="text-center">
      <span>Todos los Portales de la Comunidad de Madrid</span>
    </div>
  </q-footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container-footer {
  padding: 1rem 4rem;
  .title-category {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
