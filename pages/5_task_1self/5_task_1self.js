

export default {

	data() {
		return {			
			tabBars: [
				{
					name: '指派给我',
					id: 'guanzhu'
				}, {
					name: '由我创建',
					id: 'tuijian'
				}, 
			],
			
					
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
		 * @method 筛选切换
		 */		
		change(e){
			console.log(e)
		},
		
		/**
		 * @method 拖拽事件
		 */		
		onDragSortChange(e){
			console.log(e)
		},
	}
		
}