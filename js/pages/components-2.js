Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',
	data() {
		return {
				tasks:[
					{description: 'Go fishing', completed : false},
					{description: 'Go to camp', completed : true},
					{description: 'Return to base', completed : false},
					{description: 'Cook fish', completed : true},
					{description: 'Clean up', completed : false},
				]
			}
	}
})

Vue.component('task', {
	template: '<li><slot></slot></li>'
})

new Vue({
	el: '#root'
})