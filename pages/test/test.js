

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
		}
	},
}