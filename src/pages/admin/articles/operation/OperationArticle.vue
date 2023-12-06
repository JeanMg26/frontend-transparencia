<template>
  <q-page padding>
    <!-- //************** Header ************** -->
    <div class="q-mb-md">
      <div class="container-link q-mb-md">
        <router-link :to="{ name: 'ListArticlePage' }">
          <q-icon
            name="fa-solid fa-chevron-left"
            size="0.7rem"
            class="q-mr-xs"
          />
          <span> Regresar </span>
        </router-link>
      </div>
      <span class="text-h6"> Añadir una publicación </span>
    </div>
    <q-card flat bordered class="card-article">
      <q-card-section>
        <q-form @submit="onSubmitSection">
          <div class="row">
            <!-- //++Title++ -->
            <div class="col-12">
              <span class="q-label-input">Título</span>
              <q-input
                dense
                outlined
                v-model="dataSend.title"
                type="text"
                placeholder="Ingresar el título"
                class="q-mt-xs"
              />
            </div>
            <!-- //++Sub Title++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Subtítulo</span>
              <q-input
                outlined
                autogrow
                dense
                rows="2"
                v-model="dataSend.subtitle"
                type="textarea"
                placeholder="Ingresar el subtítulo"
                class="q-mt-xs"
              />
            </div>
            <!-- //++Editor++ -->
            <div class="col-12 q-mt-md">
              <span class="q-label-input">Cuerpo de la publicación</span>
              <q-editor
                v-model="dataSend.body"
                class="q-mt-xs"
                :definitions="{
                  upload: {
                    tip: 'Subir Imagen',
                    icon: 'cloud_upload',
                    label: 'Upload',
                    handler: dataSend.image,
                  },
                }"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify'],
                    },
                  ],
                  ['bold', 'italic', 'strike', 'underline'],
                  ['upload', 'save'],
                ]"
              />
            </div>
            <!-- //++Buttons Actions++ -->
            <div class="col-12 q-mt-md flex justify-center">
              <q-btn
                no-caps
                unelevated
                color="primary"
                label="Agregar publicación"
                type="submit"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useQuasar } from "quasar";

// ********************* Constants ********************+
const $q = useQuasar();

const dataSend = reactive({
  title: "",
  subtitle: "",
  image: "",
  body: "",
});

//************* Functions Template *************
const onSubmitSection = async () => {
  console.log(dataSend.body);
};
</script>

<style lang="scss" scoped>
.container-link {
  a {
    color: $primary !important;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
  }
}
</style>
