<template>
    <v-footer class="footer">
        <v-container>
            <v-row justify="center" class="mt-1">
                <h3>CONTATOS</h3>
            </v-row>
            <v-row justify="center" class="footer-contacts">
                <v-col cols="12" md="5" class="pb-0">
                    <h4>Comercial</h4>
                    <v-divider horizontal class="my-3"></v-divider>
                    <p class="mb-1"><v-icon color="#DFA433" small class="mr-1">mdi-phone</v-icon> +55 (81) 99962-9822
                    </p>
                    <p><v-icon color="#DFA433" small class="mr-1">mdi-email</v-icon> comercial@portalcronos.com.br</p>
                </v-col>
                <v-col cols="12" md="5" class="pb-0">
                    <h4>Atendimento</h4>
                    <v-divider horizontal class="my-3"></v-divider>
                    <p class="mb-1"><v-icon color="#DFA433" small class="mr-1">mdi-phone</v-icon> +55 (81) 99952-1891
                    </p>
                    <p class="mb-1"><v-icon color="#DFA433" small class="mr-1">mdi-phone</v-icon> +55 (81) 99637-0053
                    </p>
                    <p><v-icon color="#DFA433" small class="mr-1">mdi-email</v-icon> atendimento@portalcronos.com.br</p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>


<script>
export default {
    name: 'SitecronosFooterContact',
};
</script>

<style lang="scss" scoped>
.footer {
    padding: 20px 0;
}

.footer-contacts {
    @media (max-width: 600px) {
        text-align: center;
    }
}

.footer-contacts h4 {
    color: #dfa433;
}

.footer-contacts p {
    margin-bottom: 5px;
}

.footer-contacts v-icon {
    margin-right: 10px;
}
</style>
