<template>
  <div>
    <WordForm :item="currentItem" @submit="handleSubmit" @reset="resetForm" />
    
    <ul>
      <li v-for="(word, index) in words" :key="word._id">
        {{ word.word }} - {{ word.definition }}
        <button @click="editItem(index)">Edit</button>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import WordForm from './WordForm.vue';
import api from '@/helpers/helpers.js';

export default {
  components: { WordForm },
  data() {
    return {
      words: [],
      currentItem: {}
    };
  },
  created() {
    this.fetchWords();
  },
  methods: {
    async fetchWords() {
      const res = await api.get('/vocab');
      this.words = res.data;
    },
    async handleSubmit(word) {
      if (word._id) {
        await api.put(`/vocab/${word._id}`, word);
      } else {
        await api.post('/vocab', word);
      }
      this.fetchWords();
      this.resetForm();
    },
    async deleteItem(index) {
      const word = this.words[index];
      await api.delete(`/vocab/${word._id}`);
      this.fetchWords();
    },
    editItem(index) {
      this.currentItem = { ...this.words[index] };
    },
    resetForm() {
      this.currentItem = {};
    }
  }
};
</script>