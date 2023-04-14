<script setup>
import SvgPlus from './svg/SvgPlus.vue'

const props = defineProps({
	product: {
		type: Object,
		required: true
	}
})
</script>

<template>
	<div class="card">
		<div class="card-image">
			<img :src="`../assets/image/${product.image}`" :alt="product.name" />
		</div>
		<span class="card-title">{{ product.name }}</span>
		<div class="card-actions">
			<span class="card-price"> {{ product.price }} ₽ </span>
			<button class="card-button" @click="$emit('addToCart')">
				<SvgPlus />
			</button>
		</div>
	</div>
</template>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 278px;
	min-width: 156px;
	border-bottom: 1px solid #1f20201e;
	margin: 0 auto;
}

.card-image {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 278px;
	height: 278px;
}

.card-image img {
	max-width: 100%;
	max-height: 100%;
}

.card-actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 14px;
}

.card-price {
	font-weight: 600;
}

.card-button {
	display: flex;
	align-items: center;
	opacity: 0;
	padding: 6px 30px;
	background-color: #7bb899;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: opacity 0.3s;
}

.card:hover .card-button {
	opacity: 100;
}

@media screen and (max-width: 1280px) {
	.card-image {
		align-self: center;
		width: 156px;
		height: 156px;
	}
	.card {
		width: 156px;
	}
}

@media screen and (max-width: 768px) {
	.card-button {
		opacity: 100;
		padding: 6px 15px;
		background-color: #f2f2f2;
	}
}
</style>
