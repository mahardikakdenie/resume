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
      title: 'Senior Software Engineer | Building Scalable SaaS & Enterprise APIs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'Mahardika' },
        { name: 'description', content: 'Senior Software Engineer with 5+ years of expertise in building high-performance multi-tenant SaaS applications using Go, Vue.js, Flutter, and Laravel.' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mahardika Kessuma Denie' },
        { property: 'og:url', content: 'https://mahardikakdenie.my.id' },
        { property: 'og:title', content: 'Mahardika Kessuma Denie | Senior Software Engineer & SaaS Expert' },
        { property: 'og:description', content: 'Expert Senior Software Engineer building scalable SaaS architectures and enterprise systems with modern technology stacks.' },
        { property: 'og:image', content: 'https://i.ibb.co.com/8mSD7K6/og-image-mahardika.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mahardikakdenie' },
        { name: 'twitter:title', content: 'Mahardika Kessuma Denie | Senior Software Engineer' },
        { name: 'twitter:description', content: 'Senior Software Engineer specializing in scalable SaaS architectures and high-performance applications.' },
        { name: 'twitter:image', content: 'https://i.ibb.co.com/8mSD7K6/og-image-mahardika.png' },

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
