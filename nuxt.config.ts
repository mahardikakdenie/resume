export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos"],
})
