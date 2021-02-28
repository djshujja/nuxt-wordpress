<template>
  <div class="posts mt-5 d-flex">
    <v-main class="posts" v-for="post in allPosts" :key="post.id">
      <!-- <v-expand-x-transition> -->
      <Post :post="post" transition="fab-transition" />
      <!-- </v-expand-x-transition> -->
    </v-main>
  </div>
</template>

<script>
import Post from "~/components/Post";

export default {
  data: () => ({
    show: false,
    allPosts: []
  }),
  components: {
    Post
  },
  async asyncData(context) {
    let response = await context.$axios.get("/posts");
    // .then(res => console.log(res));
    let posts = response.data;

    return {
      posts
    };
  },
  computed: {},
  mounted() {
    this.allPosts = this.posts;
    console.log(this.allPosts[2]);
  },
  methods: {}
};
</script>

<style></style>
