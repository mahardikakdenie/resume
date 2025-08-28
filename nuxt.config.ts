// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true, },
  devServer: {
    port: 3001,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos"],
})
