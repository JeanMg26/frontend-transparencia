<template>
  <!-- //******************** TABLE **************** -->
  <q-markup-table flat bordered>
    <thead class="bg-grey-2">
      <tr>
        <th class="text-left">Nombre de Usuario</th>
        <th class="text-left">Nombres Completos</th>
        <th class="text-left">Correo Electrónico</th>
        <th class="text-left">Estado</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="!listUsersState?.length">
        <tr>
          <td colspan="5">
            <NoResults />
          </td>
        </tr>
      </template>
      <template v-if="listUsersState?.length">
        <tr v-for="(user, index) in listUsersState" :key="index">
          <td class="text-left">{{ user.username }}</td>
          <td class="text-left">{{ user.name }}</td>
          <td class="text-left">{{ user.email }}</td>
          <td class="text-left">
            <span v-if="user.active == 1" class="text-positive">Activo</span>
            <span v-if="user.active == 0" class="text-red">Inactivo</span>
          </td>
          <!-- //++Actions++ -->
          <td class="text-right">
            <div class="q-gutter-x-md">
              <!-- //--Edit-- -->
              <q-icon
                name="fa-solid fa-edit"
                color="primary"
                class="cursor-pointer"
                @click="openDialogUpdateUser(user.id)"
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
                @click="openDialogDeleteUser(user)"
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
                @click="openDialogResetUser(user)"
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
      </template>
    </tbody>
    <!-- //++ INNER LOADING ++ -->
    <q-inner-loading :showing="loadingTableState">
      <q-spinner-bars size="35px" color="primary" />
    </q-inner-loading>
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
import { ref, computed } from "vue";
import { useUser } from "@stores/User";
import NoResults from "@components/others/NoResults.vue";

// ++Props
defineProps({
  openDialogUpdateUser: {
    type: Function,
    required: true,
  },
  openDialogDeleteUser: {
    type: Function,
    required: true,
  },
  openDialogResetUser: {
    type: Function,
    required: true,
  },
});

// ****************** Constants *****************
const userStore = useUser();
const currentPage = ref<number>(1);

//************* Functions Computed *************
const listUsersState = computed(() => userStore.users);
const loadingTableState = computed(() => userStore.isLoadingTable);
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
