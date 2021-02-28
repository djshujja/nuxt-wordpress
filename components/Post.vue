<template>
  <div class="">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="img" height="200px"></v-img>
      <v-card-title>
        {{ Post.title.rendered }}
      </v-card-title>

      <v-card-subtitle class="text-capitalize">
        {{ Post.type }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="blue" text :to="`/posts/${Post.id}`">
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p v-html="Post.excerpt.rendered" />
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    Post: Object
  },
  data() {
    return {
      show: false,
      img: ""
    };
  },
  async mounted() {
    this.img = await this.getImg(this.Post.featured_media);
    console.log(this.Post.status);
  },
  methods: {
    async getImg(id) {
      let url = await this.$axios
        .get(`/media/${id}`)
        .then(res => res.data.source_url);

      return url;
    }
  }
};
</script>

<style lang="scss"></style>
