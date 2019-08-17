<template>
	<view class="content">
		<view class="header">
			<view class="status ing">进行中</view>
			<view class="status pre">已审批</view>
		</view>
		<view class="" style="height: 10px;"></view>
		<view class="title" >集团合同管理系统技术优化服务项目集团合同管理系统技术优化服务项目</view>
		
		<view class="" style="height: 10px;"></view>
		
		<view class="program">
			<view class="node">
				<view class="name">张三三</view>
				<view class="des">项目经理</view>
			</view>
			<view class="line"></view>
			<view class="node">
				<view class="name">张三三</view>
				<view class="des">项目经理</view>
			</view>
			<view class="line"></view>
			<view class="node">
				<view class="name">张三三</view>
				<view class="des">项目经理</view>
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
						  status:1,
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

<style lang="scss">
	.content{
		padding: 15px;
		background-color: #fff;
		border-top: 1rpx #eee solid;
		border-bottom: 1rpx #eee solid;
	}
	.header{
		display: flex;
		justify-content: space-between;		
	}	
	.title{
		    // overflow: hidden;
		white-space: wrap;
		// -o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		// width: 300rpx;
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
	
	
	.program{ 
		display: flex;
		justify-content: space-around;
		text-align: center;
		.node{ }
		.name{ font-size: $oa-font-base; color:$uni-text-color }
		.des{  font-size: $oa-font-des;color: $uni-text-color-grey }
		.line{width: 1px; border-right: 1rpx #eee solid;}
	}

</style>
