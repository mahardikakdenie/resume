export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s | Mahardika Kessuma Denie',
      title: 'Senior Software Engineer | Building Scalable SaaS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'Mahardika' },
        { name: 'description', content: 'Senior Software Engineer with 5+ years experience building high-performance multi-tenant SaaS applications using Go, Vue.js, and Flutter.' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mahardika Kessuma Denie' },
        { property: 'og:url', content: 'https://mahardikakdenie.my.id' },
        { property: 'og:title', content: 'Mahardika Kessuma Denie | Senior Software Engineer' },
        { property: 'og:description', content: 'Senior Software Engineer specializing in scalable SaaS architectures, high-performance APIs, and modern frontend ecosystems.' },
        { property: 'og:image', content: 'https://i.ibb.co.com/WyyBVHy/348734275-972459347224795-3893992442184013147-n.jpg' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mahardikakdenie' },
        { name: 'twitter:title', content: 'Mahardika Kessuma Denie | Software Engineer Portfolio' },
        { name: 'twitter:description', content: 'Senior Software Engineer specializing in high-performance applications with Go, Vue.js, Flutter, and Laravel.' },
        { name: 'twitter:image', content: 'https://i.ibb.co.com/WyyBVHy/348734275-972459347224795-3893992442184013147-n.jpg' },

        // Additional SEO
        { name: 'author', content: 'Mahardika Kessuma Denie' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://mahardikakdenie.my.id' }
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
    defaultLocale: 'en',
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
    exposeConfig: true,
    viewer: true,
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
