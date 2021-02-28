<template>
  <v-app>
    <v-app-bar app>
      <v-btn text :to="'/'">Home</v-btn>
      <v-btn text :to="'/posts'">Posts</v-btn>
      <div v-if="isAuthenticated">
        <v-btn text> Hello {{ loggedInUser }}</v-btn>
        <v-btn text to="/posts/new">New Post</v-btn>
        <v-btn text @click="logOut()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text :to="'/auth'">Login</v-btn>
        <!-- <v-btn text :to="'/auth'">Register</v-btn> -->
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  },
  methods: {
    async logOut() {
      await this.$auth.logout();
    }
  }
};
</script>

<style></style>
