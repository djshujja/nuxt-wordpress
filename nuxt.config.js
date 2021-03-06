export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt WordPress REST API",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          // required: true,
          type: "Bearer "
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: "http://localhost/wordpress-rest/wp-json/jwt-auth/v1/token",
            method: "post"
          },

          logout: false,
          user: {
            url: "/users/me",
            method: "get"
          }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://localhost/wordpress-rest/wp-json/wp/v2"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
