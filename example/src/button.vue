<template>
  <button @click="onClick">Hello Button</button>
</template>

<style lang="scss" scoped>
button {
  background: green;
}
</style>

<script>
export default {
  methods: {
    onClick() {
      alert(1);
    }
  }
}
</script>


