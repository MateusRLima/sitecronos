<template>
  <v-container>
    <v-app-bar color="white" dense app fixed flat>
      <img src="@/assets/Logo.png" width="40" class=" image-home" @click="toHome" />
      <v-tabs class="ml-10" center-active color="#DFA433" show-arrows>
        <v-tab ac v-for="page in pages" :key="page.id" :to="page.route">{{ page.title }}</v-tab>
      </v-tabs>
      <v-btn small depressed color="#DFA433" @click="$refs.login.showLogin()"><v-icon small class="mr-2">mdi-login</v-icon>Login</v-btn>
      <LoginDialog ref="login"/>
    </v-app-bar>
  </v-container>
</template>

<script>
import LoginDialog from "@/components/LoginDialog.vue"

export default {
  name: 'NavHeader',

  data: () => ({
    login: false,
    pages: [
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

  components: {
    LoginDialog,
  },

  methods: {
    toHome() {
      this.$router.push("/").catch(() => { })
    },

    openTheDialog() {
      this.login = !this.login
    }

  }
}
</script>

<style lang="scss" scoped>
.image-home {
  cursor: pointer;
}
</style>