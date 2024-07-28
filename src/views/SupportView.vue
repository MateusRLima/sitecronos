<template>
    <v-container fluid class="px-15">
        <v-row class="pa-0 ma-0 mt-10" justify="center">
            <v-card class="py-10" max-width="880" style="border-radius: 12px;">
                <v-card-text class="px-10 pb-10">
                    <v-row align="center">
                        <v-col cols="5">
                            <v-img src="@/assets/Support.png"  class="support-img ml-15 mt-10">
                            </v-img>
                        </v-col>
                        <v-col align="left">
                            <p class="title">O nosso suporte está disponível para ajudar!</p>
                            <h1 class="mb-4">Entre em contato </h1>
                            <p class="subtitle-1">Atendimento de segunda-feira a sexta-feira, <br /> das 8h às 17h.</p>
                            <v-row class="mt-5 pl-3">
                                <v-btn class="mr-5" outlined small color="#4E4E4E" dark @click="loginDialog = false">
                                    <v-icon small color="#30934E" class="mr-2">mdi-whatsapp</v-icon>Falar pelo whatsapp
                                </v-btn>
                                <v-btn outlined small color="#4E4E4E" dark @click="login()">
                                    <v-icon small color="#4E4E4E" class="mr-2">mdi-email</v-icon>Enviar e-mail
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="px-10 pt-10">
                    <v-row>
                        <v-col align="left">
                            <p>Contato do nosso time:</p>
                            <v-row>
                                <v-col>
                                    <p><v-icon small color="#30934E" class="mr-2">mdi-whatsapp</v-icon>(81) 99664-6754</p>
                                    <p><v-icon small color="#30934E" class="mr-2">mdi-whatsapp</v-icon>(81) 99664-6754</p>
                                </v-col>
                                <v-col>
                                    <p><v-icon small color="#30934E" class="mr-2">mdi-whatsapp</v-icon>(81) 99664-6754</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col align="left">
                            <p class="title">Já conferiu a nossa lista<br/> de dúvidas frequentes?</p>
                            <p class="mb-8">Preparamos um acervo de respostas<br/> para as dúvidas mais comuns.<br/> Acesse agora!</p>
                            <v-btn color="#DFA433" @click="login()">
                                Dúvidas frequentes
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SupportView',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.support-img {
    border-radius: 12px;
    -webkit-box-shadow: -40px -40px 0px 0px rgba(228, 236, 237, 1);
    -moz-box-shadow: -40px -40px 0px 0px rgba(228, 236, 237, 1);
    box-shadow: -40px -40px 0px 0px rgba(228, 236, 237, 1);
}
</style>