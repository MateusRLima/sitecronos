<template>
<v-carousel class="carousel" hide-delimiter-background light>
    <v-carousel-item v-for="(banner, index) in banners" :key="index">
      <img height="450" width="90%" :src="banner.media_link" contain alt="Imagem de Banner" class="carousel-image" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "BannerCarousel",
  
  data() {
    return {
      loading: false,
      banners: [],
    }
  },

  mounted() {
    this.$axios.get("http://127.0.0.1:5050/banner/published").then(res => {
      this.banners = res.data.banners
    }).finally(() => {
      this.loading = false
    });
  },
}
</script>

<style lang="scss" scoped>

.v-carousel {
    overflow: hidden;
    position: relative;
    width: 100%;

  }
  .carousel-image{
    border-radius: 20px;
  }


</style>