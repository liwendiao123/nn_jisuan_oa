

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			
			mark:"我的",
				
				
					
			dragList:[
				{status:0,
				  name:"王五",
				  content:"撒活动撒后",
				  // tag:["我的","日志"],
				  date:"2019-06-15",
				},
				{status:1,
				  name:"王五",
				  content:"撒活动撒后",
				  date:"2019-06-15",
				},
				{status:2,
				  name:"王五",
				  content:"撒活动撒后",
				  date:"2019-06-15",
				},
				{status:3,
				  name:"王五",
				  content:"撒活动撒后",
				  date:"2019-06-15",
				},
			],
			
			taskList:[
				{status:0,
				  name:"王五",
				  content:"撒活动撒后",
				  tag:["我的","日志"],
				  date:"2019-06-15",
				},
				{status:1,
				  name:"王五",
				  content:"撒活动撒后",
				  tag:["我的"],
				  date:"2019-06-15",
				},
				{status:2,
				  name:"王五",
				  content:"撒活动撒后",
				  tag:["日志"],
				  date:"2019-06-15",
				},
				{status:3,
				  name:"王五",
				  content:"撒活动撒后",
				  tag:["我的","日志","123日志"],
				  date:"2019-06-15",
				},
			],
			
			//顶部tab选项卡
			items: [
				'选项卡1',
				'选项卡2',
				'选项卡3'
			],
			colors: [
				'#007aff',
				'#4cd964',
				'#dd524d'
			],
			current: 0,
			colorIndex: 0,
			activeColor: '#007aff',
			styleType: 'text',
			
			// 表格
			tableData : [
				{name:"张三",age:18,gender:"难"},
				{name:"张三",age:18,gender:"难"},
			],
			columns :[
				{title:"姓名",key:"name",width:100},
				{title:"性别",key:"gender",width:325},
				{title:"年龄",key:"age",width:'325rpx'},
			],
			
		};
	},

	onLoad() {
	},
	onNavigationBarButtonTap (e){
		console.log(e)
	},
	methods: {
	
		/**
		 * @method 拖拽事件
		 */		
		onDragSortChange(e){
			console.log(e)
		},
		
		change(e){
			console.log(e)
		},
		
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index
			}
		},
	},
}