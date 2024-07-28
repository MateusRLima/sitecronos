<template>
  <v-container>
    <v-row align="center">
      <v-col cols="5" class="mr-5">
        <div class="text-left mb-5">
          <h1>Perguntas frequentes</h1>
          <p>Selecione o tópico referente a sua dúvida abaixo ou pesquise por palavras-chave.</p>
        </div>
      </v-col>
      <v-col cols="5">
        <v-text-field color="#DFA433" dense outlined v-model="searchQuery" label="Pesquisar"
          placeholder="Pesquise por assunto ou funcionalidade..." prepend-inner-icon="mdi-magnify"
          :hint="`Mostrando resultado para: ${searchQuery}`" class="mb-4"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="4">
        <v-list>
          <v-list-item-group v-model="selectedItem" mandatory>
            <v-list-item v-for="(category, i) in categories" :key="i" active-class="active-categories">
              <v-list-item-content>
                <v-list-item-title class="text-left" v-text="category.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-divider vertical class="mx-5 mr-15"></v-divider>
      <v-col>
        <v-expansion-panels accordion flat multiple>
          <v-expansion-panel v-for="(question, index) in filteredQuestions" :key="index">
            <v-expansion-panel-header>
              <p class="title">{{ question.title }}</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left">
              <p>{{ question.description }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div v-if="filteredQuestions.length === 0">
          <p>Não há perguntas para essa categoria.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import questionsData from '@/utils/questions.json';

export default {
  name: 'QuestionView',

  data() {
    return {
      categories: [
        { id: 0, title: "Cotações" },
        { id: 1, title: "Status de cotação" },
        { id: 2, title: "Código de um produto" },
        { id: 3, title: "Publicação da cotação" },
        { id: 4, title: "Formas de pagamento" },
        { id: 5, title: "Aplicativo mobile" }
      ],
      questions: questionsData.questions,
      selectedItem: 0,
      searchQuery: '',
    };
  },

  computed: {
    selectedCategory() {
      return this.categories[this.selectedItem];
    },
    filteredQuestions() {
      const categoryTitle = this.selectedCategory.title.toLowerCase();
      const query = this.searchQuery.toLowerCase();

      return this.questions
        .filter(question => question.category.toLowerCase() === categoryTitle)
        .filter(question =>
          question.title.toLowerCase().includes(query) ||
          question.description.toLowerCase().includes(query)
        );
    }
  },

  watch: {
    searchQuery(newQuery) {
      const query = newQuery.toLowerCase();
      const matchedCategory = this.categories.find(category =>
        category.title.toLowerCase().includes(query)
      );
      if (matchedCategory) {
        this.selectedItem = matchedCategory.id;
      } else {
        this.selectedItem = 0;
      }
    }
  },


  mounted() {
    this.selectedItem = 0;
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.active-categories {
  font-weight: bolder;
  background-color: #fff !important;
}
</style>