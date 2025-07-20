<template>
  <div class="test-api-container">
    <h2>API Testing Page</h2>

    <button @click="getWords" class="api-btn">GET Words</button>
    <button @click="addWord" class="api-btn">POST Word</button>
    <button @click="updateFirstWord" class="api-btn">PUT First Word</button>
    <button @click="deleteLastWord" class="api-btn">DELETE Last Word</button>

    <div class="result-box" v-if="words.length">
      <h3>Words:</h3>
      <ul>
        <li v-for="w in words" :key="w._id">
          {{ w.word }} - {{ w.definition }} - {{ w.language }}
        </li>
      </ul>
    </div>

    <div v-else class="result-box">No data</div>

    <!-- ✅ Nút quay lại trang chủ -->
    <router-link to="/" class="back-home-button">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'TestApi',
  data() {
    return {
      words: []
    };
  },
  methods: {
    async getWords() {
      const res = await fetch('https://web2-coursework.onrender.com/api/vocab');
      this.words = await res.json();
    },
    async addWord() {
      const newWord = {
        word: 'TestWord',
        definition: 'This is a test',
        language: 'English'
      };
      await fetch('https://web2-coursework.onrender.com/api/vocab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWord)
      });
      this.getWords();
    },
    async updateFirstWord() {
      if (!this.words.length) return;
      const first = this.words[0];
      const updated = {
        ...first,
        definition: 'Updated definition via PUT'
      };
      await fetch(`https://web2-coursework.onrender.com/api/vocab/${first._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      this.getWords();
    },
    async deleteLastWord() {
      if (!this.words.length) return;
      const last = this.words[this.words.length - 1];
      await fetch(`https://web2-coursework.onrender.com/api/vocab/${last._id}`, {
        method: 'DELETE'
      });
      this.getWords();
    }
  }
};
</script>

<style scoped>
.test-api-container {
  padding: 2rem;
  background: linear-gradient(to right, #ffdde1, #ee9ca7);
  min-height: 100vh;
  color: #333;
}

.api-btn {
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.api-btn:hover {
  background-color: #2980b9;
}

.result-box {
  margin-top: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}

/* ✅ Nút quay lại trang chủ */
.back-home-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2.5rem;
  background-color: #9b59b6;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
}

.back-home-button:hover {
  background-color: #8e44ad;
}
</style>
