<template>
	<view class="">
		<view class="task_content" v-for="(item,key) in list" style="">
			<task class="task" :node="item" :showTag="true"></task>
		</view>
	</view>

</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default: () => {
				  return []
				}
			}
		},
	}
</script>

<style>
	
	.task_content{
		padding:15px;
		background-color: #fff;
	}
	.task_content::after {
		
	 /*   position: absolute;
	    z-index: 3;
	    right: 0;
	    bottom: 0;
	    left: 15px; */
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    -ms-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
</style>
