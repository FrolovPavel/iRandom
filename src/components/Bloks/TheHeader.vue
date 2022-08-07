<template lang="pug">
header.header
  .container.header__container
    AppLogo
    AppNav
</template>

<script>
import AppLogo from "@/components/UI/AppLogo";
import AppNav from "@/components/UI/AppNav";
export default {
  name: "HeaderComponent",
  components: {AppNav, AppLogo}
}
</script>

<style scoped lang="scss">
.header {
  //border-bottom: $borderBase;
  height: 46px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 1%;
    width: 100%;
    height: 1px;
    background-color: $borderColor;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media (min-width: $tablet) {
      justify-content: flex-start;
    }
  }
}
</style>
