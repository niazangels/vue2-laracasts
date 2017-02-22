Vue.component('modal', {
	// props: ['title', 'body'],
	template: `
			<div class="modal is-active">
	  <div class="modal-background"></div>
	  <div class="modal-content box">
	  <p>
	  	<slot></slot>
	  </p>
	  </div>
	  <button class="modal-close" @click="$emit('close')"></button>
	</div>`,
	data() {
		return { isVisible:true}
	}
})

new Vue({
	el: '#root',
	data:{
		showModal: false
	}
})