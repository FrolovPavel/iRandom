<template lang="pug">
router-link(
  to="/"
).logo LogoType
  img.logo__icon
</template>

<script>
export default {
  name: "LogoComponent"
}
</script>

<style scoped lang="scss">
.logo {
  margin-right: 40px;
}
</style>
