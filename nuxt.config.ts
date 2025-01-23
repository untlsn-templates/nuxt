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
  srcDir: 'src',
  build: {
    transpile: ['trpc-nuxt'],
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
});