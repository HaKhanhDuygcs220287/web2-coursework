<template>
  <form @submit.prevent="submitForm" class="word-form">
    <label>English Name:</label>
    <input v-model="item.word" required />

    <label>Definition:</label>
    <input v-model="item.definition" required />

    <label>Example:</label>
    <input v-model="item.example" />

    <button type="submit">{{ isEditMode ? 'Update' : 'Add' }} Word</button>
  </form>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({ word: '', definition: '', example: '' })
    }
  },
  computed: {
    isEditMode() {
      return !!this.item._id;
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.item);
      this.$emit('reset');
    }
  }
};
</script>

<style scoped>
.word-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: linear-gradient(to right, #ffffff, #e3f2fd);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.word-form label {
  font-weight: bold;
  color: #1a237e;
}

.word-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.word-form button {
  margin-top: 1rem;
  padding: 0.75rem;
  background: linear-gradient(to right, #42a5f5, #478ed1);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.word-form button:hover {
  background: linear-gradient(to right, #1e88e5, #1565c0);
}
</style>
