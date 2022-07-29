<template lang="pug">
section.password-generate
  .container
    TitleComponent.password-generate__title Генерация паролей
    .password-generate__control
      InputGenerateComponent.password-generate__input(
        placeholder="Пароль"
      )
</template>

<script>
import InputGenerateComponent from "@/components/UI/InputGenerateComponent";
import TitleComponent from "@/components/UI/TitleComponent";
export default {
  name: "PasswordGenerateComponent",
  components: {TitleComponent, InputGenerateComponent}
}
</script>

<style lang="scss">

.password-generate {

  &__title {
    text-align: center;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
