Vue.component('card', {
	props: ['title', 'body'],
	template: `
			<div class="card" v-show="isVisible">
			  <header class="card-header">
			    <p class="card-header-title">
			      {{title}}
			    </p>
			    <a class="card-header-icon">
			      <span class="icon">
			        <i class="fa fa-angle-down"></i>
			      </span>
			    </a>
			  </header>
			  <div class="card-content">
			    <div class="content">
			      {{body}}
			      <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
			      <br>
			      <small>11:09 PM - 1 Jan 2016</small>
			    </div>
			  </div>
			  <footer class="card-footer">
			    <a class="card-footer-item">...</a>
			    <a class="card-footer-item">...</a>
			    <a class="card-footer-item" @click="isVisible = !isVisible" >Delete</a>
			  </footer>
			</div>
	`,
	data() {
		return { isVisible:true}
	}
})

new Vue({
	el: '#root'
})