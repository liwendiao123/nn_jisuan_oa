<template>	
	<view class="container">
		
		
		左右滑动
		<view class="uni-list">
			<uni-swipe-action :options="options1">
				<uni-list-item :show-arrow="false" title="item1" />
			</uni-swipe-action>
			<uni-swipe-action :options="options2">
				<uni-list-item :show-arrow="false" title="item2" />
			</uni-swipe-action>
			<uni-swipe-action :options="options3">
				<uni-list-item :show-arrow="false" title="item3" />
			</uni-swipe-action>
		</view>
		<view class="" style="height: 20px;"></view>
		
		<uni-list>
			<team-item :show-badge="true" :badge-text="12" :tag="['周报管理','项目管理','项目管理']" title="标题文字"  />
			<team-item :show-badge="true" :badge-text="12" :tag="['工作总数:999','任务总数:999','项目:999']" title="标题文字"  />
		</uni-list>
		
			
		<view class="" style="height: 20px;"></view>
			
			
		<z-table :tableData="tableData" :columns="columns" :stickSide="true"></z-table>	
		<view class="" style="height: 20px;"></view>
			
			
		<task-program></task-program>
		<view class="" style="height: 20px;"></view>
		<!-- mark标签 -->
		<xx-mark></xx-mark>
		<xx-mark type="ing" text="哈哈"></xx-mark>
		<xx-mark type="complete" text="完成"></xx-mark>
		<xx-mark type="close" text="好多"></xx-mark>
			
		<!-- 顶部选项卡 -->
	<!-- 	<uni-segmented-control 
			:current="current" 
			:values="items" 
			:style-type="styleType" 
			:active-color="activeColor" 
			@clickItem="onClickItem" /> -->
			
		<uni-segmented-control 
				:current="current" 
				:values="['项目','员工']" 
				style-type="text" 
				@clickItem="onClickItem" />
		
			<task-process-single></task-process-single>
		
			<task-process></task-process>
			<view class="" style="height: 20px;"></view>
		
		
			<!-- 项目首页 -->
			<view class="flex">
				<chart-arc></chart-arc>
				<chart-arc></chart-arc>
			</view>
			
			<statistis></statistis>
			
			
			<!-- 查找项目页面 -->
			<uni-collapse @change="change">
				<uni-collapse-item title="项目类别">
					<uni-list>
						<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png" />
						<uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
						</uni-list>
				</uni-collapse-item>
			</uni-collapse>
			<tabbar :list="taskList"></tabbar>
			<view class="uni-form-item uni-column">
				<input class="uni-input" name="input" placeholder="请输入关键字搜索" />
			</view>
			<uni-collapse @change="change">
				<uni-collapse-item title="2019年6月开始" :open="true" >
					<uni-list>
						<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png" />
						<uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
						</uni-list>
				</uni-collapse-item>
			</uni-collapse>
			
			
			
			<!-- 拖拽页面 -->
			<dragSort :list="dragList"  @change="onDragSortChange"></dragSort>
			<view class="" style="height: 20px;"></view>
			
			<!-- 任务栏页面 -->
			<task-list :list="taskList"></task-list>
			
			<view>
			<view class="example-title">基本用法</view>
			<uni-list>
				<uni-list-item :show-arrow="false" title="标题文字" />
				<uni-list-item title="标题文字" />
				<uni-list-item :show-badge="true" badge-text="我的" title="标题文字" badgeType="warning"/>
				<uni-list-item :showText="true" badge-text="2019-06-13至2019-06-13" title="标题文字" />
				<uni-list-item :showText="true" :show-arrow="false" badge-text="杨程：[拟同意。其他文字其他文字] 2019-05-28 20:18:03" title="标题文字" />
				<uni-list-item :disabled="true" :show-badge="true" :badge-text="23" title="禁用状态" />
			</uni-list>
			<view class="example-title">包含描述信息</view>
			<uni-list>
				<uni-list-item :show-arrow="false" title="标题文字" note="描述信息" />
				<uni-list-item title="标题文字" note="描述信息" />
				<uni-list-item :show-badge="true" :badge-text="12" title="标题文字" note="描述信息" />
			</uni-list>
			<view class="example-title">显示缩略图</view>
			<uni-list>
				<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png" />
				<uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
			</uni-list>
			<view class="example-title">显示扩展图标</view>
			<uni-list>
		<!-- 		<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="标题文字" />
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon2" title="标题文字" note="描述信息" /> -->
			</uni-list>
			<view class="example-title">显示Switch</view>
			<uni-list>
				<uni-list-item :show-switch="true" :show-arrow="false" title="标题文字" @switchChange="switchChange" />
				<uni-list-item :show-switch="true" :switch-checked="true" :show-arrow="false" title="标题文字" @switchChange="switchChange" />
				<uni-list-item :disabled="true" :show-switch="true" :switch-checked="true" :show-arrow="false" title="禁用状态" @switchChange="switchChange" />
			</uni-list>
		</view>
	</view>
</template>

<script src="./test.js"></script>

<style src="./test.css"></style>