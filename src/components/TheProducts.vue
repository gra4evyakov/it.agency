<template>
	<div class="products">
		<div class="sort-line">
			<span class="product-counter">{{ product.productCount }} Товаров</span>
			<button class="filter-button" @click="openFiltersPopup">Фильтры</button>
			<button class="sort-button" @click="changeCategoriesPopupState">
				<span>Сначала дорогие</span>
				<TheCategories
					:isOpen="categoriesIsOpen"
					:is-mobile="isMobile"
					@closePopup="changeCategoriesPopupState"
				/>
			</button>
		</div>
		<div class="products-list">
			<MyCard
				v-for="product in products"
				:product="product"
				@add-to-cart="cart.addItem(product)"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '../store/cart'
import { useProductStore } from '../store/products'
import TheCategories from './TheCategories.vue'
import MyCard from './MyCard.vue'

const props = defineProps(['products', 'isMobile'])
const cart = useCartStore()
const product = useProductStore()

const changeCategoriesPopupState = () => {
	categoriesIsOpen.value = !categoriesIsOpen.value
}
const categoriesIsOpen = ref(false)
watch(categoriesIsOpen, () => {
	if (categoriesIsOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})

const emits = defineEmits(['filterPopup', 'categoriesPopup'])
const openFiltersPopup = () => {
	emits('filterPopup')
}
</script>

<style scoped>
.products-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, 278px);
	grid-auto-flow: dense;
	justify-content: space-between;
	row-gap: 16px;
}

.sort-line {
	display: flex;
	justify-content: space-between;
	margin-bottom: 44px;
}

.sort-line button {
	font-weight: 500;
	font-size: 12px;
	background-color: transparent;
	border: none;
}

.sort-line span {
	font-weight: 500;
	font-size: 12px;
}

.filter-button {
	display: none;
}

.sort-button {
	position: relative;
}

@media screen and (max-width: 1280px) {
	.products-list {
		grid-template-columns: repeat(auto-fill, 156px);
		column-gap: 15px;
		row-gap: 24px;
	}
}

@media screen and (max-width: 768px) {
	.product-counter {
		display: none;
	}
	.products-list {
		grid-template-columns: repeat(3, 1fr);
	}
	.filter-button {
		display: inline-block;
	}
}

@media screen and (max-width: 550px) {
	.products-list {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
