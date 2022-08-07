<template lang="pug">
nav.nav
  a-dropdown.nav__burger(v-if="windowWidth < deviceSizes.tablet" :trigger="['click']")
    template(#overlay)
      AppNavList
    AppBurger
  AppNavList.nav__list(v-else)
</template>

<script>
import useWidth from '@/hooks/useWidth';
import useDeviceSizes from '@/hooks/useDeviceSizes';
import BurgerIcon from "@/components/Icons/BurgerIcon";
import AppBurger from "@/components/UI/AppBurger";
import AppNavList from "@/components/UI/AppNavList";

export default {
  name: 'AppNav',
  components: {AppNavList, AppBurger, BurgerIcon},
  setup() {
    const {windowWidth} = useWidth()

    const {deviceSizes} = useDeviceSizes()


    return {
      windowWidth,
      deviceSizes,
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;


  @media (min-width: $tablet) {
    width: 100%;
  }

  &__list {
    border-bottom: none;
  }
}

</style>
