import type { NavigationLink } from "~/types/NavigationLink";

export const navigation: NavigationLink[] = [
	{
		id: 1,
		to: "/",
		label: "Home",
		icon: "i-heroicons-home-solid",
	},
	{
		id: 2,
		to: "/projects",
		label: "All projects",
		icon: "i-heroicons-code-bracket-square-solid",
	},
];

export const socials: NavigationLink[] = [
	{
		id: 1,
		to: "https://github.com",
		label: "GitHub",
		icon: "i-octicon-mark-github-16",
	},
	{
		id: 2,
		to: "https://telegram.com",
		label: "Telegram",
		icon: "i-streamline-telegram-solid",
	},
];
