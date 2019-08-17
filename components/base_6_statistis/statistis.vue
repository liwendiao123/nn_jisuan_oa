<template>
	<view class="content">
		<view class="leaf pre" >
			<view class="">未开始</view>
			<view class="">{{node.pre}}</view>
		</view>
		<view class="leaf ing" >
			<view class="">进行中</view>
			<view class="">{{node.ing}}</view>
		</view>
		<view class="leaf complete" >
			<view class="">已完成</view>
			<view class="">{{node.complete}}</view>
		</view>
		<view class="leaf close" >
			<view class="">已关闭</view>
			<view class="">{{node.close}}</view>
		</view>
	</view>
</template>

<script>
	

	export default {
		props:{
			node:{
				type:Object,
				default :()=>{
					return {
						pre:10,
						ing:23,
						complete:564,
						close:6,
					}
				},
			},
		},
		data() {
            return {
				
			}
		},
		created() {
		
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		padding: 10px 0; 
		font-display: 11pt;
	}

	.pre{color: $oa-color-pre;}
	.ing{color: $oa-color-ing;}
	.complete{color: $oa-color-complete;}
	.close{color: $oa-color-close;}
		
</style>
