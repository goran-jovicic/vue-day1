<template>
  <div>
    <ContactForm @add-contact="addContact"/>
    <ul>
      <li v-for="(contact,index) in contacts" :key="index">
        <SingleContact 
          :contact="contact" 
          @delete-contact="deleteContact(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ContactForm from './ContactForm'
import SingleContact from './SingleContact'

export default {
  components: {
    ContactForm,
    SingleContact,
  },

  data(){
    return {
      contacts : [
        { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
        { firstName: 'John', lastName: 'James', email: 'johnjames@example.com' },
        { firstName: 'Marco', lastName: 'Tribiani', email: 'marcotribiani@example.com' },
      ]
    }
  },

  methods : {
    
    addContact (contact) {
      this.contacts.push({...contact})
    },

    deleteContact (index) {
      this.contacts.splice(index,1)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}


</style>
