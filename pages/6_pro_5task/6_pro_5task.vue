<template>
	<view class="container">
		<view class="component">
			<uni-collapse @change="change">
				<uni-collapse-item title="下拉菜单">
					<uni-list>
						<uni-list-item title="选项1" />
						<uni-list-item title="选项2" />
						</uni-list>
				</uni-collapse-item>
			</uni-collapse>
			<tabbar :list="tabBars"></tabbar>
			
			TODO 搜索类型
		</view>
		<view class="component">
				<task-list :list="taskList"></task-list>
		</view>
		
		<view class="" style="height: 50px;">
			
		</view>
		
	</view>
</template>

<script src="./6_pro_5task.js"></script>

<style src="./6_pro_5task.css"></style>