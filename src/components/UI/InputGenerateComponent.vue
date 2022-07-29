<template lang="pug">
.input
  input.input__field(
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

<style lang="scss">
.input {

  &__field {
    max-width: 430px;
  }
}
</style>
