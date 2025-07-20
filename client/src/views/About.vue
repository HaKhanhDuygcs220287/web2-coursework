<!-- src/views/About.vue -->
<template>
  <div class="about-container">
    <h2>About This App</h2>
    <p>This application is designed to manage vocabulary efficiently using a simple and clean UI.</p>
    
    <!-- Go back home -->
    <router-link to="/" class="back-home-button">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.about-container {
  padding: 2rem;
  background: linear-gradient(to right, #f9f9f9, #e0e0e0);
  min-height: 100vh;
  color: #333;
}

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
