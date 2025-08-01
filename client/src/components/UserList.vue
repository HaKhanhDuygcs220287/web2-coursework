<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      {{ user.name }} - {{ user.email }}
      <button @click="$emit('delete-user', index)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['users'],
}
</script>
