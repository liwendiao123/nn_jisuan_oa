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
		</view>
		<view class="component">
				<task-list :list="taskList"></task-list>
		</view>
		
		<view class="" style="height: 50px;">
			
		</view>
		
		<navigator url="/pages/2_work_2editor/2_work_2editor" hover-class="navigator-hover" class="btn">
			<button type="default">新增工作清单</button>
		</navigator>
	</view>
</template>

<script src="./2_work_1search.js"></script>

<style src="./2_work_1search.css"></style>