<template>
	<div v-if="isOpen && !isMobile" class="wrapper"></div>
	<component v-if="isOpen" :is="isMobile ? MyPopup : 'div'" :isOpen="isOpen">
		<div class="select">
			<ul class="select-list">
				<li
					v-for="cate in categories"
					class="select-list__item"
					@click="product.sorteredProducts(cate.id), close"
				>
					{{ cate.name }}
				</li>
			</ul>
		</div>
	</component>
</template>

<script setup>
import { useProductStore } from '../store/products'
import MyPopup from './MyPopup.vue'
const props = defineProps({
	isMobile: {
		type: Boolean
	},
	isOpen: {
		type: Boolean
	}
})
const product = useProductStore()

const categories = [
	{
		name: 'Сначала дорогие',
		id: 'priceHigh'
	},
	{
		name: 'Сначала недорогие',
		id: 'priceLow'
	}
]

const emits = defineEmits(['closePopup'])
function close() {
	emits('closePopup')
}
</script>

<style scoped>
.wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.473);
}
.select {
	position: absolute;
	top: 0;
	left: -120px;
	width: 280px;
	background: #fff;
}
.select-list {
	width: 100%;
}

.select-list__item {
	display: flex;
	padding: 0px 24px;
	align-items: center;
	height: 48px;
	background: inherit;
	font-weight: 500;
	font-size: 12px;
}

.select-list__item:hover {
	background: #7bb899;
}

@media screen and (max-width: 768px) {
	.select {
		width: 100%;
		position: static;
	}

	.content {
		padding: 48px 24px 64px 24px;
		display: block;
	}
}
</style>
