// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"@nuxt/content",
		"nuxt-aos",
		"@nuxt/image",
	],

	content: {
		// ... options
	},

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
