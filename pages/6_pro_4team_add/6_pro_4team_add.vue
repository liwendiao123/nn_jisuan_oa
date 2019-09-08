<template>
	<view class="container">
				
		<view class=" search">
			<input class="input" type="text" value="" focus="true" />
		</view>
		<uni-notice-bar text="项目总数" @getmore="to6Pro" />		
		<view class="component ">
			<uni-list>
				<checkbox-group @change="checkboxChange">
					<team-item :showCheck="true" :check="{value:'1',checked:true}" :show-badge="true" title="张三" :tag="['30']" :badge-text="12"   />
					<team-item :showCheck="true" :check="{value:'2',checked:false}" :show-badge="true" :showArrow="true" title="李四" :tag="['40']" :badge-text="12"  />
				</checkbox-group>
			</uni-list>
		</view>
	</view>
</template>

<script src="./6_pro_4team_add.js"></script>

<style src="./6_pro_4team_add.css"></style>