<template>
  <div class="home-container">
    <!-- Thanh menu chính -->
    <div class="nav-ellipse-group">
      <router-link to="/words" class="ellipse-btn">All Words</router-link>
      <router-link to="/words/new" class="ellipse-btn">Add New</router-link>
      <router-link to="/test-api" class="ellipse-btn">API Test</router-link>
      <router-link to="/about" class="ellipse-btn">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #d3cce3, #e9e4f0); /* nền màu hồng khói */
}

.nav-ellipse-group {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
}

.ellipse-btn {
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  min-width: 130px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.ellipse-btn:hover {
  background-color: #333;
  border-color: white;
  transform: scale(1.05);
}
</style>
