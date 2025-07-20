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
      await fetch('http://localhost:3000/api/vocab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.word)
      });
      this.$router.push('/words');
    }
  }
};
</script>

<style scoped>
/* Giữ nguyên style bạn đã viết */
.add-word-container {
  padding: 2rem;
  background: linear-gradient(to right, #6a1b9a, #9b59b6);
  color: black;
  min-height: 100vh;
}

.ui.header {
  margin-bottom: 1rem;
  color: black;
}

.field {
  margin-bottom: 1.5rem;
}

input, select {
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  margin-top: 1.5rem;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
}

.oval-button {
  border-radius: 30px;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
  background-color: #9b59b6;
  color: white;
  text-align: center;
}

.oval-button:hover {
  background-color: #8e44ad;
}

.back-home-button {
  border-radius: 30px;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
  background-color: #9b59b6;
  color: white;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
}

.back-home-button:hover {
  background-color: #8e44ad;
}
</style>
