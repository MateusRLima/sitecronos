<template>
    <v-container fluid class="px-15">
        <v-img src="@/assets/FaleConcoscoBanner.jpg" class="contact-img" height="300"></v-img>
        <v-row justify="center">
            <v-card class="contact-card">
                <v-card-text class=" pa-10">
                    <v-row justify="center" align="center">
                        <v-col cols="8" align="left">
                            <p class="title">Conheça o Portal Cronos!</p>
                            <h1 class="display-1">Agende uma reunião</h1>
                        </v-col>
                    </v-row>
                    <v-form class="form-wrapper mt-10">
                        <v-row class="pb-0">
                            <v-col>
                                <v-text-field class="mb-4" hide-details color="#DFA433" label="Nome completo" dense
                                    outlined></v-text-field>
                                <v-text-field class="mb-4" hide-details color="#DFA433" label="E-mail" dense outlined></v-text-field>
                                <v-select color="#DFA433" label="Tipo de Empresa" :items="companyType" dense outlined></v-select>
                                <v-textarea color="#DFA433" label="Mensagem" counter dense outlined></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row class="mt-5" justify="center">
                            <v-btn color="#DFA433" @click="loginDialog = false">
                                Enviar mensagem
                            </v-btn>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ContactView',

    data() {
        return {
            companyType: ["Fornecedor", "Empresa"]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.contact-card {
    position: relative;
    z-index: 1;
    top: -100px;
    border-radius: 12px;
}

.form-wrapper {
    width: 40vw;
}

.contact-img {
    border-radius: 12px;
    position: relative;
    z-index: 0;
}
</style>