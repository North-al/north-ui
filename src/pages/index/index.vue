<template>
	<div>
		<view class="content">
			<view class="title">按钮 - 基础用法</view>
			<n-button>default 按钮</n-button>
			<n-button type="primary">primary</n-button>
			<n-button type="danger">danger</n-button>
			<n-button type="success">success</n-button>
			<n-button type="warning">warning</n-button>
			<n-button type="info">info</n-button>
		</view>

		<view class="content">
			<view class="title">按钮 - 禁用</view>
			<n-button disabled>default 按钮</n-button>
			<n-button disabled type="primary">primary</n-button>
			<n-button disabled type="danger">danger</n-button>
			<n-button disabled type="success">success</n-button>
			<n-button disabled type="warning">warning</n-button>
			<n-button disabled type="info">warning</n-button>
		</view>

		<view class="content">
			<view class="title">按钮 - 朴素</view>
			<n-button plain>default 按钮</n-button>
			<n-button plain type="primary">primary</n-button>
			<n-button plain type="danger">danger</n-button>
			<n-button plain type="success">success</n-button>
			<n-button plain disabled type="warning">warning</n-button>
			<n-button plain disabled type="info">warning</n-button>
		</view>

		<view class="content">
			<view class="title">按钮 - 形状</view>
			<n-button plain>default 按钮</n-button>
			<n-button plain shape="round" type="primary">primary</n-button>
			<n-button plain shape="square" type="danger">danger</n-button>
			<n-button plain shape="round" type="success">success</n-button>
			<n-button plain shape="default" type="warning">warning</n-button>
			<n-button plain shape="round" disabled type="info">warning</n-button>
		</view>

		<view class="content">
			<view class="title">按钮 - 大小</view>
			<n-button size="normal" type="danger">danger</n-button>
			<n-button size="small" type="danger">danger</n-button>
			<n-button size="mini" type="danger">danger</n-button>
		</view>

		<view class="content">
			<view class="title">按钮 - block</view>
			<n-button block type="primary">danger</n-button>
		</view>
	</div>
</template>

<script setup lang="ts">
	import NButton from '~/components/n-button/index.vue'

	import { ref } from 'vue'
	const title = ref('Hello')
</script>

<style scoped lang="scss">
	.content {
		padding: 20rpx;
	}

	.title {
		font-size: 38rpx;
		font-weight: bold;
		color: dimgrey;
		margin: 20rpx 0;
	}
</style>
