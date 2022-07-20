<template lang="pug">
nav.nav
  a-menu.nav__list(v-model:selectedKeys="current" mode="horizontal" )
    a-menu-item.nav__item(key="password")
      router-link.nav__link(
        to="/password"
      ) Пароли
    a-menu-item.nav__item(key="number")
      router-link.nav__link(
        to="/number"
      ) Числа
  a-dropdown.nav__dropdown
    a.ant-dropdown-link(@click.prevent) Проект
    template(#overlay)
      a-menu(@click='handleMenuClick')
        a-menu-item(key='1') О проекте
        a-menu-item(key='2') Потдержать проект
        a-menu-item(key='3') Связаться с нами
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavComponents",
  setup() {
    const current = ref(['mail']);
    return {
      current,
    }
  },
}
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  width: 100%;

  &__list {
    border-bottom: none;
  }

  &__dropdown {
    margin-left: auto;
  }
}
</style>
