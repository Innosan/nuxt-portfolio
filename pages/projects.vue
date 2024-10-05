<script setup lang="ts">
import projectsData from "~/public/data/projects.json";
import type { Project } from "~/types/Project";

const projects = projectsData as Project[];
</script>

<template>
	<Head>
		<title>Projects</title>
		<meta name="description" content="A list of projects I've worked on" />
		<meta name="keywords" content="portfolio, projects, developer, vue" />
		<meta property="og:title" content="Projects" />
		<meta
			property="og:description"
			content="A list of projects I've worked on"
		/>
		<meta
			property="og:url"
			content="https://innosan.netlify.app/projects"
		/>
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
	<div class="flex flex-col gap-12">
		<MainProjectCard
			v-for="project in projects"
			:key="project.id"
			:project="project"
		/>
	</div>
</template>
