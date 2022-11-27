// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  css: ["@/assets/css/styles.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: 'Rubystream"s blog',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Rubystream's personal blog." },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      /* Extend the Tailwind config here */
      content: [
        "@/assets/css/styles.css",
        "@/components/**/*.{js,vue,ts}",
        "@/layouts/**/*.vue",
        "@/pages/**/*.vue",
        "@/plugins/**/*.{js,ts}",
        "@/content/**/*.md",
      ],
    },
  },
});
