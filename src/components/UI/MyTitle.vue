<template>
	<h1 class="content-title">
		{{ name }}
	</h1>
</template>

<script setup>
const props = defineProps({
	name: String
})
</script>

<style scoped>
.content-title {
	display: none;
	font-size: 36px;
	margin-bottom: 48px;
}

@media screen and (max-width: 768px) {
	.content-title {
		display: block;
	}
}
</style>
