<template>
  <div>
		{{ fullName }} - {{ contact.email }} 
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
			// console.log(this.fullName)
			this.$emit('delete-contact')
		}
	},
	
	computed : {
		fullName () {
			return `${this.contact.firstName} ${this.contact.lastName}`
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
