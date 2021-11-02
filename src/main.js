import Vue from 'vue'
import App from '@/App.vue'
//@是一个别名，代表src的路径

Vue.config.productionTip = false
var a = 100
new Vue({
	el:'#app',
	render:h=>h(App)
})