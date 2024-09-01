<script setup lang="ts"></script>

<template>
	<div>
		<UCard>
			<template #header>
				<p class="font-bold">
					<slot name="title" />
				</p>
			</template>
			<div>
				<slot name="description" />
			</div>
		</UCard>
	</div>
</template>
