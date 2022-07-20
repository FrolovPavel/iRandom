<template lang="pug">
header.header
  .container.header__container
    LogoComponent
    NavComponent
</template>

<script>
import NavComponent from "@/components/UI/NavComponent";
import LogoComponent from "@/components/UI/LogoComponent";
export default {
  name: "HeaderComponent",
  components: {LogoComponent, NavComponent}
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #f0f0f0;
  &__container {
    display: flex;
    align-items: center;
  }
}
</style>
