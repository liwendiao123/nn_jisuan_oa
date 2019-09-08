

export default {

	data() {
		return {			
			tabBars: [
				{
					name: '全部',
					id: 'guanzhu'
				}, {
					name: '进行中',
					id: 'tuijian'
				}, {
					name: '未开始',
					id: 'tiyu'
				}, {
					name: '已完成',
					id: 'redian'
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
	methods: {
		change(e){
			console.log(e)
		},
	},
}