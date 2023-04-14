<template>
	<div v-if="product.isRemoved" class="removed-layout"></div>
	<img class="cart-item-image" :src="product.image" :alt="product.name" />
	<div class="description">
		<span class="name">{{ product.name }}</span>
		<span class="price">{{ product.price }} ₽</span>
	</div>
	<div class="counter">
		<button class="counter-button" @click="cart.deleteItem(product)">-</button>
		<span>{{ product.quantity }}</span>
		<button class="counter-button" @click="cart.addItem(product)">+</button>
	</div>
	<button
		v-if="product.isRemoved"
		class="delete"
		@click="cart.removeItem(product)"
	>
		<SvgRepeat />
	</button>
	<button v-else class="delete" @click="cart.removeItem(product)">
		<SvgRemove color="#0000002b" />
	</button>
</template>

<script setup>
import { useCartStore } from '../store/cart'
import SvgRemove from './svg/SvgRemove.vue'
import SvgRepeat from './svg/SvgRepeat.vue'
const cart = useCartStore()
const props = defineProps({
	product: {
		type: Object
	}
})
</script>

<style scoped>
.removed-layout {
	position: absolute;
	width: 90%;
	height: 100%;
	background: #fff;
	opacity: 0.4;
}
.cart-item-image {
	height: 96px;
	width: 96px;
}

.cart-info-clear {
	background: transparent;
	border: none;
	color: #1f20204f;
}

.name {
	display: block;
	margin-bottom: 16px;
}

.delete {
	width: 24px;
	height: 24px;
	border: none;
	background: transparent;
}

.delete img {
	width: 100%;
	height: 100%;
}

.counter {
	display: flex;
	align-items: center;
	margin: 0 auto;
	gap: 21px;
}

.price {
	font-weight: 600;
	font-size: 16px;
}

.counter-button {
	width: 40px;
	height: 24px;
	border: none;
	background: #f2f2f2;
	border-radius: 4px;
}

@media screen and (max-width: 768px) {
	.cart-item-image {
		height: 60px;
		width: 60px;
	}
	.name {
		font-size: 12px;
	}

	.counter {
		gap: 5px;
	}
}
</style>
