<template>
  <div>
    <nav>
      <router-link to="/contacts">Contacts </router-link>
      <router-link to="/add-contact">Add Contact </router-link>
    </nav>
    <router-view 
      :contact="contact"
      :contacts="contacts"
      @add-contact="addContact"
      @delete-contact="deleteContact"
    />
  </div>
</template>


<script>

export default {
  name: 'app',

  data () {
    return {
      contacts : [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
        { id: 2, firstName: 'John', lastName: 'James', email: 'johnjames@example.com' },
        { id: 3, firstName: 'Marco', lastName: 'Tribiani', email: 'marcotribiani@example.com' },
      ]
    }
  },

  computed : {
    contact () {
      return this.contacts.find(contact => {
        return contact.id == this.$route.params.id
      })
    }
  },

  methods : {
    addContact (contact) {
      this.contacts.push({...contact})
      this.$router.push('/contacts')
    },

    deleteContact (index) {
      this.contacts.splice(index,1)
      this.$router.push('/contacts')
    }
  }
}
</script>

<style>
  .test {
    color:red;
    margin-right: 0.5rem;
  }
</style>
