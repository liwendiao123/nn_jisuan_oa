

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
		toSub(){
			uni.navigateTo({
				url:"/pages/2_work_3sub/2_work_3sub"
			})
		},
	},
}