import { defineStore } from 'pinia'

export const useCartStore = defineStore({
	id: 'cart',
	state: () => ({
		items: [],
		isOpen: false
	}),
	getters: {
		total() {
			return this.items.reduce((total, item) => {
				if (!item.isRemoved) {
					return total + item.price * item.quantity
				}
				return total
			}, 0)
		},
		itemCount() {
			return this.items.filter(item => !item.isRemoved).length
		}
	},
	actions: {
		changeCartState() {
			this.isOpen = !this.isOpen
		},
		addItem(item) {
			const existingItem = this.items.find(i => i.id === item.id)
			if (existingItem) {
				existingItem.quantity++
			} else {
				this.items.push({ ...item, quantity: 1 })
			}
		},
		deleteItem(item) {
			const existingItem = this.items.find(i => i.id === item.id)
			if (existingItem.quantity > 1) {
				existingItem.quantity--
			}
		},
		removeItem(item) {
			const existingItem = this.items.find(i => i.id === item.id)
			existingItem.isRemoved = !existingItem.isRemoved
		},
		clearCart() {
			this.items = []
		}
	}
})
