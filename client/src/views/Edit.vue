<template>
  <div class="edit-word-container">
    <h2 class="ui header">Edit Word</h2>

    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label for="chinese">Name:</label>
        <input v-model="word.chinese" id="chinese" type="text" required />
      </div>

      <div class="field">
        <label for="english">Definition:</label>
        <input v-model="word.english" id="english" type="text" required />
      </div>

      <div class="field">
        <label for="language">Language:</label>
        <select v-model="word.language" id="language" required>
          <option disabled value="">Select Language</option>
          <option>English</option>
          <option>Chinese</option>
          <option>Vietnamese</option>
          <option>Japanese</option>
          <option>Korean</option>
        </select>
      </div>

      <button class="ui blue button oval-button" type="submit">Update Word</button>
    </form>

    <router-link to="/" class="ui button back-home-button">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data() {
    return {
      word: {
        chinese: '',
        english: '',
        language: ''
      }
    };
  },
  async mounted() {
    await this.fetchWord();
  },
  methods: {
    async fetchWord() {
      const res = await fetch(`http://localhost:3000/api/vocab/${this.$route.params.id}`);
      this.word = await res.json();
    },
    async handleSubmit() {
      await fetch(`http://localhost:3000/api/vocab/${this.$route.params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.word)
      });
      this.$router.push('/words').catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err;
      });
    }
  }
};
</script>

<style scoped>
.edit-word-container {
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
