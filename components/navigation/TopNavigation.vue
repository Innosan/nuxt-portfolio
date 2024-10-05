<script setup lang="ts">
import type { NavigationLink } from "~/types/NavigationLink";

const { t } = useI18n();

const navigation = computed(() => {
	return [
		{
			id: 1,
			to: "/",
			label: t("navigation.home"),
			icon: "i-heroicons-home-solid",
		},
		{
			id: 2,
			to: "/projects",
			label: t("navigation.allProjects"),
			icon: "i-heroicons-code-bracket-square-solid",
		},
	] as NavigationLink[];
});
</script>

<template>
	<UHorizontalNavigation :links="navigation" />
</template>
