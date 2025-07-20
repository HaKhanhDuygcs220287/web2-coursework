<template>
  <div class="all-words-container">
    <h2 class="ui header">All Words</h2>
    <router-link to="/words/new" class="ui primary button oval-button">Add New Word</router-link>

    <div class="ui divided items" v-if="words.length">
      <div class="word-item" v-for="word in words" :key="word._id">
        <div class="word-content">
          <div class="field">
            <label>Name:</label>
            <div>{{ word.word }}</div>
          </div>
          <div class="field">
            <label>Definition:</label>
            <div>{{ word.definition }}</div>
          </div>
          <div class="field" v-if="word.language">
            <label>Language:</label>
            <div>{{ word.language }}</div>
          </div>
        </div>
        <div class="word-actions">
          <router-link :to="'/words/' + word._id + '/edit'" class="edit-btn">Edit</router-link>
          <button @click="deleteWord(word._id)" class="delete-btn">Delete</button>
        </div>
      </div>
    </div>

    <div v-else>No words found.</div>

    <router-link to="/" class="ui button back-home-button">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Words',
  data() {
    return {
      words: []
    };
  },
  async created() {
    const res = await fetch('http://localhost:3000/api/vocab');
    this.words = await res.json();
  },
  methods: {
    async deleteWord(id) {
      await fetch(`http://localhost:3000/api/vocab/${id}`, {
        method: 'DELETE'
      });
      this.words = this.words.filter(word => word._id !== id);
    }
  }
};
</script>

<style scoped>
.all-words-container {
  padding: 2rem;
  background: linear-gradient(to right, #6a1b9a, #9b59b6);
  color: black;
  min-height: 100vh;
}

.word-item {
  background: white;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.word-content .field {
  margin-bottom: 0.8rem;
}

.word-content label {
  font-weight: bold;
  color: #333;
}

.word-content div {
  margin-left: 0.5rem;
}

.word-actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.edit-btn {
  background-color: #3498db;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #2980b9;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #c0392b;
}

.oval-button {
  border-radius: 30px;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
  background-color: #9b59b6;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  display: inline-block;
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
