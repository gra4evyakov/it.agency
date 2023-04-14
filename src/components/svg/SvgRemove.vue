<template>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M18 6L6 18"
			:stroke="color"
			stroke-width="1.4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M6 6L18 18"
			:stroke="color"
			stroke-width="1.4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup>
const props = defineProps({
	color: {
		type: String,
		default: '#1F2020'
	}
})
</script>
