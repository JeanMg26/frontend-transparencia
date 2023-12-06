<template>
  <!-- //******************** TABLE **************** -->
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">Nombre de Usuario</th>
        <th class="text-left">Nombres Completos</th>
        <th class="text-left">Correo Electrónico</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left">Boris</td>
        <td class="text-left">Boris Fisher</td>
        <td class="text-left">boris@gmail.com</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
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
              @click="openDialogDeleteUser()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Reseat-- -->
            <q-icon
              name="fa-solid fa-power-off"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Resetar Contraseña</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">Boris</td>
        <td class="text-left">Boris Fisher</td>
        <td class="text-left">boris@gmail.com</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
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
              @click="openDialogDeleteUser()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Reseat-- -->
            <q-icon
              name="fa-solid fa-power-off"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Resetar Contraseña</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">Boris</td>
        <td class="text-left">Boris Fisher</td>
        <td class="text-left">boris@gmail.com</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
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
              @click="openDialogDeleteUser()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Reseat-- -->
            <q-icon
              name="fa-solid fa-power-off"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Resetar Contraseña</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">Boris</td>
        <td class="text-left">Boris Fisher</td>
        <td class="text-left">boris@gmail.com</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
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
              @click="openDialogDeleteUser()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Reseat-- -->
            <q-icon
              name="fa-solid fa-power-off"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Resetar Contraseña</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">Boris</td>
        <td class="text-left">Boris Fisher</td>
        <td class="text-left">boris@gmail.com</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
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
              @click="openDialogDeleteUser()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Reseat-- -->
            <q-icon
              name="fa-solid fa-power-off"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Resetar Contraseña</span>
              </q-tooltip>
            </q-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">Boris</td>
        <td class="text-left">Boris Fisher</td>
        <td class="text-left">boris@gmail.com</td>
        <!-- //++Actions++ -->
        <td class="text-right">
          <div class="q-gutter-x-md">
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
              @click="openDialogDeleteUser()"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Eliminar</span>
              </q-tooltip>
            </q-icon>
            <!-- //--Reseat-- -->
            <q-icon
              name="fa-solid fa-power-off"
              color="positive"
              class="cursor-pointer"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <span>Resetar Contraseña</span>
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
  openDialogDeleteUser: {
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
