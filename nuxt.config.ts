// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    'reka-ui/nuxt',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/style/global.css'],
  build: {
    transpile: ['trpc-nuxt'],
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
