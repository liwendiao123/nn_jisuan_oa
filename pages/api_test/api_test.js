

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			
			mark:"我的",
			
		};
	},

	onLoad() {
		this.onAPI()
		// this.Two()
	},
	methods: {
		onAPI(){
			this.$db.getName().then(res=>{
				console.log(res)
			})
		},
		// Two(){
		// 	
		// },
	},
}