<template>
	<view class="container">
		<view class="component ">
			<uni-collapse @change="change">
				<uni-collapse-item title="下拉菜单">
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
			<xx-mark text="经营管理层"></xx-mark>
		</view>
		<view class="component ">
			<uni-list>
				<team-item :show-badge="true" title="张三" :tag="['周报管理','项目管理','项目管理']" :badge-text="12"   />
				<team-item :show-badge="true" :showArrow="true" title="张三" :tag="['工作999','任务999','项目:999']" :badge-text="12"  />
			</uni-list>
		</view>
		
		<view class="component ">
			<xx-mark text="中心领导"></xx-mark>
		</view>
		<view class="component ">
			<uni-list>
				<team-item :show-badge="true" title="张三" :tag="['周报管理','项目管理','项目管理']" :badge-text="12"   />
				<team-item :show-badge="true" :showArrow="true" title="张三" :tag="['工作999','任务999','项目:999']" :badge-text="12"  />
			</uni-list>
		</view>
	</view>
</template>

<script src="./7_more_2staff.js"></script>

<style src="./7_more_2staff.css"></style>