<template>
	<div class="filters">
		<ul class="filters-list">
			<li class="filters-list__item">
				<MyCheckbox
					label="Новинки"
					filterId="isNew"
					:initialChecked="filters.isNew"
					@filterUpdate="updateFilter"
				/>
			</li>
			<li class="filters-list__item">
				<MyCheckbox
					label="Есть в наличии"
					filterId="inStock"
					:initialChecked="filters.inStock"
					@filterUpdate="updateFilter"
				/>
			</li>
			<li class="filters-list__item">
				<MyCheckbox
					label="Контрактные"
					filterId="isContractual"
					:initialChecked="filters.isContractual"
					@filterUpdate="updateFilter"
				/>
			</li>
			<li class="filters-list__item">
				<MyCheckbox
					label="Эксклюзивные"
					filterId="isExclusive"
					:initialChecked="filters.isExclusive"
					@filterUpdate="updateFilter"
				/>
			</li>
			<li class="filters-list__item">
				<MyCheckbox
					label="Распродажа"
					filterId="isSale"
					:initialChecked="filters.isSale"
					@filterUpdate="updateFilter"
				/>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import MyCheckbox from './UI/MyCheckbox.vue'
import { useProductStore } from '../store/products'
const product = useProductStore()
const filters = ref({})

const updateFilter = filterId => {
	filters.value[filterId] = !filters.value[filterId]
}
watch(
	filters,
	() => {
		product.applyFilters(filters.value)
	},
	{ deep: true }
)
</script>

<style scoped>
.filters-list__item {
	display: block;
	margin-bottom: 20px;
	font-weight: 400;
	font-size: 12px;
}
</style>
