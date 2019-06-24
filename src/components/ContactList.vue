<template>
  <div>
    <form>
      <div>
        <label for="firstName">First Name : </label>
        <input type="text" id="firstName"/>
      </div>
      <div>
        <label for="lastName">Last Name : </label>
        <input type="text" id="lastName"/>
      </div>
      <div>
        <label for="email">Email : </label>
        <input type="text" id="email"/>
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

ul {
  list-style-type: none;
}

</style>
