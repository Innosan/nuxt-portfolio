<script lang="ts" setup>
const transformedNavigation = navigation.map(({ id, ...rest }) => [rest]);
</script>

<template>
	<header class="flex px-3 md:px-1 py-4 justify-end items-center gap-4">
		<div class="flex gap-6 place-self-end">
			<TopNavigation :links="navigation" />
		</div>
	</header>
</template>
