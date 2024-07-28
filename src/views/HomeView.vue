<template>
  <v-container class="px-15">
    <v-row class="mt-10">
      <banner-carousel class="carousel" />
    </v-row>
    <v-row class="mt-10">
      <v-col align="left">
        <p>O seu negócio precisa</p>
        <h2>de gestão de compras</h2>
      </v-col>
      <v-col>
        <img width="300px" height="300px" src="@/assets/HomeImg.jpg" class="home-img"/>
      </v-col>
    </v-row>
    <v-divider class="mt-10"></v-divider>
    <v-row class="text-left" ref="content">
      <v-col class="px-0">
        <h1 class="mt-10 mb-5">Novidades</h1>
        <content-virtual />
      </v-col>
    </v-row>
    <v-divider class="mt-10"></v-divider>
    <v-row class="text-left" justify="center" ref="timeline">
      <v-col class="px-0">
        <h1 class="mt-10 mb-5">Um Portal de compras completo</h1>
        <process-timeline />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BannerCarousel from '@/components/BannerCarousel.vue';
import ProcessTimeline from '@/components/ProcessTimeline.vue';
import ContentVirtual from '@/components/ContentVirtual.vue';


export default {
  name: 'HomeView',
  data() {
    return {

    }
  },
  components: {
    BannerCarousel,
    ContentVirtual,
    ProcessTimeline
  },

}
</script>

<style lang="scss" scoped>
.home-img{
  border-radius: 20px;
}
</style>
