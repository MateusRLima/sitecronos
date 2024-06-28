<template>
    <v-container class="screen-view">
        <h1>Fale Conosco</h1>
        <v-form class="form-wrapper mt-10">
            <v-row class="pb-0">
                <v-col>
                    <v-text-field hide-details color="#DFA433" label="Nome completo" dense outlined></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field color="#DFA433" label="Empresa" dense outlined></v-text-field>
                    <v-text-field hide-details color="#DFA433" label="Cargo" dense outlined></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field color="#DFA433" label="Telefone" dense outlined></v-text-field>
                    <v-text-field hide-details color="#DFA433" label="E-mail" dense outlined></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea color="#DFA433" label="Mensagem" counter dense outlined></v-textarea>
                </v-col>
            </v-row>
            <v-row class="mt-5" justify="center">
                <v-btn  color="#DFA433" dark @click="loginDialog = false">
                    Enviar
                </v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
    name: 'ContactView',

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
.screen-view {
    width: 35vw;
}
</style>