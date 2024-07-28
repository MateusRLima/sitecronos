<template>
  <v-dialog v-model="loginDialog" max-width="290">
    <v-card class="pb-5">
      <v-card-title class="text-center">
        <p>Autenticação de usuário</p>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="userName" dense outlined color="#DFA433" label="Login"></v-text-field>
        <v-text-field v-model="password" class="mb-2" hide-details dense outlined color="#DFA433"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword" label="Senha"></v-text-field>
        <v-btn x-small text>Esqueceu a senha?</v-btn>
      </v-card-text>
      <v-card-actions class="px-6">
        <v-btn outlined small color="#DFA433" dark @click="loginDialog = false">
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn small color="#DFA433" dark @click="login()" >
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
      userName: "",
      password: "",
      loading: false
    }
  },

  methods: {
    showLogin() {
      this.loginDialog = !this.loginDialog
    },

    login() {
      this.$axios.post('http://127.0.0.1:5050/login', {
        username: this.userName,
        password: this.password,
      }).then(response => {
        const token = response.data.token;
        console.log('Token recebido:', token);
        window.location.href = `http://localhost:8080/#/?token=${token}`;
      })
        .catch(error => {
          console.error('Erro ao fazer login:', error);
        });
    }
  }
}
</script>

<style lang="scss" scoped></style>