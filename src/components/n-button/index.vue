<template>
	<button
		class="n-button"
		:class="[className, sizeClassName]"
		:disabled="disabled"
		:style="{ display: blockStyles, borderRadius: `${radiusStyles}rpx` }"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	interface IProps {
		type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
		disabled?: boolean
		plain?: boolean
		shape: 'round' | 'square' | 'default'
		block: boolean
		size: 'normal' | 'small' | 'mini'
	}

	const props = withDefaults(defineProps<IProps>(), {
		type: 'default',
		disabled: false,
		plain: false,
		shape: 'default',
		block: false,
		size: 'normal'
	})

	const className = computed(() => {
		if (props.plain) {
			return [`n-button__${props.type}`, `n-button__${props.type}-plain`]
		}

		return `n-button__${props.type}`
	})

	const blockStyles = computed(() => {
		return props.block ? `block` : 'inline-block'
	})

	const radius = {
		round: 40,
		square: 0,
		default: 8
	}
	const radiusStyles = computed(() => {
		return radius[props.shape]
	})

	const sizeClassName = computed(() => {
		return [`n-button__${props.size}`]
	})
</script>

<style lang="scss" scoped>
	$northButtonVariations: (
		default: $north-color-default,
		primary: $north-color-primary,
		success: $north-color-success,
		warning: $north-color-warning,
		danger: $north-color-danger,
		info: $north-color-info
	);

	uni-button::after {
		content: initial;
	}

	button::after {
		border: none;
	}

	@each $variation, $color in $northButtonVariations {
		.n-button__#{$variation} {
			background-color: $color;
			font-size: 28rpx;
			display: inline-block;
			cursor: pointer;
			color: #fff;
			margin: 0 8rpx;
			border: 1px solid darken($color, 10%);
			padding: {
				top: 4rpx;
				bottom: 4rpx;
			}

			&:active {
				background-color: darken($color, 10%);
			}

			&[disabled] {
				color: #fff;
				background-color: lighten($color, 20%);
				border: 1px solid lighten($color, 20%);
				cursor: no-drop;
			}

			&-plain {
				color: $color;
				background-color: #fff;
				border: 1px solid $color;

				&:active {
					background-color: darken(#fff, 10%);
					color: lighten($color, 10%);
				}

				&[disabled] {
					background-color: darken(#fff, 6%);
					color: $color;
					border: 1px solid lighten($color, 30%);
				}
			}
		}
	}

	.n-button__default {
		color: #323232;
		border: 1px solid #ebedf0;

		&[disabled] {
			color: #989899;
			border: 1px solid #ebedf0;
		}
	}

	.n-button__small {
		font-size: 24rpx;
	}
	.n-button__mini {
		font-size: 20rpx;
		transform: scale(0.8);
		transform-origin: left bottom;
	}
</style>
