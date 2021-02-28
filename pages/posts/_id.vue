<template>
  <!-- <Post /> -->
  <div class="mt-5">
    <!-- src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" -->
    <h1 class="display-1 text-center my-2">{{ post.title.rendered }}</h1>
    <v-parallax :src="img"></v-parallax>
    <v-container text-left>
      <v-flex xs12>
        <h2 text-center class="mb-3">{{ post.title.rendered }}</h2>
        <div v-html="post.content.rendered"></div>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ""
    };
  },
  async asyncData(context) {
    // console.log(context.params.id);
    let post = await context.$axios
      .get(`/posts/${context.params.id}`)
      .then(res => res.data);

    return {
      post
    };
  },
  async mounted() {
    this.img = await this.getImg(this.post.featured_media);
  },
  methods: {
    async getImg(id) {
      let url = await this.$axios
        .get(`/media/${id}`)
        .then(res => res.data.source_url);
      console.log(url);
      return url;
    }
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.aligncenter {
  text-align: center !important;
  margin: 2px 0;
}
</style>
