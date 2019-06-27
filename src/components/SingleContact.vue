<template>
  <div>
		<router-link :to="routeToContact">
		{{ fullName }} - {{ contact.email }}
		</router-link> 
		<button @click="handleDelete">Delete</button>
		<input type="number" v-model="age"/>
  </div>
</template>

<script>
export default {
	props: ['contact'],
	
	
	data () {
		return {
			age: 25
		}
	},

	methods : {
		handleDelete () {
			this.$emit('delete-contact')
		}
	},
	
	computed : {
		fullName () {
			if(!this.contact){
				return ''
			}
			return `${this.contact.firstName} ${this.contact.lastName}`
		},

		routeToContact () {
			return `/contact/${this.contact.id}`
		}
	},

	watch: {
		age (newValue, oldValue) {
			if(parseInt(newValue,10) < 18) {
				alert('Underage b&')
			}
		}
	}
}
</script>

<style>

</style>
