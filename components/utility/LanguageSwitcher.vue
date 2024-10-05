<script setup lang="js">
const { locale, setLocaleCookie } = useI18n();
const locales = ref([
	[
		{
			value: "en",
			title: "English",
		},
		{
			value: "ru",
			title: "Русский",
		},
		{
			value: "kr",
			title: "한국어",
		},
	],
]);
</script>

<template>
	<div>
		<UDropdown icon="i-heroicons-language-20-solid" :items="locales">
			<UButton
				icon="i-heroicons-language-20-solid"
				variant="solid"
				color="gray"
			/>

			<template #item="{ item }">
				<UButton
					@click="
						() => {
							locale = item.value;
							setLocaleCookie(locale);
						}
					"
					:variant="item.value === locale ? 'outline' : 'ghost'"
					color="white"
					class="truncate w-full"
					>{{ item.title }}</UButton
				>
			</template>
		</UDropdown>
	</div>
</template>

<style scoped>
select {
	transition: 0.3s ease-in;
}
</style>
