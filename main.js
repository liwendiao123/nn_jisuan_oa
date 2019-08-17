import Vue from 'vue'
import App from './App'
import DB from './db/db.js'
import CODE from './db/code.js'
import uCharts from '@/components/u-charts/u-charts.js'; // 图标组件


import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import uniTag from '@/components/uni-tag/uni-tag.vue'
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import xxTab from '@/components/xx_tab/xx_tab.vue'
import uniIcon from '@/components/uni-icon/uni-icon.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'


// 公共组件
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
Vue.component('uniTag', uniTag)
Vue.component('uni-load-more', uniLoadMore)
Vue.component('xx_tab', xxTab)
Vue.component('uni-icon', uniIcon)
Vue.component('uni-list', uniList)
Vue.component('uni-list-item', uniListItem)
Vue.component('uni-collapse', uniCollapse)
Vue.component('uni-collapse-item', uniCollapseItem)


// 自定义插件
import dragSort from '@/components/base_1_drag-sort/index.vue'
import task from '@/components/base_2_task/task.vue'
import taskProcess from '@/components/base_2_task_process/task_process.vue'
import taskProcessSingle from '@/components/base_2_task_process_single/task_process_single.vue'
import taskList from '@/components/base_3_task_list/task_list.vue'
import tabbar from '@/components/base_4_tabbar/tabbar.vue'
import chartArc from '@/components/base_5_chart_arc/chart_arc.vue'
import statistis from '@/components/base_6_statistis/statistis.vue'



Vue.component('dragSort', dragSort)
Vue.component('task', task)
Vue.component('task-process', taskProcess)
Vue.component('task-process-single', taskProcessSingle)
Vue.component('tabbar', tabbar)
Vue.component('task-list', taskList)
Vue.component('chart-arc', chartArc)
Vue.component('statistis', statistis)




Vue.config.productionTip = false
Vue.prototype.$db = DB;
Vue.prototype.$CODE = CODE;
Vue.prototype.$uCharts = uCharts;


function setData(obj){  
	let that = this;  
	let keys = [];  
	let val,data;  
	Object.keys(obj).forEach(function(key){  
		 keys = key.split('.');  
		 val = obj[key];  
		 data = that.$data;  
		 keys.forEach(function(key2,index){  
			 if(index+1 == keys.length){  
				 that.$set(data,key2,val);  
			 }else{  
				 if(!data[key2]){  
					that.$set(data,key2,{});  
				 }  
			 }  
			 data = data[key2];  
		 })  
	});  
}  
Vue.prototype.setData = setData

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
