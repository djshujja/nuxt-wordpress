<template>
  <v-app>
    <v-app-bar app>
      <v-btn text :to="'/'">Home</v-btn>
      <v-btn text :to="'/posts'">Posts</v-btn>
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text :to="'/logout'">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text :to="'/auth'">Login</v-btn>
        <v-btn text :to="'/auth'">Register</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style></style>
