<template>
  <div>
    <form @submit.prevent="handleAdd">
      <div>
        <label for="firstName">First Name : </label>
        <input type="text" id="firstName" v-model="newContact.firstName" required/>
      </div>
      <div>
        <label for="lastName">Last Name : </label>
        <input type="text" id="lastName" v-model="newContact.lastName" required/>
      </div>
      <div>
        <label for="email">Email : </label>
        <input type="text" id="email" v-model="newContact.email" required/>
      </div>
      <div>
        <button type="submit">Add contact</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newContact:this.getDefaults()
    }
  },

  methods : {
    getDefaults () {
      return {
        email: '',
        firstName: '',
        lastName: ''
      }
    },

    handleAdd () {
      this.$emit('add-contact', this.newContact)
      this.newContact = this.getDefaults()
    },

  }
}
</script>

<style>
  
</style>
