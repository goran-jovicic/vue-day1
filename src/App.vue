<template>
  <div>
    <nav>
      <router-link to="/contacts">Contacts </router-link>
      <router-link to="/add-contact">Add Contact </router-link>
    </nav>
    <router-view 
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

<style>

</style>
