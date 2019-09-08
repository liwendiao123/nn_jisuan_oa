

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
		checkboxChange: function (e) {
			console.log(e.detail.value)
			// var items = this.items,
			// 	values = e.detail.value;
			// for (var i = 0, lenI = items.length; i < lenI; ++i) {
			// 	const item = items[i]
			// 	if(values.includes(item.value)){
			// 		this.$set(item,'checked',true)
			// 	}else{
			// 		this.$set(item,'checked',false)
			// 	}
			// }
		}
	},
}