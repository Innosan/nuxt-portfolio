// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

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
		"@nuxtjs/i18n",
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

	build: {
		transpile: ["vue-i18n"],
	},

	vite: {
		plugins: [
			VueI18nVitePlugin({
				include: [
					resolve(
						dirname(fileURLToPath(import.meta.url)),
						"./locales/*.json",
					),
				],
			}),
		],
	},

	i18n: {
		locales: ["en", "ru", "kr"],
		strategy: "no_prefix",
		defaultLocale: "en",
	},
});
