<template>
	<label class="hamburger-menu">
		<input
			class="checkbox"
			type="checkbox"
			v-model="checked"
			@change="emitMenu"
		/>
		<div class="hamburger-lines">
			<span class="line line1"></span>
			<span class="line line2"></span>
			<span class="line line3"></span>
		</div>
	</label>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const props = defineProps({
	initialChecked: {
		type: Boolean,
		default: false
	}
})
const emits = defineEmits(['humburgerUpdate'])

const checked = ref(props.initialChecked)

const emitMenu = () => {
	emits('humburgerUpdate')
}
</script>

<style scoped>
.hamburger-menu {
	display: none;
}

.checkbox {
	position: absolute;
	appearance: none;
	margin: 0;
}

.hamburger-menu .hamburger-lines {
	height: 24px;
	width: 100%;
	position: absolute;
	z-index: 2;
	display: flex;
	gap: 4px;
	flex-direction: column;
	justify-content: center;
}

.hamburger-menu .hamburger-lines .line {
	display: block;
	height: 2px;
	width: 100%;
	border-radius: 10px;
	background: #1f2020;
}

.hamburger-menu .hamburger-lines .line1 {
	transform-origin: 0% 0%;
	transition: transform 0.4s ease-in-out;
}

.hamburger-menu .hamburger-lines .line2 {
	transition: transform 0.2s ease-in-out;
}

.hamburger-menu .hamburger-lines .line3 {
	transform-origin: 0% 100%;
	transition: transform 0.4s ease-in-out;
}

.hamburger-menu input[type='checkbox']:checked ~ .menu-items {
	transform: translateX(0);
}

.hamburger-menu input[type='checkbox']:checked ~ .hamburger-lines .line1 {
	transform: rotate(30deg);
}

.hamburger-menu input[type='checkbox']:checked ~ .hamburger-lines .line2 {
	transform: scaleY(0);
}

.hamburger-menu input[type='checkbox']:checked ~ .hamburger-lines .line3 {
	transform: rotate(-30deg);
}

@media screen and (max-width: 768px) {
	.hamburger-menu {
		position: relative;
		display: block;
		width: 24px;
		height: 24px;
	}
}
</style>
