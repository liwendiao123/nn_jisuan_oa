

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			
		};
	},

	onLoad() {
	},
	methods: {
		click(method){
			switch (method){
				case 'program':
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				case 'work':
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				case 'task':
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				case 'week':
					uni.navigateTo({url:'/pages/2_work_2editor/2_work_2editor'})
					break;
				default:
					break;
			}
		},
	},
}