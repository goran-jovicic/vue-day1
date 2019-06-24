<template>
  <ul>
    <li v-for="(contact,index) in contacts" :key="index"> {{ contact.firstName }} {{ contact.lastName }} - {{ contact.email }}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      contacts : [
        { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
        { firstName: 'John', lastName: 'James', email: 'johnjames@example.com' },
        { firstName: 'Marco', lastName: 'Tribiani', email: 'marcotribiani@example.com' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
