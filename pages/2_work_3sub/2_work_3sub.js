

export default {

	data() {
		return {			
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
			
		};
	},

	onLoad() {
	},
	methods: {
		/**
		 * @method 拖拽事件
		 */		
		onDragSortChange(e){
			console.log(e)
		},
	},
}