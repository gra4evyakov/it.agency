<template>
	<div v-show="isOpen" class="popup">
		<div class="popup-wrapper" @click.self="close">
			<div class="popup-content">
				<div class="popup-line"></div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true
	}
})
const emits = defineEmits(['closePopup'])
function close() {
	emits('closePopup')
}
</script>

<style scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
}

.popup-wrapper {
	height: 100%;
	background: #000000b9;
	display: flex;
	flex-direction: column;
	justify-content: end;
}

.popup-line {
	margin: 0 auto;
	height: 4px;
	width: 28px;
	background: #1f2020;
	opacity: 0.6;
	border-radius: 40px;
	margin-bottom: 38px;
}

.popup-content {
	padding: 12px 24px 24px 24px;
	width: 100%;
	background: #ffffff;
	border-radius: 24px 24px 0px 0px;
	transition: bottom 0.3s ease-in;
}
</style>
