

export default {

	data() {
		return {			
			menu:[
				{},
			],
			data1: [{
						image: '/static/c1.png',
						text: '周报管理'
					},
					{
						image: '/static/c2.png',
						text: '项目任务'
					},
					{
						image: '/static/c3.png',
						text: '项目团队'
					},
					{
						image: '/static/c4.png',
						text: '所有项目'
					},
					{
						image: '/static/c5.png',
						text: '人员分工'
					},
				],
		};
	},

	onLoad() {
	},
	methods: {
		onClick(e) {
			var index = e.index
			switch (index){
				case 0:
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				case 1:
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				case 2:
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				case 3:
					uni.navigateTo({url:'/pages/7_more_1pro/7_more_1pro'})
					break;
				case 4:
					uni.navigateTo({url:'/pages/7_more_2staff/7_more_2staff'})
					break;
				default:
					break;
			}
			// console.log(e)
			// console.log('点击grid:' + JSON.stringify(e))
		}
	},
}