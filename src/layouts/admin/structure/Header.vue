<template>
  <q-header elevated>
    <q-toolbar class="justify-between">
      <q-btn
        v-if="jwtAcessState"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <!-- //++ Title ++ -->
      <q-toolbar-title v-if="!jwtAcessState">
        <q-avatar size="1.5rem">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <span class="text-header"> Administración </span>
      </q-toolbar-title>
      <!-- //++Log out++ -->
      <div v-if="jwtAcessState" class="logout">
        <q-icon name="fa-solid fa-circle-user" size="1.1rem" />
        <span>{{ profileState.name }}</span>
        <q-menu :offset="[10, 15]">
          <q-list style="min-width: 150px">
            <!-- //++Profile++ -->
            <q-item dense clickable v-close-popup :to="{ name: 'ProfilePage' }">
              <q-item-section>
                <div class="flex items-center q-py-sm">
                  <q-icon
                    name="fa-solid fa-user"
                    class="q-mr-xs"
                    size="0.8rem"
                  />
                  <span>Perfil</span>
                </div>
              </q-item-section>
            </q-item>
            <q-separator />
            <!-- //++LogOut++ -->
            <q-item dense clickable v-close-popup @click="onLogout">
              <q-item-section>
                <div class="flex items-center q-py-sm">
                  <q-icon
                    name="fa-solid fa-right-from-bracket"
                    class="q-mr-sm"
                    size="0.8rem"
                  />
                  <span>Salir</span>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { LocalStorage } from "quasar";
import { computed } from "vue";
import { useDrawer } from "@stores/Sidebar";
import { useRouter } from "vue-router";
import { useProfile } from "@stores/Profile";
import { useJWTstore } from "@stores/JWT";

// ++ Props
defineProps({
  jwtAcessState: {
    type: String,
    required: true,
  },
});

// ***************** Constants *****************
const router = useRouter();
const jwtStore = useJWTstore();
const leftDrawerStore = useDrawer();
const profileStore = useProfile();

// **************** Function Template **************
// ++ Toggle Drawer
function toggleLeftDrawer() {
  leftDrawerStore.toggleLeftDrawerStore();
}
// ++ LogOut
const onLogout = () => {
  router.push({ name: "SignInPage" });
  LocalStorage.remove("jwt_access");
  jwtStore.cleanJWTStore();
};

//************* Functions Computed *************
const profileState = computed(() => profileStore.profile);
</script>

<style lang="scss" scoped>
.text-header {
  font-size: 1.1rem;
  margin-left: 0.3rem;
}

.logout {
  display: flex;
  align-items: center;
  padding-right: 1rem;
  cursor: pointer;
  .q-icon {
    margin-right: 0.5rem;
  }
}
</style>
