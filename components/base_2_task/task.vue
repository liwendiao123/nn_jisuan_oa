<template>
   <view class="page">
		<view class="uni-triplex-row">
			<view class="uni-triplex-left">
				<text class=" uni-ellipsis" >
					<view v-if="node.status == PRE" class="status pre">未开始</view>
					<view v-if="node.status == ING" class="status ing">进行中</view>
					<view v-if="node.status == COMPLETE" class="status complete">已完成</view>
					<view v-if="node.status == CLOSE" class="status close">已关闭</view>
				</text>
				
				
				<text :class="node.status == CLOSE ? 'delete uni-text':'uni-text'">{{node.content}}</text>
				
				<view class="" v-if="showTag" >
					<uni-tag class="tag" :circle="true"  :text="item" size="small" v-for="(item,key) in node.tag" />
				<!-- <uni-tag :circle="true" text="标签" type="primary" size="small" /> -->
				</view>
				
				
				<view v-if="node.status == PRE" class="uni-text-small uni-ellipsis  "> <view class="date dpre">计划开始时间:{{node.date}}</view></view>
				<view v-if="node.status == ING" class="uni-text-small uni-ellipsis  "> <view class="date ding">计划结束时间:{{node.date}}</view></view>
				<view v-if="node.status == COMPLETE" class="uni-text-small uni-ellipsis  "> <view class="date dcomplete">实际结束时间:{{node.date}}</view></view>
				<view v-if="node.status == CLOSE" class="uni-text-small uni-ellipsis  "> <view class="date dclose">实际结束时间:{{node.date}}</view></view>
				
					<!-- <view v-if="node.status == PRE" class="uni-text-small uni-ellipsis date pre">{{node.date}}</view>
					<view v-if="node.status == ING" class="uni-text-small uni-ellipsis  date ing">{{node.date}}</view>
					<view v-if="node.status == COMPLETE" class="uni-text-small uni-ellipsis  date complete">{{node.date}}</view>
					<view v-if="node.status == CLOSE" class="uni-text-small uni-ellipsis date  close ">{{node.date}}</view> -->
					
				<!-- <text class="uni-text-small uni-ellipsis">{{node.date}}  </text> -->
			</view>
			<view class="uni-triplex-right">
				<text class="uni-h5 name">{{node.name}}</text>
			</view>
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
						  status:0,
						  name:"王五",
						  content:"撒活动撒后",
						  date:"2019-06-15",
						  tag:[],
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

<style>
	.uni-triplex-row{
		padding: 0;
	}
	
	.delete{
		text-decoration:line-through ;
	}
	
	.uni-text{
		margin: 5px 0;
		font-size: 11pt;
	}
	.tag{
		margin:0 5px 5px 0;
	}
	
	.uni-title{
	}
	.status{
		display: inline-block;
		color: #ffffff;
		padding:2px 10px ;
		font-size: 9pt;
		border-radius: 5px;
	}
	.pre{background-color: #e1e1e1;}
	.ing{background-color: #00cc66;}
	.complete{background-color: #3399ff;}
	.close{background-color: #ff6600;}
	
	
	.date{
		display: inline-block;
		color: #888;
		padding:2px 10px ;
		font-size: 9pt;
		border-radius: 5px;
	}	
	.dpre{background-color: rgba(225,225,225,0.6);}
	.ding{background-color: rgba(0,204,102,0.6);color: #fff;}
	.dcomplete{background-color: rgba(51,153,255,0.6);color: #fff;}
	.dclose{background-color: rgba(255,103,0,0.6);color: #fff; }
	
	.name{;
		background-color: #cce6ff;
		margin-top: 2px;
		padding:2px 15PX 2px 15px ;
		font-size: 9pt;
		/* padding-right:10px ; */
	}
</style>
