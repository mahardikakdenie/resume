export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'Mahardika Kessuma Denie | Software Engineer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'Mahardika' },
        { name: 'description', content: 'Software Engineer specializing in building high-performance applications using Flutter, Vue.js, and Laravel.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mahardika Kessuma Denie' },
        { property: 'og:url', content: 'https://mahardikakdenie.my.id' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mahardikakdenie' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos", "@nuxt/content", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'id', iso: 'id-ID', file: 'id.json', name: 'Bahasa Indonesia' }
    ],
    defaultLocale: 'id',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  tailwindcss: {
    config: {
      plugins: [require('@tailwindcss/typography')],
      theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
        },
      },
    }
  },
  build: {
    transpile: ['shiki']
  },
  nitro: {
    externals: {
      inline: ['shiki', '@shikijs/core']
    }
  },
  content: {
    highlight: false
  }
})

