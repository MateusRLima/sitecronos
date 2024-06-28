<template>
  <v-app>
    <NavHeader />
    <v-main class="mb-10">
      <router-view />
    </v-main>
    <FooterContact />
  </v-app>
</template>

<script>

import NavHeader from "@/components/NavHeader.vue"
import FooterContact from "./components/FooterContact.vue";

export default {

  data: () => ({

  }),

  components: {
    NavHeader,
    FooterContact
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-carousel__controls {
  align-items: center;
  background: transparent !important;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  width: 100%;
  z-index: 1;

  .theme--dark.v-btn.v-btn--icon {
    color: #ADC1C7;
  }
}

.v-tabs-slider-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  margin: 0 !important;
  position: absolute;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  z-index: 1;

  .v-tabs-slider {
    background-color: currentColor;
    height: 0%;
    width: 50%;
  }
}
</style>
