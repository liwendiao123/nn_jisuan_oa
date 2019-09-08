<template>
	<view class="container">

		<view class="component ">
			<view class="uni-list">
				<uni-swipe-action :options="options1">
					<team-item :show-badge="true" title="张三" :tag="['周报管理','高层管理']" :badge-text="12"   />
				</uni-swipe-action>
				<uni-swipe-action :options="options1">
					<team-item :show-badge="true" title="张三" :tag="['周报管理','高层管理']" :badge-text="12"   />
				</uni-swipe-action>
				<uni-swipe-action :options="options1">
					<team-item :show-badge="true" title="张三" :tag="['周报管理','高层管理']" :badge-text="12"   />
				</uni-swipe-action>
				<uni-swipe-action :options="options1">
					<team-item :show-badge="true" title="张三" :tag="['周报管理','高层管理']" :badge-text="12"   />
				</uni-swipe-action>
			<!-- 	<uni-swipe-action :options="options2">
					<uni-list-item :show-arrow="false" title="item2" />
				</uni-swipe-action>
				<uni-swipe-action :options="options3">
					<uni-list-item :show-arrow="false" title="item3" />
				</uni-swipe-action> -->
			</view>
		</view>
	</view>
</template>

<script src="./6_pro_3team_editor.js"></script>

<style src="./6_pro_3team_editor.css"></style>