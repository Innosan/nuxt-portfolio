<script setup lang="ts">
import { cardSizes } from "~/utils/ui/cardSizes";
import type { Project } from "~/types/Project";
import HoverCard from "~/components/utility/HoverCard.vue";

const props = defineProps({
	project: {
		type: Object as PropType<Project>,
		required: true,
	},
	orientation: {
		type: String as PropType<"left" | "right">,
		default: "left",
	},
});

const openFullSize = (image: string) => {
	currentImage.value = image;
	isOpen.value = true;
};

const isOpen = ref(false);
const currentImage = ref("");
</script>

<template>
	<div class="md:grid flex flex-col md:grid-cols-4 gap-12">
		<div
			class="flex col-span-2 flex-col order-last"
			:class="orientation === 'right' ? 'md:order-first' : ''"
			data-aos="fade-up"
		>
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
			class="flex flex-col md:grid md:col-span-2 md:grid-rows-2 md:grid-cols-3 md:justify-items-end md:justify-between gap-12"
		>
			<div
				@click="openFullSize(project.images[0])"
				class="relative group md:row-span-2 md:col-span-2 cursor-pointer"
			>
				<NuxtImg
					data-aos="fade-up"
					data-aos-delay="400"
					class="md:w-96 w-full md:h-[460px] rounded-3xl object-cover object-top"
					:src="project.images[0]"
				/>
				<HoverCard />
			</div>
			<div
				@click="openFullSize(project.images[1])"
				class="relative group cursor-pointer"
			>
				<NuxtImg
					data-aos="fade-up"
					data-aos-delay="400"
					class="w-full rounded-3xl md:w-40 md:h-52 object-cover object-center"
					:src="project.images[1]"
				/>
				<HoverCard />
			</div>
			<div
				@click="openFullSize(project.images[2])"
				class="relative group cursor-pointer"
			>
				<NuxtImg
					data-aos="fade-up"
					data-aos-delay="400"
					class="w-full rounded-3xl md:w-40 md:h-48 object-top object-cover"
					:src="project.images[2]"
				/>
				<HoverCard />
			</div>
		</div>
	</div>

	<UModal v-model="isOpen">
		<UCard :ui="cardSizes.sm">
			<template #header>
				<p class="font-bold text-lg">Full image</p>
			</template>
			<NuxtImg
				class="w-full object-top object-cover"
				:src="currentImage"
			/>
		</UCard>
	</UModal>
</template>
