<template>
  <v-btn @click="createPost">POST</v-btn>
</template>

<script>
export default {
  data() {
    return {
      title: "New Post from VUE",
      content: "<p>This is a new post </p>"
    };
  },
  methods: {
    async createPost() {
      await this.$axios
        .post("/posts", {
          title: this.title,
          content: this.content,
          status: "publish"
        })
        .then(res => {
          console.log(res.data);
          this.$router.push("/posts");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
