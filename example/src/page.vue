<template>
  <div>
    <v-header title="Custom Page4"></v-header>
    <h2>Hello world4</h2>
    <my-button></my-button>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>

<script>
import MyButton from './button.vue';
export default {
  components: {
    'my-button': MyButton
  }
}
</script>
