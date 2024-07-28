<template>
  <div>
    <v-app-bar color="white" app fixed flat height="100">
      <v-container fluid>
        <v-row align="center" no-gutters>
          <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-col cols="auto">
            <img src="@/assets/Logo.png" width="75" class="ml-8 image-home" @click="toHome" />
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-none d-md-flex" md="auto">
            <v-tabs centered color="#DFA433" show-arrows>
              <v-tab active-class="active-tab" v-for="page in pages" :key="page.id" :to="page.route">{{ page.title
                }}</v-tab>
            </v-tabs>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn depressed color="#DFA433" @click="$refs.login.showLogin()" class="px-12">Entrar</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <LoginDialog ref="login" />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="d-md-none">
      <v-list>
        <v-list-item v-for="page in pages" :key="page.id" @click="navigateTo(page.route)">
          <v-list-item-content>{{ page.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import LoginDialog from "@/components/LoginDialog.vue"

export default {
  name: 'NavHeader',

  data: () => ({
    drawer: false,
    login: false,
    pages: [
      {
        id: 1,
        title: "Sobre o portal",
        route: "/"
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

  components: {
    LoginDialog,
  },

  methods: {
    toHome() {
      this.$router.push("/").catch(() => { })
    },

    openTheDialog() {
      this.login = !this.login
    },

    navigateTo(route) {
      this.$router.push(route).catch(() => { })
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
.image-home {
  cursor: pointer;
}

.active-tab {
  font-weight: bolder;
  color: #686868;
}

@media (max-width: 960px) {
  .v-tabs {
    display: none;
  }

  .v-app-bar-nav-icon {
    display: block;
  }
}

.v-tabs {
  flex: 1;
  justify-content: center;
}
</style>
