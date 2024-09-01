<script setup lang="ts">
import InfoCard from "~/components/InfoCard.vue";
import { cardSizes } from "~/utils/ui/cardSizes";
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
			<p class="md:text-nowrap text-2xl md:text-5xl">
				lovely <span class="text-primary">full-stack</span> developer
			</p>
			<p class="text-xl md:text-2xl text-gray-200 underline">
				from St. Petersburg, Russia
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
			class="hover:-translate-y-4 hover:-rotate-6 hover:scale-95 md:col-span-2 lg:col-span-1 transition-transform"
		>
			<InfoCard
				data-aos="fade-up-left"
				data-aos-delay="250"
				icon="i-heroicons-sparkles-solid"
				title="3 years"
				info="of experience"
			/>
		</div>
	</div>

	<div class="grid mt-32 lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-14">
		<UCard
			class="lg:col-span-2"
			:ui="cardSizes.noPadding"
			data-aos="slide-right"
		>
			<div class="flex flex-col md:flex-row gap-12">
				<NuxtImg
					class="w-52 h-80 -mt-32 place-self-center md:place-self-start rounded-lg object-cover"
					src="/header-myself-image.png"
					alt="This is Me!"
				/>
				<div class="flex flex-col gap-4 p-4">
					<p class="opacity-60">
						I'm a versatile developer and designer with experience
						building high-quality web and mobile applications using
						diverse technologies.
					</p>
					<p class="text-lg">
						My core expertise lies in
						<b class="text-xl">Nuxt.js and Vue.js</b>, but I'm
						proficient in various frameworks and libraries like
						React, HTMX, and Svelte.
					</p>
				</div>
			</div>
		</UCard>
		<UCard data-aos="slide-left" :ui="cardSizes.sm">
			<template #header>
				<h3 class="uppercase text-3xl font-black">Contacts</h3>
			</template>
			<div class="grid grid-cols-2 grid-rows-2 gap-4">
				<UButton
					icon="i-heroicons-paper-airplane-solid"
					label="Telegram"
					class="font-bold"
				/>
				<UButton
					color="gray"
					icon="i-heroicons-envelope-solid"
					label="Send email"
				/>
				<UButton
					color="gray"
					class="col-span-2"
					icon="i-mdi-github"
					label="GitHub"
				/>
			</div>
		</UCard>
	</div>
	<div class="flex flex-col place-items-end gap-6 place-self-end mt-14">
		<h2
			data-aos="slide-left"
			class="text-4xl underline decoration-4 decoration-primary-500 underline-offset-4 font-black"
		>
			Project highlights
		</h2>
		<div class="grid md:grid-cols-4 gap-12">
			<div class="flex col-span-2 flex-col" data-aos="slide-right">
				<UCard :ui="cardSizes.sm">
					<template #header>
						<p class="font-bold text-2xl">Yin Yang</p>
					</template>
					<p class="text-sm opacity-80">
						An online delivery service that offers a wide range of
						products and services. The website is designed to be
						accessible and user-friendly, with a focus on simplicity
						and functionality.
					</p>
					<template #footer>
						<p class="opacity-70 mb-2 text-xl font-bold">
							Completed tasks
						</p>
						<div class="flex flex-row flex-wrap gap-2">
							<div
								class="flex text-sm md:text-lg gap-1 p-2 ring-1 ring-gray-800 rounded-lg items-center"
							>
								<UIcon name="i-heroicons-squares-plus" />
								<p>Design system</p>
							</div>
							<div
								class="flex text-sm md:text-lg gap-1 p-2 ring-1 ring-gray-800 rounded-lg items-center"
							>
								<UIcon name="i-heroicons-device-phone-mobile" />
								<p>Mobile app</p>
							</div>
							<div
								class="flex text-sm md:text-lg gap-1 p-2 ring-1 ring-gray-800 rounded-lg items-center"
							>
								<UIcon
									name="i-heroicons-computer-desktop-solid"
								/>
								<p>Responsive web app</p>
							</div>
							<div
								class="flex text-sm md:text-lg gap-1 p-2 ring-1 ring-gray-800 rounded-lg items-center"
							>
								<UIcon name="i-heroicons-server-stack" />
								<p>Robust BaaS integration</p>
							</div>
							<div
								class="flex text-sm md:text-lg gap-1 p-2 ring-1 ring-gray-800 rounded-lg items-center"
							>
								<UIcon
									name="i-heroicons-presentation-chart-bar"
								/>
								<p>Custom admin-panel</p>
							</div>
							<div
								class="flex text-sm md:text-lg gap-1 p-2 ring-1 ring-gray-800 rounded-lg items-center"
							>
								<UIcon name="i-heroicons-receipt-percent" />
								<p>Payment integration</p>
							</div>
						</div>
					</template>
				</UCard>
			</div>
			<div
				class="grid col-span-2 grid-rows-2 grid-cols-3 justify-items-end justify-between gap-12"
			>
				<NuxtImg
					data-aos="slide-left"
					data-aos-delay="400"
					class="w-96 h-[460px] ring-2 ring-primary-500 rounded-3xl object-cover object-top row-span-2 col-span-2"
					src="/projects/yin-yang/desktop-home.png"
					alt="This is homepage of delivery service."
				/>
				<NuxtImg
					data-aos="slide-left"
					class="ring-2 ring-primary-500 rounded-3xl w-40 h-52 object-cover object-center"
					src="/projects/yin-yang/sign-in-mobile.png"
					alt="This is homepage of delivery service, but on mobile."
				/>
				<NuxtImg
					data-aos="slide-left"
					data-aos-delay="200"
					class="ring-2 ring-primary-500 rounded-3xl w-40 h-48 object-top object-cover"
					src="/projects/yin-yang/mobile-home.png"
					alt="This is homepage of delivery service, but on mobile."
				/>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
