<template>
    <v-footer>
        <v-container>
            <v-row justify="center">
                <h3>CONTATOS</h3>
            </v-row>
            <v-row justify="center">
                <v-col cols="5" class="pb-0">
                    <h4>Comercial</h4>
                    <v-divider horizontal class="my-3"></v-divider>
                    <p class="mb-1"><v-icon color="#DFA433" small class="mr-1">mdi-phone</v-icon> +55 (81) 99962-9822</p>
                    <p><v-icon color="#DFA433" small class="mr-1">mdi-email</v-icon> comercial@portalcronos.com.br</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4" class="pb-0">
                    <h4>Atendimento</h4>
                    <v-divider horizontal class="my-3"></v-divider>
                    <p class="mb-1"><v-icon color="#DFA433" small class="mr-1">mdi-phone</v-icon> +55 (81) 99952-1891</p>
                    <p class="mb-1"><v-icon color="#DFA433" small class="mr-1">mdi-phone</v-icon> +55 (81) 99637-0053</p>
                    <p><v-icon color="#DFA433" small class="mr-1">mdi-email</v-icon> atendimento@portalcronos.com.b</p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'SitecronosFooterContact',

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
.footer {
    border-top: #F1F1F1 dotted 1px;
    color: #F1F1F1;
    background-color: #1E1E1E;
}
</style>