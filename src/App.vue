<template>
  <v-app>
    <v-main class="mb-10">
      <NavHeader />
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

.v-tab {
  text-transform: none !important;
}

.v-btn {
  text-transform: none !important;
  border-radius: 12px !important;
  color: #4E4E4E !important;
  font-weight: 700;
}

.v-application--is-ltr .v-window__prev,
.v-window__next {
  background: transparent !important;
  border-radius: 50%;
  position: absolute;
  margin: 0px 0px;
  top: calc(50% - 20px);
  z-index: 1;
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
