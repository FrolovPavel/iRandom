<template lang="pug">
input(
  :placeholder="placeholder"
)
</template>

<script>
export default {
  name: "GenerateInputComponent",
  props: {
    placeholder: String
  }
}
</script>

<style scoped>

</style>
