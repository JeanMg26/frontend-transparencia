<template>
  <q-markup-table flat bordered>
    <thead>
      <tr>
        <th class="text-left">Nombre</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left">Categoria 1</td>
        <!-- //++ Actions ++ -->
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
              @click="openDialogDeleteCat()"
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
</template>

<script setup lang="ts">
// ++Props
defineProps({
  openDialogAddCat: {
    type: Function,
    required: true,
  },
  openDialogDeleteCat: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
