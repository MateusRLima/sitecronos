<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item large v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" icon-color="#4E4E4E" fill-dot>
      <v-card :color="item.color">
        <v-card-title class="text-h7">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary text-justify pt-4">
          <p class="text-body-1 ma-0">{{ item.description }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "ProcessTimeline",

  data() {
    return {
      items: [
        {
          color: '#DFA433',
          icon: 'mdi-account-group',
          title: "Cotação",
          description: "As empresas realizam suas cotações de maneira conjunta, com o objetivo de atrair mais fornecedores em decorrência do volume a ser negociado."
        },
        {
          color: '#E4ECED',
          icon: 'mdi-cash-multiple',
          title: "Oferta",
          description: "No decorrer da cotação, o fornecedor apresentará suas ofertas para os itens, apontando a marca e detalhes técnicos de seus produtos, sendo possível, também, o oferecimento de promoções e bonificações."
        },
        {
          color: '#DFA433',
          icon: 'mdi-file-document-outline',
          title: "Analíse",
          description: "Após encerrado o período de ofertas, o comprador de cada empresa analisará as ofertas apresentadas por cada fornecedor, escolhendo dentre elas qual (ou quais) atende melhor às suas necessidades."
        },
        {
          color: '#E4ECED',
          title: "Entrega",
          icon: 'mdi-truck-delivery-outline',
          description: "Escolhidas as ofertas, o sistema enviará automaticamente para os fornecedores todas as ordens de compras emitidas, separadas individualmente por empresa compradora, apontando as condições comerciais e faturamento de cada entrega."
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>