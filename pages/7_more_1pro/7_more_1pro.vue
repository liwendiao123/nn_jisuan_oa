<template>
	<view class="container">
		<view class="component line">
			<uni-collapse @change="change">
				<uni-collapse-item title="下拉菜单">
					<uni-list>
						<uni-list-item title="选项1" />
						<uni-list-item title="选项2" />
						</uni-list>
				</uni-collapse-item>
			</uni-collapse>
			<tabbar :list="tabBars"></tabbar>
		</view>
		<view class="component">
			<task-program></task-program>
			<task-program></task-program>
			<task-program></task-program>
		</view>
<!-- 			 <scroll-view class="scroll-view_H" scroll-x="true" >
				<view id="demo2" class="delete">删除</view>
			</scroll-view> -->
		
		<view class="" style="height: 50px;"></view>
	</view>
</template>

<script src="./7_more_1pro.js"></script>

<style src="./7_more_1pro.css"></style>