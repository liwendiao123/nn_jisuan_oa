<template>
	<view class="container">


			
		<view class="component search">
			<input class="input" type="text" value="" focus="true" />
		</view>
		<view class="component ">
			<xx-mark text="项目名称"></xx-mark>
		</view>
		<!-- 饼状图 -->
		<view class="component flex_center">
			<chart-arc></chart-arc>
			<chart-arc></chart-arc>
		</view>
		
		<template v-for="(item,key) in list">
			<view class="component ">
				<task-process></task-process>
			</view>
		</template>
		
	</view>
</template>

<script src="./5_task_3pro.js"></script>

<style src="./5_task_3pro.css"></style>