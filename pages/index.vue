<script setup lang="ts"></script>

<template>
	<div class="flex justify-between items-center py-12">
		<div class="text-6xl font-black">
			<p>DESIGN</p>
			<UDivider
				size="lg"
				label="&"
				:ui="{
					border: { base: 'border-gray-200 dark:border-primary' },
					label: 'text-primary-500 dark:text-primary-400 text-3xl font-black',
				}"
			/>
			<p>DEVELOPMENT</p>
		</div>
		<div
			class="text-white w-fit place-self-end font-bold text-5xl gap-4 flex flex-col text-right"
		>
			<h1 class="text-8xl">
				<span class="text-primary">Hi!</span>
			</h1>
			<p class="text-6xl">I'm Mikhail,</p>
			<p class="text-nowrap">
				lovely <span class="text-primary">front-end</span> developer
			</p>
			<p class="text-2xl text-gray-200 underline">
				from St. Petersburg, Russia
			</p>
		</div>
	</div>
</template>

<style scoped></style>
