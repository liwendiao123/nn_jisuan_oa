<template>
		
	<!-- 圆弧进度图 -->
	<view class="qiun-charts3">
		
		<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3"></canvas>
		<view class="summary">
			<view class="title">{{node.mode==MODE_WORK?"工作总数":"任务总数" }}</view>
			<view class="number">2</view>
			<view class="title">工作完成数</view>
			<view class="number">2</view>
		</view>
		<!-- <canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 250upx;"></canvas> -->
		<!-- <canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 500upx;"></canvas> -->
	</view>
	
</template>

<script>
	var _self;
	export default{
		props:{
			node:{
				type:Object,
				default:()=>{
					return {
						"mode":"work",
						"all":23,
						"complete":20,						
					}
				},
			},
		},
		data(){
			return {
				MODE_WORK :"work",
				MODE_TASK :"task",
				
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50
			}
		},
		created() {
			
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(8);
			
			_self = this
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
				data: {},
				success: function(res) {
					_self.fillData(res.data);
				},
				fail: () => {
					_self.tips = "网络错误，小程序端请检查合法域名";
				},
				complete() {
					uni.hideLoading();
				}
			});
			// this.fillData()
		},
		methods:{
			fillData(data) {
				this.serverData = data;
				this.tips = data.tips;
				this.sliderMax = data.Candle.categories.length;
				
				// debugger
				let Arcbar1 = {
					series: []
				};
				let Arcbar2 = {
					series: []
				};
				let Arcbar3 = {
					series: []
				};
				Arcbar1.series = data.Arcbar1.series;
				// Arcbar2.series = data.Arcbar2.series;
				// Arcbar3.series = data.Arcbar3.series;
				
				var chartData1 = {
					series: [{
						name: '正确率',
						data: 0.89,
						color: '#2fc25b'
					}]
				}
				var chartData2 = {
					series: [{
						name: '正确率2',
						data: 0.19,
						color: '#2fc25b'
					}]
				}
		
				this.showArcbar("canvasArcbar1", chartData1);
				this.showArcbar("canvasArcbar2", chartData2);
				// this.showArcbar("canvasArcbar1", chartData1);
				// this.showArcbar2("canvasArcbar2", Arcbar2);
				// this.showArcbar3("canvasArcbar3", Arcbar3);
			},
			showArcbar(canvasId, chartData) {
				var uCharts = this.$uCharts
				// debugger
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: (chartData.series[0].data * 100 )+ '%',
						// name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						// name: chartData.series[0].name,
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio , //圆弧的宽度
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
		},
	}
</script>

<style>
	/* summary */
	.summary{
		text-align: center;
	}
	.title{
		font-size: 9pt;
		color: #888;
	}
	.number{
		
		font-size: 20pt;
		color: #666;
		font-weight: bold;
		line-height: 22pt;
	}
	
	
	
	/* 圆弧进度样式 */
	.qiun-charts3 {
		/* width: 750upx; */
		/* height: 250upx; */
		background-color: #FFFFFF;
		/* position: relative; */
		display: flex;
		align-items: center;
	}

	.charts3 {
		/* position: absolute; */
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		/* overflow: hidden; */
		padding: 15upx;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx;
		background: #ff9933;
		font-size: 30upx;
		border-radius: 8upx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
	
</style>
