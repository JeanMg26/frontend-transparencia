<template>
  <div class="flex column items-center q-mt-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72.1 106.59"
      class="register-not-found"
    >
      <title>icon-not-found</title>
      <g id="bbb58c13-09d3-41a3-981e-8115f520950a" data-name="Capa 2">
        <g id="a51b3659-fc9a-44b9-bf36-0cfcd73dae92" data-name="Capa 1">
          <path
            class="color-1"
            d="M11,92.58l-.7-87.3A4.25,4.25,0,0,1,14.57,1H51.45a4.24,4.24,0,0,1,3.1,1.34L69.31,18a4.28,4.28,0,0,1,1.15,2.88l.64,72a4.25,4.25,0,0,1-4.28,4.28l-51.58-.33A4.24,4.24,0,0,1,11,92.58Z"
          />
          <circle class="color-2" cx="42.11" cy="65.23" r="22.68" />
          <circle class="color-3" cx="42.11" cy="65.23" r="18.74" />
          <polygon
            class="color-2"
            points="34.22 54.38 42.11 62.27 50 54.38 52.96 57.34 45.07 65.23 52.96 73.11 50 76.07 42.11 68.18 34.22 76.07 31.26 73.11 39.15 65.23 31.26 57.34 34.22 54.38"
          />
          <polygon
            class="color-2"
            points="53.16 0.88 70.41 19.07 53.16 19.13 53.16 0.88"
          />
          <rect
            class="color-3"
            x="14.79"
            y="26.5"
            width="34"
            height="2"
            rx="1"
            transform="translate(63.58 55) rotate(-180)"
          />
          <rect
            class="color-3"
            x="14.79"
            y="12.5"
            width="34"
            height="2"
            rx="1"
            transform="translate(63.58 27) rotate(-180)"
          />
          <rect
            class="color-3"
            x="15.76"
            y="19.5"
            width="33.03"
            height="2"
            rx="1"
            transform="translate(64.55 41) rotate(180)"
          />
          <rect
            class="color-3"
            x="14.79"
            y="33.5"
            width="20.4"
            height="2"
            rx="1"
            transform="translate(49.98 69) rotate(-180)"
          />
          <rect
            class="color-2"
            x="-4.34"
            y="90.41"
            width="37.49"
            height="4.93"
            rx="2.24"
            transform="translate(-59.78 35.18) rotate(-43.31)"
          />
        </g>
      </g>
    </svg>
    <div class="q-mt-xs">
      <span class="q-label-l"> No se encontraron resultados </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// ++ Props
defineProps({
  width_icon: {
    type: String,
    required: false,
    default: "3.5rem",
  },
});

// ************ Constants ***************
</script>

<style lang="scss" scoped>
.register-not-found {
  width: v-bind(width_icon);
  .color-1 {
    fill: none;
    stroke: #3a7afe;
    stroke-miterlimit: 10;
    stroke-width: 4px;
  }
  .color-2 {
    fill: #3a7afe;
  }
  .color-3 {
    fill: #bbd2f9;
  }
}
span {
  // color: #000;
  font-size: 0.8rem;
}
</style>
