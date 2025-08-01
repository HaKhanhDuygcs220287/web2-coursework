<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" placeholder="Email" required />
    <button type="submit">Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    submitForm() {
      this.$emit('add-user', { name: this.name, email: this.email })
      this.name = ''
      this.email = ''
    },
  },
}
</script>
