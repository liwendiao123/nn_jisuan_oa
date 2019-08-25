<template>
	<view class="container">
		<view class="box">
			<view class="node" @click="click('program')">新建<br>项目</view>
			<view class="node" @click="click('work')">新增<br>工作</view>
			<view class="node" @click="click('task')">新增<br>任务</view>
		</view>	
		<view class="box">
			<view class="node" @click="click('week')">提交<br>周报</view>
			<view class="none"></view>
			<view class="none"></view>
		</view>	
		
	<!-- 	<view class="node"></view>
		<view class="node">新建项目</view>
		<view class="node">新建项目</view> -->
	</view>
</template>

<script src="./3_add.js"></script>

<style src="./3_add.css"></style>