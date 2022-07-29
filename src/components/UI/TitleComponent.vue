<template lang="pug">
component.title(:is="`h${level}`")
  slot
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    level: {
      type: String,
      default: '1',
    }
  }
}
</script>

<style scoped>

</style>
