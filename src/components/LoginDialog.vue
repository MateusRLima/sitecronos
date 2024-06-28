<template>
  <v-dialog v-model="loginDialog" max-width="290">
    <v-card class="pb-5">
      <v-card-title class="text-center">
        <p>Autenticação de usuário</p>
      </v-card-title>

      <v-card-text>
        <v-text-field dense outlined color="#DFA433" label="Login"></v-text-field>
        <v-text-field class="mb-2" hide-details dense outlined color="#DFA433" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" label="Senha"></v-text-field>
        <v-btn x-small text color="#DFA433">Esqueceu a senha?</v-btn>
      </v-card-text>
      
      <v-card-actions class="px-6">
        <v-btn outlined small color="#DFA433" dark @click="loginDialog = false">
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn small color="#DFA433" dark @click="loginDialog = false">
          Acessar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",

  data() {
    return {
      loginDialog: false,
      showPassword: false,
    }
  },

  methods: {
    showLogin() {
      this.loginDialog = !this.loginDialog
    }
  },
}
</script>

<style lang="scss" scoped></style>