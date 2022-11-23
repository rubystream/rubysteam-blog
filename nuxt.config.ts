// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/styles.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Rubystream\'s blog',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Rubystream\'s personal blog.' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
