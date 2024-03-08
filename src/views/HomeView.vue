<template>
  <v-container>
    <v-row>
      <v-divider inset class="mb-10"></v-divider>
    </v-row>
    <v-row>
      <v-carousel cycle :show-arrows="false">
        <v-carousel-item>
          <v-img src="@/assets/Banner.png"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="@/assets/Banner.png"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',

}
</script>

<style lang="scss" scoped>

</style>
