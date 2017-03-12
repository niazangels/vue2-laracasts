Vue.component('coupon',{
	template:'<input placeholder="Enter your coupon" @blur="inputBlurred" v-model="coupon_code">',
	
	data() {
		return{	
			coupon_code: ''
		}
	},
	
	methods: {
		inputBlurred(){
		 Event.$emit('applied', this.coupon_code)
		}
	}
})

new Vue({
	el: '#root',

	data: {
		couponApplied: false		
	},

	methods: {
		onCouponApplied(data){
			this.couponApplied = data;
			// alert('Your coupon was applied!')
		}
	}
})

