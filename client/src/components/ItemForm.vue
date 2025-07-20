<template>
  <form @submit.prevent="submitForm">
    <label>English Name:</label>
    <input v-model="item.name_en" />

    <label>Vietnamese Name:</label>
    <input v-model="item.name_vi" />

    <label>Japanese Name:</label> <!-- NEW FIELD -->
    <input v-model="item.name_jp" />

    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      item: this.value || {
        name_en: '',
        name_vi: '',
        name_jp: '' // NEW
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('input', this.item)
      this.$emit('submit')
    }
  }
}
</script>
