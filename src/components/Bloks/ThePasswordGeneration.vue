<template lang="pug">
section.password-generate
  .container
    AppTitle.password-generate__title Генерация паролей
  .password-generate__action
    .password-generate__fields(ref="wrapperFields")
      AppInputPassword.password-generate__input(
        v-for="password in passwords"
        :key="password"
        :password="password"
      )
    .container
      .password-generate__control
        AppPasswordControl
</template>

<script>
import AppTitle from "@/components/UI/AppTitle";
import AppInputPassword from "@/components/UI/AppInputPassword";
import AppPasswordControl from "@/components/UI/AppPasswordControl";
import {onMounted, onUpdated, ref} from "vue";
export default {
  name: "ThePasswordGeneration",
  components: {AppPasswordControl, AppInputPassword, AppTitle},
  setup() {
    const passwords = ref([
      'j24on23422g!',
      'j24on23422g!',
      'j24on23422g!',
      'j24on23422g!',
      'j24on23422g!',
      'j24on23422g!',
      'j24on23422g!',
    ])

    const wrapperFields = ref(null)

    const borderOnScroll = () => {
      const el = wrapperFields.value
      if(el.scrollHeight === el.clientHeight) {
        el.classList.remove('border-bottom')
      } else {
        el.classList.add('border-bottom')
      }
    }

    onMounted(() => {
      borderOnScroll()
    })

    onUpdated(() => {
      borderOnScroll()
    })

    return {
      passwords,
      wrapperFields
    }
  }
}
</script>

<style lang="scss">

.password-generate {
  padding: 20px 0;
  height: 100%;

  @media (min-width: $tablet) {
    padding: 40px 0 20px;
  }
  &__title {
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: $tablet) {
      margin-bottom: 40px;
    }
  }

  &__fields {
    max-height: calc(100vh - 373px);
    overflow: auto;
    margin-bottom: 20px;
    padding: 5px 15px;
    position: relative;
    &.border-bottom {
      border-bottom: 1px solid $borderColor;
    }
    @media (min-width: $tablet) {
      max-height: calc(100vh - 327px);
    }
  }

  &__action {
    max-width: 645px;
    margin: 0 auto;
  }

  &__input {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
