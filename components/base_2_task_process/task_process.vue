<template>
   <view class="page">
		<view class="content">
				<view class="header">
					<text class="" >{{node.name}}</text>
					<text class="" >
						<view v-if="node.status == PRE" class="status pre">未开始</view>
						<view v-if="node.status == ING" class="status ing">进行中</view>
						<view v-if="node.status == COMPLETE" class="status complete">已完成</view>
						<view v-if="node.status == CLOSE" class="status close">已关闭</view>
					</text>
				</view>
				<view class="" style="height: 10px;"></view>
				<view class="flex work">
					<view style="font-size: 9pt">计划工作数：{{node.work}}</view>
					<view style="font-size: 9pt">工作完成数：{{node.work_complete}}</view>
				</view>				
				<view class="progress-box">
					<progress percent="20" show-info stroke-width="3" activeColor="#1abc9c" />
				</view>
				<view class="" style="height: 10px;"></view>
				
				<view class="flex task">
					<view style="font-size: 9pt">任务指派数：{{node.task}}</view>
					<view style="font-size: 9pt">任务完成数：{{node.task_complete}}</view>
				</view>				
				<view class="progress-box">
					<progress percent="20" show-info stroke-width="3"  activeColor="#ff6633"  />
				</view>
				
				
				
				
				
				<!-- <view v-if="node.status == PRE" class="uni-text-small uni-ellipsis  "> <view class="date dpre">计划开始时间:{{node.date}}</view></view>
				<view v-if="node.status == ING" class="uni-text-small uni-ellipsis  "> <view class="date ding">计划结束时间:{{node.date}}</view></view>
				<view v-if="node.status == COMPLETE" class="uni-text-small uni-ellipsis  "> <view class="date dcomplete">实际结束时间:{{node.date}}</view></view>
				<view v-if="node.status == CLOSE" class="uni-text-small uni-ellipsis  "> <view class="date dclose">实际结束时间:{{node.date}}</view></view>
				 -->
					<!-- <view v-if="node.status == PRE" class="uni-text-small uni-ellipsis date pre">{{node.date}}</view>
					<view v-if="node.status == ING" class="uni-text-small uni-ellipsis  date ing">{{node.date}}</view>
					<view v-if="node.status == COMPLETE" class="uni-text-small uni-ellipsis  date complete">{{node.date}}</view>
					<view v-if="node.status == CLOSE" class="uni-text-small uni-ellipsis date  close ">{{node.date}}</view> -->
					
				<!-- <text class="uni-text-small uni-ellipsis">{{node.date}}  </text> -->
			
		</view>
    </view>
</template>
<!--    '' -->
<script>
	 export default {
        data() {
            return {
				/**
				 * 卡片状态
				 * 0、未开始
				 * 1、进行中
				 * 2、已完成
				 * 3、已关闭
				 */
				// status:0, 
				PRE:0,
				ING:1,
				COMPLETE:2,
				CLOSE:3,
            }
        },
		 props: {
			node:{
				type: Object,
				default: () => {
					return {
						  status:1,
						  name:"王五",
						  work:100,
						  work_complete:80,
						  task:100,
						  task_complete:80,
					}
				}
			},
			// 是否展示标签项目
			showTag:{
				type:Boolean,
				default:false,
			}
		},
    }
</script>

<style lang="scss">
	.content{
		padding: 15px;
		background-color: #fff
	}
	.header{
		display: flex;
		justify-content: space-between;		
	}	

	.flex{
		display: flex;
		justify-content: space-around;

	}
	.work , .task{ font-size: 9pt !important;}
	.work{
		color:$oa-color-work;
		.uni-progress-info {
			color:$oa-color-work !important;
		}
	}	
	.task{
		color:$oa-color-task;
	}
	
	.status{
		display: inline-block;
		color: #ffffff;
		padding:2px 10px ;
		font-size: 9pt;
		border-radius: 5px;
	}
	.pre{background-color: $oa-color-pre;}
	.ing{background-color: $oa-color-ing;}
	.complete{background-color: $oa-color-complete;}
	.close{background-color: $oa-color-close;}
	

</style>
