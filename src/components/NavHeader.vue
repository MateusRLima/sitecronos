<template>
  <v-container>
    <v-app-bar color="white" dense app fixed flat>
      <img src="@/assets/Logo.png" width="40" class="mr-10 image-home" @click="toHome" />
      <v-tabs class="ml-10" center-active color="#DFA433" show-arrows>
        <v-tab ac v-for="page in pages" :key="page.id" :to="page.route">{{ page.title }}</v-tab>
      </v-tabs>
      <v-btn href="https://portalcronos.com.br/v2/ControloAcesso/login" small depressed color="#DFA433">Login</v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>

export default {
  name: 'NavHeader',

  data: () => ({
    pages: [
      {
        id: 1,
        title: "Sobre o Portal",
        route: "/sobre"
      },
      {
        id: 2,
        title: "Suporte",
        route: "/suporte"
      },
      {
        id: 3,
        title: "Fale Conosco",
        route: "/contato"
      },
      {
        id: 4,
        title: "Perguntas Frequentes",
        route: "/perguntas"
      },
    ],
  }),

  methods: {
    toHome(){
      this.$router.push("/").catch(()=>{})
    }
  }
}
</script>

<style lang="scss" scoped>
.image-home{
  cursor: pointer;
}

</style>