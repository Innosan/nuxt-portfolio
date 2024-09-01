<script setup lang="ts">
import InfoCard from "~/components/InfoCard.vue";
</script>

<template>
	<div class="flex justify-end xl:justify-between items-center py-12">
		<TextBanner />
		<div
			class="text-white w-fit font-bold text-5xl gap-4 flex flex-col text-right"
		>
			<h1 class="text-8xl">
				<span class="text-primary">Hi!</span>
			</h1>
			<p class="text-6xl">I'm Mikhail,</p>
			<p class="text-nowrap">
				lovely <span class="text-primary">full-stack</span> developer
			</p>
			<p class="text-2xl text-gray-200 underline">
				from St. Petersburg, Russia
			</p>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
		<div
			class="hover:-translate-y-4 hover:-rotate-12 hover:scale-95 transition-all"
		>
			<InfoCard
				data-aos="fade-up-left"
				icon="i-heroicons-code-bracket-solid"
				title="9+"
				info="projects made"
			/>
		</div>
		<div
			class="hover:-translate-y-4 hover:rotate-6 hover:scale-95 transition-transform"
		>
			<InfoCard
				data-aos="fade-up-left"
				data-aos-delay="100"
				icon="i-heroicons-paint-brush-solid"
				title="23"
				info="designs created"
			/>
		</div>
		<div
			class="hover:-translate-y-4 hover:-rotate-6 hover:scale-95 transition-transform"
		>
			<InfoCard
				data-aos="fade-up-left"
				data-aos-delay="250"
				icon="i-heroicons-sparkles-solid"
				title="3 years"
				info="of experience"
				class="md:col-span-2 lg:col-span-1"
			/>
		</div>
	</div>
</template>

<style scoped></style>
