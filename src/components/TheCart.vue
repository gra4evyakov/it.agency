<template>
	<div class="cart" v-if="cart.isOpen" @click.self="cart.changeCartState">
		<div class="cart-wrapper">
			<div class="cart-top">
				<h1 class="cart-title">Корзина</h1>
				<button class="cart-top-close" @click="cart.changeCartState">
					<SvgRemove />
				</button>
			</div>
			<div class="cart-info">
				<span class="cart-info-counter">{{ numberOfItemsText }}</span>
				<button class="cart-info-clear" @click="cart.clearCart">
					очистить список
				</button>
			</div>
			<hr />
			<ul class="cart-list">
				<li
					class="cart-list__item"
					v-for="(product, index) in cart.items"
					:key="index"
				>
					<TheCartItem :product="product" />
				</li>
			</ul>
			<div v-if="cart.total" class="cart-bottom">
				<div class="price">
					<span class="price-text">Итого</span>
					<span class="price-total">{{ cart.total }} ₽</span>
				</div>
				<button class="order-button" type="submit" @click.prevent="">
					Оформить заказ
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
import { computed } from '@vue/reactivity'
import TheCartItem from './TheCartItem.vue'
import SvgRemove from './svg/SvgRemove.vue'

const cart = useCartStore()
const numberOfItemsText = computed(() => {
	const numberOfItems = cart.itemCount
	if (numberOfItems % 10 === 1 && numberOfItems % 100 !== 11) {
		return `${numberOfItems} товар`
	} else if (
		numberOfItems % 10 >= 2 &&
		numberOfItems % 10 <= 4 &&
		(numberOfItems % 100 < 10 || numberOfItems % 100 >= 20)
	) {
		return `${numberOfItems} товара`
	} else {
		return `${numberOfItems} товаров`
	}
})
</script>

<style scoped>
.cart {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: #000000b0;
	z-index: 999;
}

.cart-wrapper {
	top: 0;
	right: 0;
	padding: 40px;
	position: absolute;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 600px;
	background: #fff;
	overflow: auto;
}

.cart-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 94px;
}

.cart-top-close {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: transparent;
	border-color: #0000002b;
}

.cart-info {
	display: flex;
	justify-content: space-between;
}

.cart-title {
	font-weight: 500;
	font-size: 30px;
}

.cart-list__item {
	position: relative;
	display: grid;
	gap: 8px;
	align-items: center;
	grid-template-columns: min-content 1fr 1fr min-content;
	border-bottom: 1px solid #00000027;
	padding-bottom: 12px;
	margin-bottom: 12px;
}

.cart-list__item img {
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

.cart-bottom {
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.price {
	flex-basis: 40%;
}

.price-text {
	display: block;
	font-weight: 400;
	font-size: 16px;
	margin-bottom: 8px;
}

.price-total {
	font-weight: 500;
	font-size: 30px;
}

.order-button {
	flex-basis: 40%;
	width: 240px;
	height: 56px;
	font-weight: 500;
	font-size: 12px;
	text-transform: uppercase;
	background: #7bb899;
	border: none;
	border-radius: 4px;
}

@media screen and (max-width: 768px) {
	.cart-wrapper {
		width: 100%;
		padding: 15px;
	}

	.cart-top {
		margin-bottom: 30px;
	}

	.cart-list__item {
		gap: 8px;
		grid-template-columns: min-content 1fr min-content min-content;
	}

	.cart-list__item img {
		height: 60px;
		width: 60px;
	}

	.counter {
		gap: 5px;
	}
}
</style>
