Vue.component('task', {
	template: '<li :title="message"><slot></slot></li>',
	data: function() {
		return {message:'Hello'}
	}
})

new Vue({
	el: '#root'
})