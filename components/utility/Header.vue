<script lang="ts" setup>
const transformedNavigation = navigation.map(({ id, ...rest }) => [rest]);
</script>

<template>
	<div class="gradient-bg p-3 rounded-3xl md:pt-8 shadow-xl rounded-t-none">
		<header
			class="flex px-3 md:px-1 justify-between w-full items-center gap-4"
		>
			<div class="flex gap-6 items-center justify-between w-full">
				<div class="flex gap-3 items-center">
					<UIcon
						name="i-tabler-device-desktop-code"
						dynamic
						class="w-8 h-8 text-primary"
					/>
					<h1 class="font-black text-2xl">Innosan</h1>
				</div>
				<TopNavigation :links="navigation" class="hidden md:flex" />
				<BurgerNavigation
					:links="transformedNavigation"
					class="md:hidden"
				/>
			</div>
		</header>
	</div>
</template>
