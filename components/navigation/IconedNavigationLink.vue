<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/NavigationLink";

const props = defineProps({
	link: {
		type: Object as PropType<NavigationLink>,
		required: true,
	},
});
</script>

<template>
	<NuxtLink
		class="flex gap-2 items-center p-2 text-lg hover:bg-gray-200 dark:hover:bg-opacity-50 hover:-translate-y-1 hover:shadow-xl dark:hover:bg-gray-800 rounded-xl"
		:to="link.to"
	>
		<UIcon :name="link.icon" dynamic />
		{{ link.label }}
	</NuxtLink>
</template>

<style scoped></style>
