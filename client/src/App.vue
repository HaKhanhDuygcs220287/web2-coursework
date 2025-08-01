<template>
  <div id="app" class="app-container">
    <!-- Menu -->
  

    <!-- Nội dung -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
body {
  background: linear-gradient(to right, #6a1b9a, #9b59b6);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.app-container {
  padding: 2rem;
  min-height: 100vh;
  color: black;
}

/* Nút button mặc định */
button {
  background-color: #9b59b6;
  color: white;
  border-radius: 30px;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #8e44ad;
}

/* Nút là thẻ <a> */
a.ui.button {
  border-radius: 30px;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
  background-color: #9b59b6;
  color: white;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
}

a.ui.button:hover {
  background-color: #8e44ad;
}

/* ======================= */
/* THÊM PHẦN MENU MỚI      */
/* ======================= */

.nav-ellipse-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.ellipse-btn {
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  text-decoration: none;
  transition: 0.3s;
}

.ellipse-btn:hover {
  background-color: #333;
  border-color: white;
}
</style>
