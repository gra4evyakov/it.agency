<template>
	<label class="check">
		<input
			class="check-input"
			type="checkbox"
			v-model="checked"
			@change="emitFilter"
		/>
		{{ label }}
		<span class="check-box"></span>
	</label>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const props = defineProps({
	label: {
		type: String,
		required: true
	},
	filterId: {
		type: String,
		required: true
	},
	initialChecked: {
		type: Boolean,
		default: false
	}
})
const emits = defineEmits(['filterUpdate'])

const checked = ref(props.initialChecked)

const emitFilter = () => {
	emits('filterUpdate', props.filterId)
}
</script>

<style scoped>
.check-input {
	position: absolute;
}

.check {
	cursor: pointer;
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
	align-items: center;
	gap: 12px;
}

.check-box {
	position: relative;
	width: 36px;
	height: 22px;
	padding: 7px;
	background-color: #f2f2f2;
	border-radius: 40px;
}

.check-box::after {
	position: absolute;
	content: '';
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #1f2020;
	transform: translateX(0);
	transition: transform 0.3s;
}

.check-input:checked + .check-box {
	background-color: #7bb899;
}

.check-input:checked + .check-box::after {
	transform: translateX(180%);
}
</style>
