// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	colorMode: {
		preference: "dark",
	},

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"nuxt-aos",
		"@nuxt/image",
	],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	image: {
		dir: "public/images",
	},

	css: ["~/assets/styles/main.css"],
});
