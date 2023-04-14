<template>
	<header class="header container">
		<TheHumburger
			:initialChecked="menuIsOpen.value"
			@humburgerUpdate="updateMenuIsOpen"
		/>
		<nav class="header-menu">
			<a href="#" class="header-logo"><SvgLogo /></a>
			<ul class="menu-list" :class="{ active: menuIsOpen }">
				<li class="menu-list__item"><a href="#">Продукты</a></li>
				<li class="menu-list__item"><a href="#">Цвета</a></li>
				<li class="menu-list__item"><a href="#">Вдохновение</a></li>
				<li class="menu-list__item"><a href="#">Советы</a></li>
				<li class="menu-list__item"><a href="#">Найти магазин</a></li>
			</ul>
		</nav>
		<div class="header-actions">
			<div class="actions-phone">
				<a href="tel:74952217769">+7 (495) 221-77-69</a>
				<button class="actions-phone-button">Заказать звонок</button>
			</div>
			<div class="actions-buttons">
				<div class="actions-buttons__group">
					<button>
						<SvgSearch />
					</button>
					<button>
						<SvgProfile />
					</button>
					<button>
						<SvgHeart />
					</button>
				</div>
				<button class="actions-buttons__cart" @click="cart.changeCartState">
					{{ cart.itemCount }}
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
import TheHumburger from './TheHumburger.vue'
import { useCartStore } from '../store/cart'
import { ref } from 'vue'
import SvgSearch from './svg/SvgSearch.vue'
import SvgLogo from './svg/SvgLogo.vue'
import SvgProfile from './svg/SvgProfile.vue'
import SvgHeart from './svg/SvgHeart.vue'
const cart = useCartStore()
const menuIsOpen = ref(false)
const updateMenuIsOpen = () => {
	menuIsOpen.value = !menuIsOpen.value
}
</script>

<style scoped>
.header {
	height: 104px;
	align-items: center;
	display: flex;
}

.header-logo {
	margin-right: 50px;
}

.header-menu {
	flex-basis: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	white-space: nowrap;
}

.header-actions {
	flex-basis: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 120px;
}

.actions-phone a {
	display: block;
	font-weight: 500;
	font-size: 16px;
}

.actions-phone-button {
	font-size: 14px;
	color: #1f202048;
	background: transparent;
	border: none;
}

.actions-buttons {
	display: flex;
	gap: 24px;
}

.actions-buttons__group {
	display: inherit;
	gap: 24px;
}

.actions-buttons__group button {
	background: transparent;
	border: none;
}

.actions-buttons__group img {
	width: 20px;
	height: 20px;
}

.actions-buttons__cart {
	width: 24px;
	height: 24px;
	border: none;
	background: #7bb899;
	border-radius: 50%;
	font-weight: 500;
	font-size: 12px;
}

.menu-list {
	display: flex;
	gap: 24px;
	justify-content: center;
	flex-grow: 1;
}

.menu-list__item {
	text-transform: uppercase;
}

@media screen and (max-width: 1440px) {
	.header {
		justify-content: space-between;
	}

	.header-menu {
		flex-basis: auto;
	}

	.header-actions {
		flex-basis: auto;
		gap: 25px;
	}
}

@media screen and (max-width: 1280px) {
	.header-logo {
		margin-right: 25px;
	}

	.menu-list {
		gap: 15px;
	}

	.actions-phone {
		display: none;
	}
}

@media screen and (max-width: 1024px) {
	.actions-buttons__group {
		display: none;
	}
}

@media screen and (max-width: 768px) {
	.header {
		height: 68px;
	}

	.header-logo {
		margin-right: 0;
	}

	.header-logo img {
		height: 19px;
		width: 89px;
	}

	.menu-list {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 25px;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #ffffff;
		z-index: 1;
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;
	}

	.menu-list.active {
		transform: translateX(0);
	}
}
</style>
