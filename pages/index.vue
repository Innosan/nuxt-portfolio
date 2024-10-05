<script setup lang="ts">
import type { Project } from "~/types/Project";

import { cardSizes } from "~/utils/ui/cardSizes";
import projectsData from "~/public/data/projects.json";

const projects = projectsData as Project[];
</script>

<template>
	<Head>
		<title>Innosan</title>
		<meta
			name="description"
			content="I'm a developer who loves to create beautiful things"
		/>
		<meta name="keywords" content="portfolio, projects, developer, vue" />
		<meta property="og:title" content="Innosan" />
		<meta
			property="og:description"
			content="I'm a developer who loves to create beautiful things"
		/>
		<meta property="og:url" content="https://innosan.netlify.app" />
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
	<div
		class="flex text-black dark:text-white justify-end xl:justify-between items-center py-12"
	>
		<TextBanner />
		<div class="w-fit font-bold text-5xl gap-4 flex flex-col text-right">
			<h1 class="text-8xl">
				<span class="text-primary">{{ $t("index.title") }}</span>
			</h1>
			<p class="text-6xl">{{ $t("index.name") }}</p>
			<p class="md:text-nowrap text-2xl md:text-5xl">
				{{ $t("index.jobTitle") }}
			</p>
			<p
				class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 underline"
			>
				{{ $t("index.city") }}
			</p>
		</div>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-14"
	>
		<div
			class="hover:-translate-y-4 hover:-rotate-12 hover:scale-95 transition-all"
		>
			<InfoCard
				data-aos="fade-up"
				icon="i-heroicons-code-bracket-solid"
				:title="$t('index.info.first.title')"
				:info="$t('index.info.first.description')"
			/>
		</div>
		<div
			class="hover:-translate-y-4 hover:rotate-6 hover:scale-95 transition-transform"
		>
			<InfoCard
				data-aos="fade-up"
				data-aos-delay="100"
				icon="i-heroicons-paint-brush-solid"
				:title="$t('index.info.second.title')"
				:info="$t('index.info.second.description')"
			/>
		</div>
		<div
			class="hover:-translate-y-4 hover:-rotate-6 hover:scale-95 md:col-span-2 lg:col-span-1 transition-transform"
		>
			<InfoCard
				data-aos="fade-up"
				data-aos-delay="250"
				icon="i-heroicons-sparkles-solid"
				:title="$t('index.info.third.title')"
				:info="$t('index.info.third.description')"
			/>
		</div>
	</div>

	<div class="grid mt-32 lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-14">
		<UCard
			class="lg:col-span-2"
			:ui="cardSizes.noPadding"
			data-aos="fade-up"
		>
			<div class="flex flex-col md:flex-row gap-12">
				<NuxtImg
					class="w-52 h-80 -mt-32 place-self-center md:place-self-start rounded-lg object-cover"
					src="/images/header-myself-image.png"
					alt="This is Me!"
				/>
				<div class="flex flex-col gap-4 p-4">
					<p class="opacity-60">
						{{ $t("index.about.first") }}
					</p>
					<p class="text-lg">
						{{ $t("index.about.second") }}
					</p>
				</div>
			</div>
		</UCard>
		<UCard data-aos="fade-up" data-aos-delay="250" :ui="cardSizes.sm">
			<template #header>
				<h3 class="uppercase text-3xl font-black">
					{{ $t("index.contacts") }}
				</h3>
			</template>
			<div class="grid grid-cols-2 grid-rows-2 gap-4">
				<UButton
					icon="i-heroicons-paper-airplane"
					label="Telegram"
					to="https://t.me/inno_san"
					target="_blank"
					class="font-bold col-span-1"
				/>
				<UButton
					color="gray"
					icon="i-heroicons-envelope"
					label="Send email"
					class="font-bold col-span-1"
					to="mailto:reau.beua@gmail.com"
				/>
				<UButton
					color="gray"
					icon="i-tabler-brand-github"
					to="https://github.com/Innosan"
					target="_blank"
					class="col-span-full"
					label="GitHub"
				/>
			</div>
		</UCard>
	</div>
	<div class="flex flex-col place-items-end gap-6 place-self-end mt-14">
		<h2
			data-aos="fade-up"
			class="text-4xl underline decoration-4 decoration-primary-500 underline-offset-4 font-black"
		>
			{{ $t("index.projects.title") }}
		</h2>
		<div class="flex flex-col gap-16">
			<MainProjectCard
				v-for="(project, index) in projects"
				:key="project.id"
				:orientation="index % 2 === 0 ? 'left' : 'right'"
				:project="project"
			/>
		</div>
	</div>
	<UButton
		data-aos="fade-up"
		block
		label="More projects"
		to="/projects"
		size="xl"
		icon="i-heroicons-arrow-right-20-solid"
		class="rounded-full font-black text-xl mb-12"
	/>
</template>
