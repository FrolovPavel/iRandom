<template lang="pug">
a-menu.menu(v-model:selectedKeys="current" mode="horizontal" )
  a-menu-item.menu__item(key="/password")
    template( #icon)
      LockIcon
    router-link.menu__link(
      to="/password"
    ) Пароли
  a-menu-item.menu__item(key="/number")
    template( #icon)
      NumberIcon
    router-link.menu__link(
      to="/number"
    ) Числа
  a-tooltip(placement="top" title="В процессе разроботки..." arrow-point-at-center)
    span(style="order: 3; user-select: none;")
      a-menu-item.menu__item(key="/winner" disabled)
        template( #icon)
          WinnerIcon
        router-link.menu__link(
          to="/winner"
        ) Победитль конкурса
  a-menu-item.menu__item(key="/about" style="margin-left: auto;")
    template( #icon)
      AboutIcon
    router-link.menu__link(
      to="/about"
    ) О проекте
</template>

<script>
import {ref, watch} from 'vue'
import {  useRoute } from 'vue-router'
import LockIcon from "@/components/Icons/LockIcon";
import NumberIcon from "@/components/Icons/NumberIcon";
import WinnerIcon from "@/components/Icons/WinnerIcon";
import AboutIcon from "@/components/Icons/AboutIcon";
export default {
  name: 'NavListComponent',
  components: {AboutIcon, WinnerIcon, NumberIcon, LockIcon},
  setup() {
    const route = useRoute()
    const current = ref([''])
    watch(() => route.path, (value) => {
      current.value = [value]
    })

    return {
      current,
    }
  },
}
</script>

<style lang="scss">
.menu {
  border-bottom: none;
  width: 100%;

  &__item {
    display: flex !important;
    align-items: center;

    svg {
      stroke: #000;

      path,
      circle,
      polyline{
        transition: fill 0.3s, stroke 0.3s;
      }
    }

    &.ant-menu-item-selected,
    &.ant-menu-item-active,
    &.ant-dropdown-menu-item-selected{
      svg {
        fill: $primaryColor;
        stroke: $primaryColor;
      }
    }
  }
}
</style>
