<template>
	<carousel :items-to-show="1">
		<slide v-for="slide in 6" :key="slide">
			<div class="slide-wrapper">
				<h3 class="slide-title">Краски</h3>
				<span class="slide-description"
					>Идеально подходят для стен и других поверхностей. Найди свой
					идеальный цвет!</span
				>
			</div>
		</slide>

		<template #addons>
			<navigation />
			<pagination />
		</template>
	</carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<style>
.carousel {
	height: 560px;
	background-image: url('../assets/image/slider.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

.carousel__track {
	height: 100%;
}

.carousel__slide {
	flex-direction: column;
	color: #ffffff;
}

.carousel__viewport {
	height: 100%;
}

.slide-wrapper {
	max-width: 472px;
}

.slide-title {
	font-size: 72px;
	margin-bottom: 20px;
}

.slide-description {
	font-size: 16px;
	line-height: 130%;
}

.carousel__pagination-button::after {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #ffffff5b;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
	background: #ffffff;
}

.carousel__pagination {
	margin: 0 auto;
	margin-top: -80px;
	width: min-content;
	padding: 13px 24px;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 25px;
}

.carousel__icon {
	transform: scale(3);
}

.carousel__icon path {
	fill: #ffffff;
}

.carousel__next {
	top: 60%;
	right: 25%;
}

.carousel__prev {
	top: 60%;
	left: 25%;
}

.carousel__prev--disabled,
.carousel__next--disabled {
	opacity: 0;
}

@media screen and (max-width: 1280px) {
	.carousel {
		margin-bottom: 0;
	}
}

@media screen and (max-width: 768px) {
	.carousel {
		display: none;
	}
}
</style>
