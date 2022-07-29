<template lang="pug">
.logo
  LogoIcon.logo__icon
  .logo__text iRandom
</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon";
export default {
  name: "LogoComponent",
  components: {
    LogoIcon
  }
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  margin-right: 40px;

  &__icon {
    margin-right: 5px;
  }

  &__text {
    font-size: 24px;
    line-height: 1;
  }
}
</style>
