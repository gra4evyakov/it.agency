<template>
	<div v-if="isOpen" class="categories" @click.self="close">
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true
	}
})
</script>

<style scoped>
.categories {
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: #000000a5;
}
</style>
