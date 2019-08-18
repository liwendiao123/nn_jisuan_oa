

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