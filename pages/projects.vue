<script setup lang="ts">
import projectsData from "~/public/data/projects.json";
import type { Project } from "~/types/Project";

const projects = projectsData as Project[];
</script>

<template>
	<div class="flex flex-col gap-12">
		<MainProjectCard
			v-for="project in projects"
			:key="project.id"
			:project="project"
		/>
	</div>
</template>
