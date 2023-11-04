// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@nuxt/ui',
  ],
  googleFonts: {
    families: {
      Roboto: true
    }
  }
})
