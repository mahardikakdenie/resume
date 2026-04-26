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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos", "@nuxt/content"],
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
      inline: ['shiki', 'oniguruma']
    }
  },
  content: {
    highlight: {
      theme: 'github-light',
      langs: ['ts', 'js', 'json', 'vue', 'bash', 'html', 'css']
    }
  }
})
