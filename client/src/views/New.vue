<template>
  <div class="add-word-container">
    <h2 class="ui header">Add New Word</h2>

    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label for="word">Name:</label>
        <input v-model="word.word" id="word" type="text" required />
      </div>

      <div class="field">
        <label for="definition">Definition:</label>
        <input v-model="word.definition" id="definition" type="text" required />
      </div>

      <div class="field">
        <label for="language">Language:</label>
        <select v-model="word.language" id="language" required>
          <option disabled value="">Select Language</option>
          <option>English</option>
          <option>Vietnamese</option>
          <option>Chinese</option>
          <option>Japanese</option>
          <option>Korean</option>
        </select>
      </div>

      <button class="ui blue button oval-button" type="submit">Add Word</button>
    </form>

    <router-link to="/" class="ui button back-home-button">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {
      word: {
        word: '',
        definition: '',
        language: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      await fetch('https://web2-coursework.onrender.com/api/vocab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.word)
      });
      this.$router.push('/words');
    }
  }
};
</script>
