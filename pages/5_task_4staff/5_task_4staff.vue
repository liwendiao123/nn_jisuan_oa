<template>
	<view class="container">
		
			<!-- 项目首页 -->
		<view class="component white ">
			<view class="flex">
				<chart-arc></chart-arc>
			</view>
		</view>
		<template v-for="(item,key) in list">
			<view class="component ">
				<task-process-single></task-process-single>
			</view>
		</template>
	</view>
</template>

<script src="./5_task_4staff.js"></script>

<style src="./5_task_4staff.css"></style>