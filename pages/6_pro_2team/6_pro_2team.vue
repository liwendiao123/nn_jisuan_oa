<template>
	<view class="container">
		<view class="component ">
			<uni-list>
				<team-item :show-badge="true" title="张三" :tag="['周报管理','高层管理']" :badge-text="12"   />
				<team-item :show-badge="true" :showArrow="true" title="张三" :tag="['产品经理']" :badge-text="12"  />
			</uni-list>
		</view>
		
		
	</view>
</template>

<script src="./6_pro_2team.js"></script>

<style src="./6_pro_2team.css"></style>