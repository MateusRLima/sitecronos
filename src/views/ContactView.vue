<template>
    <v-container class="screen-view">
        <h1>Fale Conosco</h1>
        <v-form class="form-wrapper mt-10">
            <v-text-field label="Nome completo" dense outlined></v-text-field>
            <v-text-field label="E-mail" dense outlined></v-text-field>
            <v-textarea label="Mensagem" counter dense outlined></v-textarea>
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