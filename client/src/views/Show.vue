<template>
  <div>
    <h2 class="ui header">Word Details</h2>
    <div v-if="word">
      <h3>{{ word.word }}</h3>
      <p><strong>Definition:</strong> {{ word.definition }}</p>
      <p><strong>Example:</strong> {{ word.example }}</p>
    </div>
    <!-- Thêm nút Back để quay lại Home -->
    <router-link to="/" class="ui button">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data() {
    return {
      word: null
    };
  },
  async mounted() {
    const res = await fetch(`http://localhost:3000/api/vocab/${this.$route.params.id}`);
    this.word = await res.json();
  }
};
</script>
