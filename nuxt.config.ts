// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools:  { enabled: true },
	devServer: {
		port: +import.meta.env.PORT,
	},
	modules: [
		'@unocss/nuxt',
	],
});
