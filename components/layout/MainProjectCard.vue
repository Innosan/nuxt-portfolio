<script setup lang="ts">
import { cardSizes } from "~/utils/ui/cardSizes";
import type { Project } from "~/types/Project";

const props = defineProps({
	project: {
		type: Object as PropType<Project>,
		required: true,
	},
});
</script>

<template>
	<div class="grid md:grid-cols-4 gap-12">
		<div class="flex col-span-2 flex-col" data-aos="fade-up">
			<UCard :ui="cardSizes.sm">
				<template #header>
					<p class="font-bold text-2xl">{{ project.title }}</p>
					<p class="text-sm opacity-80">
						{{ project.description }}
					</p>
				</template>

				<p class="opacity-70 mb-2 md:text-xl text-lg font-bold">
					Completed tasks
				</p>
				<div class="flex flex-row flex-wrap gap-2">
					<ProjectTag v-for="tag in project.tags" :tag="tag" />
				</div>

				<template #footer>
					<UButton
						v-for="link in project.links"
						:key="link.name"
						:label="link.name"
						:to="link.url"
						target="_blank"
						:icon="link.icon"
						variant="link"
					/>
				</template>
			</UCard>
		</div>
		<div
			class="grid col-span-2 grid-rows-2 grid-cols-3 justify-items-end justify-between gap-12"
		>
			<NuxtImg
				data-aos="fade-up"
				data-aos-delay="400"
				class="w-96 h-[460px] ring-2 ring-primary-500 rounded-3xl object-cover object-top row-span-2 col-span-2"
				:src="project.images[0]"
			/>
			<NuxtImg
				data-aos="fade-up"
				class="ring-2 ring-primary-500 rounded-3xl w-40 h-52 object-cover object-center"
				:src="project.images[1]"
			/>
			<NuxtImg
				data-aos="fade-up"
				data-aos-delay="200"
				class="ring-2 ring-primary-500 rounded-3xl w-40 h-48 object-top object-cover"
				:src="project.images[2]"
			/>
		</div>
	</div>
</template>
