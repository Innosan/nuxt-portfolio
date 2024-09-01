<script setup lang="ts">
const words = ["development", "prototype", "architecture"];

const currentWord = ref(0);
const currentLetter = ref(0);
const isTyping = ref(true);

onMounted(() => {
	const interval = setInterval(() => {
		if (isTyping.value) {
			if (currentLetter.value < words[currentWord.value].length) {
				currentLetter.value++;
			} else {
				isTyping.value = false;
			}
		} else {
			if (currentLetter.value > 0) {
				currentLetter.value--;
			} else {
				currentWord.value = (currentWord.value + 1) % words.length;
				isTyping.value = true;
			}
		}
	}, 100);
	return () => clearInterval(interval);
});
</script>

<template>
	<div class="text-6xl w-max font-black select-none hidden xl:block">
		<div class="flex flex-col">
			<p>DESIGN</p>
			<UDivider
				size="lg"
				label="&"
				class="w-80 transition-all"
				:ui="{
					border: { base: 'border-gray-200 dark:border-primary' },
					label: 'text-primary-500 dark:text-primary-400 text-3xl font-black',
				}"
			/>
		</div>
		<p class="uppercase text-nowrap">
			|
			<span
				v-for="(letter, index) in words[currentWord].substring(
					0,
					currentLetter,
				)"
				:key="index"
				class="text-nowrap letter"
			>
				{{ letter }}
			</span>
			|
		</p>
	</div>
</template>
