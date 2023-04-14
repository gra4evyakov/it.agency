<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useProductStore } from '../store/products'

import TheFilter from './TheFilter.vue'
import TheProducts from './TheProducts.vue'
import MyTitle from './UI/MyTitle.vue'
import MyPopup from './MyPopup.vue'
import TheCart from './TheCart.vue'

const product = useProductStore()

const screenWidth = ref(window.innerWidth)
const updateScreenWidth = () => {
	screenWidth.value = window.innerWidth
}
onMounted(() => {
	window.addEventListener('resize', updateScreenWidth)
})
onBeforeUnmount(() => {
	window.removeEventListener('resize', updateScreenWidth)
})
const isMobile = computed(() => {
	return screenWidth.value <= 768
})

const filtersIsOpen = ref(false)
watch(filtersIsOpen, () => {
	if (filtersIsOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})
const changeFilterPopupState = () => {
	filtersIsOpen.value = !filtersIsOpen.value
}
</script>

<template>
	<div class="content">
		<MyTitle name="Краски" />
		<component
			:is="isMobile ? MyPopup : 'div'"
			:isOpen="filtersIsOpen"
			@closePopup="changeFilterPopupState"
		>
			<TheFilter />
		</component>
		<TheProducts
			:is-mobile="isMobile"
			:products="product.filteredProducts"
			@filterPopup="changeFilterPopupState"
		/>
		<Teleport to="#app">
			<TheCart />
		</Teleport>
	</div>
</template>

<style scoped>
.content {
	padding: 72px 64px 141px 67px;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: max-content 1fr;
	gap: 138px;
}

@media screen and (max-width: 1280px) {
	.content {
		padding: 48px 24px 64px 24px;
		gap: 50px;
	}
}

@media screen and (max-width: 768px) {
	.carousel {
		display: none;
	}

	.content {
		display: block;
	}
}
</style>
