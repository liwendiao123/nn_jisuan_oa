<template>
	<view class="container">
		
		<view class="component ">
			<uni-segmented-control 
				:current="current" 
				:values="['任务','项目']" 
				style-type="text" 
				@clickItem="onClickItem"
			 />
		</view>
				
		<view class="component ">
			<xx-mark text="任务"></xx-mark>
		</view>
		 
		<view class="component " @click="click('5_task_1self')">
			<uni-list>
				<uni-list-item :show-arrow="false" title="我的任务"
				thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"/>
			</uni-list>
		</view>
		 
		<view class=" component ">
			<xx-mark text="统计"></xx-mark>
		</view>
		<view class="component " @click="click('5_task_2total')">
		<uni-list>
			<uni-list-item :show-arrow="false" title="项目人员工作量与实施情况"
			thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"/>
		</uni-list>
		 </view>
		 
<!-- 		<navigator url="/pages/5_task_1self/5_task_1self" hover-class="navigator-hover">
			<button type="default">我的任务</button>
		</navigator>	
		<navigator url="/pages/5_task_2total/5_task_2total" hover-class="navigator-hover">
			<button type="default">项目人员工作量与实施情况</button>
		</navigator>	
		
		<navigator url="/pages/6_pro/6_pro" hover-class="navigator-hover">
			<button type="default">我的项目</button>
		</navigator> -->	
	</view>
</template>

<script src="./4_self.js"></script>

<style src="./4_self.css"></style>