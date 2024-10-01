<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	info: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UCard
		class="select-none bg-gradient-to-r via-transparent from-primary-100 to-gray-100 dark:from-gray-900 dark:to-zinc-900 bg-[length:400%_400%] animate-gradientBackground"
	>
		<template #header>
			<UIcon
				class="w-24 h-24 opacity-80 absolute -mt-12 md:-mt-14 -ml-8 md:-ml-14"
				:name="icon"
			/>
			<div class="flex flex-col gap-6">
				<p class="text-7xl font-black place-self-end text-primary-500">
					{{ title }}
				</p>
				<p class="text-xl font-bold uppercase opacity-80">
					{{ info }}
				</p>
			</div>
		</template>
	</UCard>
</template>
