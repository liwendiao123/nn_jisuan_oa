<template>
	<view class="content">
		<view class="status white line_top">
			<view class="node">
				<view class="type">进行中</view>
				<view class="des">状态</view>
			</view>
			<view class="node" @click="toSub">
				<view class="number">10</view>
				<view class="des">子任务</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	

	export default {
		props:{
			text:{
				type:String,
				default :()=>{
					return "321"
				},
			},
			type:{
				type:String,
				default :"pre",
			},
		},
		data() {
            return {
				PRE:'pre',
				ING:'ing',
				COMPLETE:'complete',
				CLOSE:'close',
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
		// padding:0 15px ;
		// background-color: #fff;
		// display: flex;
		// justify-content: space-around;
		// align-items: center;
		// text-align: center;
		// padding: 10px 0; 
		// font-display: 11pt;
	}
	.flex{
		display: flex;
		justify-content: center;
	}
	
	.status{
		display: flex;
		justify-content: space-around;
		text-align: center;
		color:#999;
		padding: 10px;
	}	
	.status .type{ font-size:  11pt; color: #f19770;}
	.status .number{  font-size:  11pt; color: #9999ff;}
	
	.menu{
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10px 0;
		background-color: #fff;
		z-index: 999999;
	}	
		
</style>
