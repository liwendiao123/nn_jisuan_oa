<template>
	<view class="container">
		<view class="component ">
			<uni-collapse @change="change">
				<uni-collapse-item title="筛选">
					<uni-list>
						<uni-list-item title="选项1" />
						<uni-list-item title="选项2" />
						</uni-list>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view class="component ">
			<tabbar :list="tabBars"></tabbar>
		</view>
		
		<view class="component ">
			<dragSort :list="dragList"  @change="onDragSortChange"></dragSort>
		</view>
		
		<view class="" style="height: 50px;"></view>
			
		<navigator url="/pages/2_work_2editor/2_work_2editor" hover-class="navigator-hover" class="btn">
			<button type="default">新增工作清单</button>
		</navigator>
	</view>
</template>

<script src="./5_task_1self.js"></script>

<style src="./5_task_1self.css"></style>