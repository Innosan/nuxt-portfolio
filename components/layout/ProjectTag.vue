<script setup lang="ts">
import type { Tag } from "~/types/Project";

const props = defineProps({
	tag: {
		type: Object as PropType<Tag>,
		required: true,
	},
});
</script>

<template>
	<div
		class="flex md:text-lg gap-1 p-1 md:p-2 ring-1 ring-gray-800 rounded-lg items-center"
	>
		<UIcon :name="tag.icon" />
		<p class="text-xs md:text-sm font-bold">{{ tag.name }}</p>
	</div>
</template>
