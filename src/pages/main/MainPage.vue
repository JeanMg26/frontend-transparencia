<template>
  <q-page>
    <div class="row">
      <div class="col-12 header-main">
        <div class="row">
          <!-- //**************** COLUMN LEFT ************* -->
          <div class="col-6 column-left">
            <div class="row">
              <!-- // ++ Logo +  Menu ++  -->
              <div class="col-12 flex items-center">
                <q-img
                  src="@assets/img/main-page/logo.png"
                  sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
                  style="max-width: 150px; max-height: 150px"
                />
                <div class="menu-item">
                  <!-- //++ Navbar ++ -->
                  <q-item class="cursor-pointer">
                    <q-item-section>
                      <q-item-label>inicio</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="cursor-pointer">
                    <q-item-section>
                      <q-item-label>nosotros</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="cursor-pointer">
                    <q-item-section>
                      <q-item-label>trabajo</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <!-- // ++ Menu - Title ++ -->
              <div class="col-12 menu-title">
                <div>
                  <span> GOREA GERENCIA GENERAL </span>
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
                <div>
                  <span> Redes Sociales </span>
                </div>
                <div class="btn-redes">
                  <q-btn round color="white">
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-facebook-f" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn round color="white">
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-instagram" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn round color="white">
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-tiktok" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                  <q-btn round color="white">
                    <q-avatar size="45px">
                      <q-icon name="fa-brands fa-x-twitter" size="1.5rem" />
                    </q-avatar>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
          <!-- //**************** COLUMN RIGTH ************* -->
          <div class="col-6 column-rigth">
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
          <!-- //++ Title ++ -->
          <div class="col-12">
            <div class="title-body">
              <span>Actividades</span>
            </div>
          </div>
          <!-- //++ News ++ -->
          <div class="col-12 column-news">
            <div class="row">
              <div class="col-6">
                <q-img src="@assets/img/main-page/img-01.jpg">
                  <div class="absolute-bottom img-caption">
                    GERENTE GENERAL REALIZA ENTREGA DE PRESENTES Y UN
                    RECONOCIMIENTO A JÓVEN ATLETA AMAZONENSE
                  </div>
                </q-img>
              </div>
              <div class="col-6">
                <div class="div">
                  <q-img src="@assets/img/main-page/img-02.jpg">
                    <div class="absolute-bottom img-caption">
                      GERENTE GENERAL PRESENTÓ AL CONSEJO REGIONAL LOS NUEVOS
                      LINEAMIENTOS ESTRATÉGICOS INSTITUCIONALES
                    </div>
                  </q-img>
                  <q-img src="@assets/img/main-page/img-03.jpg">
                    <div class="absolute-bottom img-caption">
                      GERENTE GENERAL SUPERVISA AVANCES EN CONSTRUCCIÓN DEL
                      NUEVO HOSPITAL DE RODRÍGUEZ DE MENDOZA
                    </div>
                  </q-img>
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
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-main {
  background-image: url("@assets/img/main-page/pattern.png");
  max-height: 83vh !important;
  overflow: hidden;
  .column-left {
    padding-top: 1rem;
    padding-left: 6.5rem;

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
    .menu-title {
      margin-top: 3.5rem;
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
      margin-top: 4rem;
      div {
        &:first-child {
          span {
            color: #fff;
            background-color: #c51e1f;
            padding: 0.5rem;
          }
        }
      }
      .btn-redes {
        margin-top: 1.5rem;
        .q-btn {
          margin-right: 0.5rem;
        }
        .q-icon {
          color: #264081;
          &:hover {
            color: #2640c8;
          }
        }
      }
    }
  }
}

// ++ Body
.q-separator {
  &.first-separator {
    margin-top: 1rem;
    background: #264081;
    height: 1rem;
  }
  &.second-separator {
    margin-top: 0.5rem;
    background: #264081;
    height: 0.5rem;
  }
}

.column-body {
  background-image: url("@assets/img/main-page/pattern02.jpg");
  padding-bottom: 2rem;
  .title-body {
    margin-top: 3rem;
    text-align: center;
    span {
      background: #264081;
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
      border: 2px solid #264081;
      .img-caption {
        text-transform: uppercase;
        font-size: 1.1rem;
        text-align: center;
        font-style: italic;
        background-color: rgba(38, 64, 129, 0.5);
      }
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
</style>
