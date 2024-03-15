<script setup lang="ts"></script>

<template>
	<div>
		<UCard>
			<template #header>
				<slot name="title"></slot>
			</template>
			<div>
				<slot name="description"></slot>
			</div>
		</UCard>
	</div>
</template>

<style scoped></style>
