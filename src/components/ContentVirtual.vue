<template>
  <v-list class="content-list">
    <v-list-item v-for="content in contents" :key="content.id">
      <v-container class="my-5">
        <v-row>
          <v-col>
            <v-img max-height="250px" max-width="500px" :src="content.media_link"></v-img>
          </v-col>
          <v-col align="start">
            <h3>{{ content.title }}</h3>
            <p>{{ content.description }}</p>
            <p>{{ content.created_at }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>

  </v-list>
</template>

<script>

export default {


  name: "ContentVirtual",

  data() {
    return {
      contents: [],
      dates: []
    }
  },

  mounted() {
    this.$axios.get("http://127.0.0.1:5050/post/published")
      .then(res => {
        this.contents = res.data.posts
        this.contents = this.contents.map(element => {
          return {
            ...element,
            // created_at: this.$moment(element.created_at).format('LL') + " " + "-" + " " + this.$moment(element.created_at).format('LT')
            created_at: this.$moment(element.created_at).fromNow()
          }
        })
      })
      .finally(() => {
        this.loading = false
      });
  },
}
</script>

<style lang="scss" scoped>
.content-list {
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
}
</style>