<template>
  <q-page>
    <div class="section-front">
      <div class="row">
        <!-- //++Slider++ -->
        <div class="col-12">
          <q-carousel
            animated
            v-model="slide"
            arrows
            infinite
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            class="slider-main"
          >
            <q-carousel-slide :name="1" img-src="@assets/img/imagen1.jpg" />
            <q-carousel-slide :name="2" img-src="@assets/img/imagen2.jpg" />
            <q-carousel-slide :name="3" img-src="@assets/img/imagen3.jpg" />
            <q-carousel-slide :name="4" img-src="@assets/img/imagen4.jpg" />
          </q-carousel>
        </div>
        <!-- //++ Search + Redes++ -->
        <div class="col-12 col-lg-10 column-search">
          <q-input
            dense
            outlined
            v-model="searchPage"
            type="text"
            class="input-search"
          >
            <template v-slot:append>
              <q-btn
                round
                dense
                flat
                :ripple="false"
                icon="fa-solid fa-search"
                size="0.8rem"
                class="q-no-hover"
              />
            </template>
          </q-input>
          <!-- //++ Redes ++ -->
          <div class="btn-redes">
            <q-btn
              round
              color="white"
              text-color="primary"
              href="https://www.facebook.com/gerenciageneralgorea"
              target="_blank"
            >
              <q-avatar size="45px">
                <q-icon name="fa-brands fa-facebook-f" size="1.5rem" />
              </q-avatar>
            </q-btn>
            <q-btn round color="white" text-color="primary">
              <q-avatar size="45px">
                <q-icon name="fa-brands fa-instagram" size="1.5rem" />
              </q-avatar>
            </q-btn>
            <q-btn
              round
              color="white"
              text-color="primary"
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
              text-color="primary"
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
              text-color="primary"
              href="https://www.linkedin.com/in/gerenciageneralgorea"
              target="_blank"
            >
              <q-avatar size="45px">
                <q-icon name="fa-brands fa-linkedin-in" size="1.5rem" />
              </q-avatar>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="section-body bg-main">
      <span>Lo más destacado</span>
    </div>
    <!-- //++ Destacado ++ -->
    <div class="row section-destacado">
      <div class="col-12 col-md-4">
        <div class="item-destacado">
          <div class="q-mr-sm">
            <q-icon name="fa-solid fa-angles-right" size="1.5rem" />
          </div>
          <div class="item-info">
            <span>Organización</span>
            <span>
              Acceda a datos sobre el portal y la gestión de solicitudes de
              acceso
            </span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="item-destacado">
          <div class="q-mr-sm">
            <q-icon name="fa-solid fa-angles-right" size="1.5rem" />
          </div>
          <div class="item-info">
            <span>Información desplazados de Amazonas</span>
            <span>
              Acceda a datos sobre el portal y la gestión de solicitudes de
              acceso
            </span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="item-destacado">
          <div class="q-mr-sm">
            <q-icon name="fa-solid fa-angles-right" size="1.5rem" />
          </div>
          <div class="item-info">
            <span>Portal en datos</span>
            <span>
              Acceda a datos sobre el portal y la gestión de solicitudes de
              acceso
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- // ++Cards++ -->
    <div class="row section-cards q-col-gutter-lg">
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-cat q-border-green">
          <q-card-section>
            <div class="text-h6">Registro de Transparencia</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <span>
              Trámites para la inscripción, conozca quién está inscrito y otra
              información sobre el registro.
            </span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-cat q-border-red">
          <q-card-section>
            <div class="text-h6">Registro de Transparencia</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <span>
              Trámites para la inscripción, conozca quién está inscrito y otra
              información sobre el registro.
            </span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-cat q-border-blue">
          <q-card-section>
            <div class="text-h6">Registro de Transparencia</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <span>
              Trámites para la inscripción, conozca quién está inscrito y otra
              información sobre el registro.
            </span>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!--  -->
    <div class="row section-cards q-col-gutter-lg">
      <div class="col-12 section-title">
        <span class="q-bl-main"></span>
        <span>Índice de información pública</span>
      </div>
      <!--  -->
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-public q-border-green">
          <q-card-section>
            <span>Contratos y Obra pública</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-public q-border-green">
          <q-card-section>
            <span>Contratos y Obra pública</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-public q-border-green">
          <q-card-section>
            <span>Contratos y Obra pública</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-public q-border-green">
          <q-card-section>
            <span>Contratos y Obra pública</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-public q-border-green">
          <q-card-section>
            <span>Contratos y Obra pública</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered flat class="card-info-public q-border-green">
          <q-card-section>
            <span>Contratos y Obra pública</span>
          </q-card-section>
        </q-card>
      </div>
      <!--  -->
      <div class="col-12">
        <div class="flex justify-center">
          <q-btn :ripple="false" color="main" size="1.2rem" unelevated>
            <span class="fw-bold">Mostrar más contenido</span>
          </q-btn>
        </div>
      </div>
      <!--  -->
      <div class="col-12">
        <q-card flat bordered class="card-reciente">
          <q-card-section class="section-title-reciente">
            <span>Lo más reciente</span>
          </q-card-section>
          <q-card-section class="section-info-reciente">
            <q-item>
              <q-item-section class="q-section-notice">
                <span> Información desplazados de Amazonas </span>
                <span>
                  El Departamento de Amazonas ha habilitado una red de puntos de
                  atención para facilitar a los...
                </span>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-section-notice">
                <span> Información desplazados de Amazonas </span>
                <span>
                  El Departamento de Amazonas ha habilitado una red de puntos de
                  atención para facilitar a los...
                </span>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-section-notice">
                <span> Información desplazados de Amazonas </span>
                <span>
                  El Departamento de Amazonas ha habilitado una red de puntos de
                  atención para facilitar a los...
                </span>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-section-notice">
                <span> Información desplazados de Amazonas </span>
                <span>
                  El Departamento de Amazonas ha habilitado una red de puntos de
                  atención para facilitar a los...
                </span>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
      <!--  -->
      <div class="col-12">
        <q-card flat bordered class="my-card">
          <q-card-section> logos </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- //++ Footer ++ -->
    <Footer />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// ++Componens
import Footer from "./components/Footer.vue";

//***************** Constants *****************
const router = useRouter();
const searchPage = ref<string>("");
const slide = ref<number>(1);
const autoplay = ref(true);

//************* Functions Template *************
const goSignIn = () => {
  router.push({ name: "SignInPage" });
};
</script>

<style lang="scss" scoped>
.container-footer {
  position: relative;
  padding: 2rem 4rem;
  color: #fff;
  .title-category {
    font-size: 1.2rem;
    font-weight: 300;
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

.section-front {
  // background-image: url("@assets/img/img-body.jpg");
  // height: 280px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  background-color: #eceff1;
  .row {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .column-search {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      .input-search {
        background-color: #fff;
      }
      .btn-redes {
        .q-btn {
          margin-left: 1rem;
        }
      }
    }
  }
}

.section-body {
  padding: 0.7rem;
  text-align: center;
  color: #fff;
  box-shadow: inset 0 4px 0 #ff4141;
  span {
    font-size: 1.5rem;
    font-weight: 300;
  }
}
.section-destacado {
  padding: 0 5rem;
  background-color: $grey-3;
  .item-destacado {
    display: flex;
    padding: 2rem 1rem;
    .item-info {
      display: flex;
      flex-direction: column;
      span {
        &:first-child {
          font-size: 1.1rem;
          font-weight: 300;
        }
      }
    }
    &:hover {
      background-color: #264081;
      color: #fff;
    }
  }
}

.section-cards {
  padding: 2rem 6rem;
  .card-info-cat {
    background-color: $grey-2;
    text-align: center;
    min-height: 180px;
    span {
      font-size: 1rem;
    }
  }
  .card-info-public {
    background-color: $grey-2;
    // text-align: center;
    min-height: 120px;
    span {
      font-size: 1.2rem;
    }
  }
}

.section-title {
  span {
    &:first-child {
      border-left: 0.5rem solid #264081;
      margin-right: 0.8rem;
    }
  }
  font-size: 2rem;
}

.card-reciente {
  padding: 0 0.5rem;
  .section-title-reciente {
    span {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  .section-info-reciente {
    padding-top: 0;
    .q-item {
      padding-left: 0;
      padding-right: 0;
      .q-section-notice {
        display: flex;
        flex-direction: column;
        span {
          &:first-child {
            font-size: 1.1rem;
            font-weight: 300;
            color: #264081;
            text-decoration: underline;
          }
          &:last-child {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

.q-border-green {
  border-top: 6px solid $green-4;
}
.q-border-red {
  border-top: 6px solid $red-4;
}
.q-border-blue {
  border-top: 6px solid $blue-4;
}

// *******************************************************
// ****************** MEDIA QUERYS ***********************
// *******************************************************
@media (max-width: 600px) {
  .section-front {
    display: flex;
    justify-content: center;
    align-items: center;
    .row {
      .slider-main {
        max-height: 200px;
      }
      .column-search {
        padding: 1rem;
        display: block;
        .input-search {
          background-color: #fff;
        }
        .btn-redes {
          display: flex;
          justify-content: space-around;
          margin-top: 1rem;
          .q-btn {
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }

  .section-destacado {
    padding: 0;
    .item-destacado {
      border-top: 1px solid #fff;
    }
  }

  .section-cards {
    padding: 1rem;
    margin-top: 2rem;
  }
  .section-title {
    padding-top: 1rem;
  }

  .section-cards {
    margin-top: 1rem;
  }

  .container-footer {
    padding: 1rem;
    .q-expansion-item {
      border-top: 1px solid #fff;
      .q-item {
        cursor: pointer;
      }
      &:last-child {
        border-bottom: 1px solid #fff;
      }
    }
  }

  .sub-header {
    padding: 1rem 0;
    flex-wrap: wrap;
  }
  .all-rights {
    padding-bottom: 1rem;
  }
}
</style>
