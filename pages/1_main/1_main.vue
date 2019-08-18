<template>
	<view class="container">
			<!-- 顶部选项卡 -->
		<uni-segmented-control 
			:current="current" 
			:values="['项目','员工']" 
			style-type="text" 
			@clickItem="onClickItem"
		 />
		 
		<!-- 项目页面 -->
		 <view v-if="current==0" class="">	
			<!-- 通知 -->
			<view class="component">
				<uni-notice-bar 
					:show-get-more="true" :show-icon="true" :single="true" 
					text="项目总数" more-text="120" @getmore="to6Pro" />		
			</view>
					
			<!-- 饼状图 -->
			<view class="component flex_center">
				<chart-arc></chart-arc>
				<chart-arc></chart-arc>
			</view>
			
			<view class="component ">
				<xx-mark text="任务统计"></xx-mark>
			</view>
			<view class="component white">
				<statistis></statistis>
			</view>
			<view class="component white"  v-for="(item,key) in proList"  @click="clickPro(key)">
				<task-process :node="item"></task-process>
			</view>
					
							
		 </view>
		 
		 <!-- 任务页面 -->
		 <view v-if="current==1" class="">
			 <view class="component"></view>
					<!-- 饼状图 -->
			<view class="component flex_center white">
				<chart-arc></chart-arc>
			</view>
			<view class="component white"   >
				<!-- <task-process :node="item"></task-process> -->
				<task-process-single v-for="(item,key) in staffList" :node="item" class="line"></task-process-single>
			</view>
					
		 </view>
			
	</view>
	
</template>

<script src="./1_main.js"></script>

<style src="./1_main.css"></style>