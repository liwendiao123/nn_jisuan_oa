<template>
	<view class="container">
		<view class="pd15">
			(具体工作内容具体工作内容具体工作内容具体工作内容具体工作内容具体工作内容具体工作内容具体工作内容)
		</view>
		
		
		<view class="">
			<task-status></task-status>
		</view>
		<!-- <view class="status white line_top">
			<view class="node">
				<view class="type">进行中</view>
				<view class="des">状态</view>
			</view>
			<view class="node" @click="toSub">
				<view class="number">10</view>
				<view class="des">子任务</view>
			</view>
		</view> -->
		
		<view class="component ">
			<uni-list>
				<uni-list-item :showText="true" title="计划开始时间" badge-text="2019-06-13"  />
				<uni-list-item :showText="true" title="计划结束时间" badge-text="2019-06-13"  />
				<uni-list-item :showText="true" title="实际开始时间" badge-text="2019-06-13"  />
				<uni-list-item :showText="true" title="实际结束时间" badge-text="2019-06-13"  />
			</uni-list>
		</view>
		<view class="component ">
				<xx-mark text="任务统计"></xx-mark>
		</view>
		<view class="component ">
			<uni-list>
				<uni-list-item :showText="true" title="所有项目" badge-text="2019-06-13"  />
				<uni-list-item :showText="true" title="模板类型" badge-text="2019-06-13"  />
				<uni-list-item :showText="true" title="工作内容大类" badge-text="2019-06-13"  />
				<uni-list-item :showText="true" title="工作内容小类" badge-text="甲方需求确认"  />
				<uni-list-item :showText="true" title="免责人" badge-text="张三"  />
				<uni-list-item :showText="true" title="序号" badge-text="1"  />
				<uni-list-item :showText="true" title="备注" badge-text="2019-06-13"  />
			</uni-list>
		</view>
		
		<view style="height:50px"></view>
		<view class="menu line_top">			
			<button type="primary" size="mini">转为任务</button>
			<button type="warn"  size="mini">删除工作</button>		
		</view>
	<!-- 	<navigator url="/pages/2_work_3sub/2_work_3sub" hover-class="navigator-hover">
			<button type="default">子项目</button>
		</navigator> -->
	</view>
</template>

<script src="./2_work_2editor.js"></script>

<style src="./2_work_2editor.css" type="scss"></style>