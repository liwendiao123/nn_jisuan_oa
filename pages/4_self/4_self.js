

export default {

	data() {
		return {			
			//顶部tab选项卡
			current: 0,
			
		};
	},

	onLoad() {
	},
	methods: {
		onClickItem(index) {
			console.log(index)
			if (this.current !== index) {
				this.current = index
			}
		},
		
		click(method){
			switch (method){
				case "5_task_1self":
					uni.navigateTo({url:'/pages/5_task_1self/5_task_1self'})				
					break;
				case "5_task_2total":
					uni.navigateTo({url:'/pages/5_task_2total/5_task_2total'})				
					break;
				default:
					break;
			}
		},
	},
}