<template>
  <q-page v-if="!loadingPageState">
    <div class="row">
      <!-- //**************** HEADER ************* -->
      <div class="col-12 header-main">
        <div class="row">
          <!-- //**************** COLUMN LEFT ************* -->
          <div class="col-12 col-md-6 column-left">
            <div class="row">
              <!-- //++ Logo +  Menu ++ -->
              <div class="col-12 column-header">
                <q-img
                  src="@assets/img/main-page/logo.png"
                  class="img-logo"
                  style="max-width: 150px"
                />
                <div v-if="$q.screen.width > 1024" class="menu-item">
                  <!-- //++ Navbar ++ -->
                  <q-item class="cursor-pointer">
                    <q-item-section>
                      <q-item-label>inicio</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="cursor-pointer">
                    <q-item-section @click="goNosotros()">
                      <q-item-label>nosotros</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="cursor-pointer" :to="{ name: 'BlogPage' }">
                    <q-item-section>
                      <q-item-label>trabajo</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <!-- //------Icon Menu Mobile------ -->
                <div
                  v-if="$q.screen.width < 1024"
                  class="menu-mobile"
                  @click="showMenuMobile = !showMenuMobile"
                >
                  <q-icon name="fa-solid fa-bars"> </q-icon>
                </div>
              </div>
              <!-- //++ Menu Mobile++ -->
              <div
                v-if="$q.screen.width < 1024 && showMenuMobile"
                class="col-12"
              >
                <q-list bordered class="list-menu-mobile">
                  <q-item clickable>
                    <q-item-section>
                      <q-item-label>Inicio</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>
                      <q-item-label>Nosotros</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable :to="{ name: 'BlogPage' }">
                    <q-item-section>
                      <q-item-label>Trabajos</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <!-- //++ Header - Title ++ -->
              <div class="col-12 menu-title">
                <div>
                  <span> Gerencia General Gobierno Regional de Amazonas</span>
                </div>
                <div>
                  <span>
                    Seguiremos buscando el progreso de la región con el objetivo
                    de mejorar el estilo de vida de los ciudadanos que confiaron
                    en nuestra gestión.
                  </span>
                </div>
              </div>

              <!-- //++ Redes ++ -->
              <div class="col-12 menu-redes">
                <span class="title-welcome">Bienvenidos</span>
                <span class="title-redes"> Redes Sociales </span>
                <div class="btn-redes">
                  <q-btn
                    round
                    color="white"
                    href="https://www.facebook.com/gerenciageneralgorea"
                    target="_blank"
                  >
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-facebook-f" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn
                    round
                    color="white"
                    href="https://www.instagram.com/gerenciageneralgorea"
                    target="_blank"
                  >
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-instagram" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn
                    round
                    color="white"
                    href="https://www.youtube.com/@gerenciageneralgorea"
                    target="_blank"
                  >
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-youtube" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn
                    round
                    color="white"
                    href="https://twitter.com/GERENCIAGGOREA"
                    target="_blank"
                  >
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-x-twitter" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn
                    round
                    color="white"
                    href="https://www.linkedin.com/in/gerenciageneralgorea"
                    target="_blank"
                  >
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-linkedin-in" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                </div>
              </div>
              <!-- //++Menu Adicional++ -->
              <div class="col-12">
                <div class="menu-adicional">
                  <span class="menu-item" @click="goPrensa()">Prensa</span>
                  <span>|</span>
                  <span class="menu-item">BOCM</span>
                  <span>|</span>
                  <span class="menu-item">Atención al ciudadano</span>
                </div>
              </div>
            </div>
          </div>
          <!-- //**************** COLUMN RIGTH ************* -->
          <div class="col-12 col-md-6 column-rigth">
            <q-img src="@assets/img/main-page/gorea.png" />
          </div>
        </div>
      </div>
      <!-- //********************* BODY ******************* -->
      <!-- //++ Separator ++ -->
      <div class="col-12">
        <q-separator class="first-separator" />
        <q-separator class="second-separator" />
      </div>
      <!-- //++ BODY ++ -->
      <div class="col-12 column-body">
        <div class="row">
          <!-- //++ Title Activity ++ -->
          <div class="col-12">
            <div class="title-body">
              <span>Actividades</span>
            </div>
          </div>
          <!-- //++ News ++ -->
          <div class="col-12 column-news">
            <div class="row">
              <!-- //--First Activity-- -->
              <div class="col-12" :class="{ 'col-md-6': listActivityState[1] }">
                <template v-if="listActivityState[0]">
                  <q-img
                    :src="listActivityState[0].url_img"
                    class="first-image cursor-pointer"
                    @click="goActivity(listActivityState[1].id)"
                  >
                    <div class="absolute-bottom img-caption">
                      {{ listActivityState[0].title }}
                    </div>
                  </q-img>
                </template>
              </div>
              <!-- //--Second - Thirst Activity-- -->
              <div class="col-12 col-md-6">
                <div class="div">
                  <template v-if="listActivityState[1]">
                    <q-img
                      :src="listActivityState[1].url_img"
                      @click="goActivity(listActivityState[2].id)"
                      class="cursor-pointer"
                    >
                      <div class="absolute-bottom img-caption">
                        {{ listActivityState[1].title }}
                      </div>
                    </q-img>
                  </template>
                  <template v-if="listActivityState[2]">
                    <q-img
                      :src="listActivityState[2].url_img"
                      @click="goActivity(listActivityState[1].id)"
                      class="cursor-pointer"
                    >
                      <div class="absolute-bottom img-caption">
                        {{ listActivityState[2].title }}
                      </div>
                    </q-img>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <!-- //++ Title Informacion General ++ -->
          <div class="col-12">
            <div class="title-body">
              <span>Información institucional</span>
            </div>
          </div>
          <!-- //++ Informacion General ++ -->
          <div class="col-12 column-info">
            <div class="row q-col-gutter-x-xl">
              <!-- //!!Que hacemos!! -->
              <div class="col-12 col-lg-6">
                <span class="title-info">¿Qué hacemos?</span>
                <div class="q-mt-md">
                  <p>
                    Somos un organismo público descentralizado que, de forma
                    concertada, promueve el desarrollo integral y sostenible de
                    la región Amazonas. Mantenemos una cultura de ética, basada
                    en el fomento y la práctica de los valores de honestidad,
                    equidad, transparencia y solidaridad, al utilizar los
                    recursos y las competencias asignadas con eficiencia y
                    eficacia.
                  </p>
                  <p>
                    Contribuimos al bienestar de nuestra población y, para ello,
                    organizamos y conducimos la gestión pública regional, a fin
                    de lograr el desarrollo sostenible de nuestra región en el
                    marco de las políticas nacionales y sectoriales.
                  </p>
                  <p>
                    Promovemos la inversión pública y privada, el empleo, y
                    garantizamos el ejercicio pleno de los derechos e igualdad
                    de oportunidades de sus habitantes.
                  </p>
                </div>
              </div>
              <!-- //!!Mision y Vision -->
              <div class="col-12 col-lg-6">
                <div>
                  <span class="title-info">Misión</span>
                  <p>
                    Promover el desarrollo social, económico y ambiental en el
                    departamento de Amazonas de manera sostenible, competitiva,
                    integral e igualitaria.
                  </p>
                </div>
                <div>
                  <span class="title-info">Visión</span>
                  <p>
                    Ser una sociedad multicultural, inclusiva, así como un
                    destino turístico, generador de energías limpias y con
                    economía verde diversificada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //++ FOOTER ++ -->
      <div class="col-12 column-footer">
        <span>© Copyright Gobierno Regional de Amazonas 2023</span>
      </div>
    </div>
  </q-page>
  <!-- //************** INNER LOADING ************* -->
  <q-inner-loading :showing="loadingPageState">
    <q-spinner-bars size="35px" color="primary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useActivity } from "@stores/Activity";

//***************** Constants *****************
const router = useRouter();
const showMenuMobile = ref<boolean>(false);
const activityStore = useActivity();

//************* Functions Template *************
const goNosotros = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

const goPrensa = () => {
  router.push({ name: "BlogPrensa" });
};

const goActivity = (id_Activity: number) => {
  router.push({ name: "BlogActivity", params: { activity: id_Activity } });
};

//************* Functions Computed *************
const listActivityState = computed(() => activityStore.activities);
const loadingPageState = computed(() => activityStore.isLoadingPageList);

//************* Functions LifeCycle *************
onMounted(async () => {
  await activityStore.getListActivitiesStore(1);
});
</script>

<style lang="scss" scoped>
.header-main {
  background-color: #1b3674;
  max-height: 83vh;
  overflow: hidden;
  .column-left {
    padding-top: 1rem;
    padding-left: 6.5rem;

    .column-header {
      display: flex;
      .menu-item {
        display: flex;
        margin-left: 1rem;
        .q-item {
          font-size: 1rem;
          padding-right: 2.8rem;
          text-transform: uppercase;
          color: #fff;
          &:hover {
            color: $indigo-2;
          }
        }
      }
    }
    .menu-title {
      margin-top: 2rem;
      padding-right: 3rem;
      div {
        &:first-child {
          span {
            font-size: 2.7rem;
            color: #fff;
            font-weight: 300;
            line-height: 3rem;
          }
        }
        &:last-child {
          margin-top: 1rem;
          span {
            color: #fff;
            font-size: 0.9rem;
          }
        }
      }
    }
    .menu-redes {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title-welcome {
        font-size: 2.2rem;
        color: #fff;
        font-weight: 300;
      }
      .title-redes {
        color: #fff;
        background-color: #c51e1f;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }
      .btn-redes {
        margin-top: 1.5rem;
        .q-btn {
          margin-right: 0.5rem;
        }
        .q-icon {
          color: #1b3674;
          &:hover {
            color: #2640c8;
          }
        }
      }
    }
    .menu-adicional {
      margin-top: 1.5rem;
      color: #fff;
      font-size: 1rem;
      span {
        margin-right: 1rem;
        &.menu-item {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
          cursor: pointer;
          &:hover {
            color: $indigo-2;
          }
        }
      }
    }
  }
}

.menu-mobile {
  .q-icon {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: $grey-4;
    }
  }
}

// ++ Body
.q-separator {
  &.first-separator {
    margin-top: 1rem;
    background: #1b3674;
    height: 1rem;
  }
  &.second-separator {
    margin-top: 0.5rem;
    background: #1b3674;
    height: 0.5rem;
  }
}

.column-body {
  // background-image: url("@assets/img/main-page/pattern02.jpg");
  background-color: #fff;
  // padding-bottom: 2rem;
  .title-body {
    margin-top: 2rem;
    text-align: center;
    span {
      background: #1b3674;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 300;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
    }
  }
  .column-news {
    margin-top: 2rem;
    padding-left: 7rem;
    padding-right: 7rem;
    .row {
      border: 2px solid #1b3674;
      .first-image {
        height: 100%;
        position: relative;
      }
      .img-caption {
        text-transform: uppercase;
        font-size: 1.1rem;
        text-align: center;
        font-style: italic;
        background-color: rgba(38, 64, 129, 0.5);
      }
    }
  }
  .column-info {
    margin-top: 2rem;
    background-color: $grey-2;
    padding: 2rem 4rem;
    .title-info {
      font-size: 2rem;
      font-weight: 300;
      color: #1b3674;
    }
    p {
      font-size: 1rem;
      text-align: justify;
    }
  }
}

.column-footer {
  background: #ff4141;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #fff;
    font-size: 1rem;
  }
}

// ***************** Media Querys ***************
@media (min-width: 1400px) {
  .column-left {
    width: 45% !important;
  }

  .column-rigth {
    width: 55% !important;
  }
}

@media (max-width: 1024px) {
  .header-main {
    max-height: 110vh !important;
    .column-left {
      padding-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      .column-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img-logo {
          width: 120px;
        }
      }

      .menu-title {
        margin-top: 1.5rem;
        padding-right: 1rem;
        div {
          &:first-child {
            text-align: center;
            span {
              font-size: 1.8rem;
              line-height: 2rem;
            }
          }
          &:last-child {
            text-align: center;
            span {
              font-size: 0.9rem;
            }
          }
        }
      }

      .menu-redes {
        text-align: center;
      }
    }

    .column-rigth {
      margin-top: 1.5rem;
    }
  }

  .column-body {
    .column-news {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      .row {
        .img-caption {
          font-size: 0.8rem !important;
        }
      }
    }
  }

  .column-footer {
    span {
      font-size: 0.8rem;
    }
  }

  //
  .list-menu-mobile {
    margin-top: 1rem;
    background-color: #ff4141;
    margin-left: -1rem;
    margin-right: -1rem;
    user-select: none;
    text-align: center;
    .q-item {
      &:not(:last-child) {
        border-bottom: 1px solid #fff;
      }
      &:hover {
        background-color: #6d0101;
      }
    }
    .q-item__label {
      color: #fff;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
}

@media (max-width: 600px) {
  .column-body {
    .column-info {
      padding: 1rem 2rem;
      .title-info {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
