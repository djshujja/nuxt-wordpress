<template>
  <v-main>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="purple">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <!-- prepend-icon="person" -->
              <v-text-field
                name="login"
                label="Login"
                id="login"
                type="text"
                v-model="loginInfo.username"
              ></v-text-field>
              <!-- prepend-icon="lock" -->
              <v-text-field
                v-model="loginInfo.password"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="pink" @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      setTimeout(async () => {
        await this.$auth
          .loginWith("local", {
            data: this.loginInfo
          })
          .then(() => {
            this.$router.push("/");
          });
      }, 0);
    }
  }
};
</script>

<style></style>
