<template>
  <div>
    <!-- <ContactForm @add-contact="addContact" /> -->
    <ul>
      <li v-for="(item, index) in contacts" :key="index">
        <SingleContact
          :contact="item"
          @delete-contact="handleDelete(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SingleContact from './SingleContact'
// import ContactForm from './ContactForm'
// import ContactForm from '@/components/ContactForm'

export default {
  props: ['contacts'],

  components: {
    // ContactForm,
    SingleContact
  },

  methods:{
 
    handleDelete(index) {
      this.$emit('delete-contact', index)
    }

  }
}
</script>