<template>
  <div>
    <form @submit.prevent="addContact">
      <div>
        <label for="firstName">First Name : </label>
        <input type="text" id="firstName" v-model="newContact.firstName"/>
      </div>
      <div>
        <label for="lastName">Last Name : </label>
        <input type="text" id="lastName" v-model="newContact.lastName"/>
      </div>
      <div>
        <label for="email">Email : </label>
        <input type="text" id="email" v-model="newContact.email"/>
      </div>
      <div>
        <button type="submit">Add contact</button>
      </div>
    </form>
    <ul>
      <li v-for="(contact,index) in contacts" :key="index">
        {{ contact.firstName }} {{ contact.lastName }} - {{ contact.email }} 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newContact: {
        firstName: '',
        lastName: '',
        email: ''
      },

      contacts : [
        { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
        { firstName: 'John', lastName: 'James', email: 'johnjames@example.com' },
        { firstName: 'Marco', lastName: 'Tribiani', email: 'marcotribiani@example.com' },
      ]
    }
  },

  methods : {
    addContact () {
      this.contacts.push({...this.newContact})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}

input {
  border-radius: 0.4rem;
  margin: 0.2rem;
}

</style>
