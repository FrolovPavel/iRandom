<template lang="pug">
section.password-generate
  .container
    AppTitle.password-generate__title Генерация паролей
    .password-generate__control
      AppInputGenerate.password-generate__input(
        placeholder="Пароль"
      )
</template>

<script>
import AppTitle from "@/components/UI/AppTitle";
import AppInputGenerate from "@/components/UI/AppInputGenerate";
export default {
  name: "ThePasswordGeneration",
  components: {AppInputGenerate, AppTitle}
}
</script>

<style lang="scss">

.password-generate {

  &__title {
    text-align: center;
  }

  &__control {
    max-width: 645px;
    margin: 0 auto;
  }
}
</style>
