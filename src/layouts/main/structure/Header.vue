<template>
  <q-header reveal :reveal-offset="1500" class="header">
    <q-toolbar>
      <q-img
        src="@assets/img/main-page/logo.png"
        sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
        style="max-width: 150px; max-height: 150px"
      />
      <!-- //++ Menu Items ++ -->
      <div class="item-menu">
        <span>inicio</span>
        <span>nosotros</span>
        <span>trabajo</span>
      </div>
    </q-toolbar>
    <!-- <span>inicio</span> -->
  </q-header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  background-image: url("@assets/img/main-page/pattern.png");
}

.item-menu {
  display: flex;
  width: 500px;
  margin-left: 2rem;
  span {
    text-transform: uppercase;
    font-size: 1rem;
    margin-right: 4rem;
  }
}
</style>
