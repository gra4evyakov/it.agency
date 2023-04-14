import { reactive } from 'vue'
import { defineStore } from 'pinia'
import products from '../data/products.json'

export const useProductStore = defineStore({
	id: 'product',
	state: () => ({
		products: products,
		filter: reactive({
			isNew: false,
			inStock: false,
			isContractual: false,
			isExclusive: false,
			isSale: false
		})
	}),
	actions: {
		applyFilters(filters) {
			this.filter = filters
		},
		sorteredProducts(id) {
			if (id === 'priceLow') {
				this.products = this.filteredProducts.sort((a, b) => a.price - b.price)
			} else if (id === 'priceHigh') {
				this.products = this.filteredProducts.sort((a, b) => b.price - a.price)
			}
		}
	},
	getters: {
		filteredProducts() {
			return this.products.filter(product => {
				return Object.entries(this.filter).every(([key, value]) => {
					return !value || product.categories[key]
				})
			})
		},
		productCount() {
			return this.filteredProducts.length
		}
	}
})
