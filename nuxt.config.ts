// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '~/assets/style/reset.css'
  ],
  devServer: {
    port: 3333,
  }
})
