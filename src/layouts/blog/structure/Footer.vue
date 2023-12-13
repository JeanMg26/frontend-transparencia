<template>
  <q-footer class="container-footer bg-danger">
    <!-- //************* CATEGORIES ******************** -->
    <div class="row">
      <div class="col-2">
        <span class="title-category">Categoria 1</span>
        <q-list dense class="q-mt-md">
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 1 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 3 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 4 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 5 </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!--  -->
      <div class="col-2">
        <span class="title-category">Categoria 2</span>
        <q-list dense class="q-mt-md">
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 1 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 3 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 4 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 5 </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <!--  -->
      <div class="col-2">
        <span class="title-category">Categoria 3</span>
        <q-list dense class="q-mt-md">
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 1 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 3 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 4 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 5 </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <!--  -->
      <div class="col-2">
        <span class="title-category">Categoria 4</span>
        <q-list dense class="q-mt-md">
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 1 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 3 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 4 </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="title-subcategory">
            <q-item-section>
              <q-item-label> Subategora 5 </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <!-- //++ Separator ++ -->
    <div class="col-12">
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
        <span>Accesibilidad</span>
      </div>
    </div>
    <div class="text-center q-mt-md">
      <span>Todos los Portales de la Comunidad de Madrid</span>
    </div>
  </q-footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container-footer {
  position: relative;
  padding: 2rem 4rem;
  .title-category {
    font-size: 1.2rem;
    font-weight: 500;
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
</style>
