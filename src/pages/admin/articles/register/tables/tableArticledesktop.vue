<template>
  <!-- //******************** TABLE **************** -->
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">ID</th>
        <th class="text-right">Título</th>
        <th class="text-right">Subtítulo</th>
        <th class="text-right">Fecha de creación</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Título xxx</td>
        <td class="text-right">Subtítulos xxxx</td>
        <td class="text-right">11-11-2023 15:20:03</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
            <!-- //--View-- -->
            <q-icon
              name="fa-solid fa-eye"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Ver</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Edit-- -->
            <q-icon
              name="fa-solid fa-edit"
              color="primary"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Editar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Eliminar-- -->
            <q-icon
              name="fa-regular fa-trash-can"
              color="red"
              class="cursor-pointer"
              @click="opendialogDeleteArticle()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Título xxx</td>
        <td class="text-right">Subtítulos xxxx</td>
        <td class="text-right">11-11-2023 15:20:03</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
            <!-- //--View-- -->
            <q-icon
              name="fa-solid fa-eye"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Ver</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Edit-- -->
            <q-icon
              name="fa-solid fa-edit"
              color="primary"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Editar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Eliminar-- -->
            <q-icon
              name="fa-regular fa-trash-can"
              color="red"
              class="cursor-pointer"
              @click="opendialogDeleteArticle()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Título xxx</td>
        <td class="text-right">Subtítulos xxxx</td>
        <td class="text-right">11-11-2023 15:20:03</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
            <!-- //--View-- -->
            <q-icon
              name="fa-solid fa-eye"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Ver</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Edit-- -->
            <q-icon
              name="fa-solid fa-edit"
              color="primary"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Editar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Eliminar-- -->
            <q-icon
              name="fa-regular fa-trash-can"
              color="red"
              class="cursor-pointer"
              @click="opendialogDeleteArticle()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Título xxx</td>
        <td class="text-right">Subtítulos xxxx</td>
        <td class="text-right">11-11-2023 15:20:03</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
            <!-- //--View-- -->
            <q-icon
              name="fa-solid fa-eye"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Ver</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Edit-- -->
            <q-icon
              name="fa-solid fa-edit"
              color="primary"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Editar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Eliminar-- -->
            <q-icon
              name="fa-regular fa-trash-can"
              color="red"
              class="cursor-pointer"
              @click="opendialogDeleteArticle()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Título xxx</td>
        <td class="text-right">Subtítulos xxxx</td>
        <td class="text-right">11-11-2023 15:20:03</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
            <!-- //--View-- -->
            <q-icon
              name="fa-solid fa-eye"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Ver</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Edit-- -->
            <q-icon
              name="fa-solid fa-edit"
              color="primary"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Editar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Eliminar-- -->
            <q-icon
              name="fa-regular fa-trash-can"
              color="red"
              class="cursor-pointer"
              @click="opendialogDeleteArticle()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Título xxx</td>
        <td class="text-right">Subtítulos xxxx</td>
        <td class="text-right">11-11-2023 15:20:03</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
            <!-- //--View-- -->
            <q-icon
              name="fa-solid fa-eye"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Ver</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Edit-- -->
            <q-icon
              name="fa-solid fa-edit"
              color="primary"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Editar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Eliminar-- -->
            <q-icon
              name="fa-regular fa-trash-can"
              color="red"
              class="cursor-pointer"
              @click="opendialogDeleteArticle()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
  <!-- //++Pagination++ -->
  <q-pagination
    size="0.8rem"
    class="fles justify-end q-mt-md"
    v-model="currentPage"
    max="1"
    direction-links
    outline
    color="primary"
    active-design="unelevated"
    active-color="primary"
    active-text-color="white"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

// ++Props
defineProps({
  opendialogDeleteArticle: {
    type: Function,
    required: true,
  },
});

// ****************** Constants *****************
const currentPage = ref<number>(1);
</script>

<style lang="scss" scoped>
.q-table {
  tbody {
    td {
      height: 30px !important;
    }
  }
}
</style>
