<template lang="pug">
section.password-generate
  .container
    AppTitle.password-generate__title Генерация паролей
    .password-generate__action
      AppInputPassword.password-generate__input
      AppPasswordControl
</template>

<script>
import AppTitle from "@/components/UI/AppTitle";
import AppInputPassword from "@/components/UI/AppInputPassword";
import AppPasswordControl from "@/components/UI/AppPasswordControl";
export default {
  name: "ThePasswordGeneration",
  components: {AppPasswordControl, AppInputPassword, AppTitle}
}
</script>

<style lang="scss">

.password-generate {
  padding: 20px 0;

  @media (min-width: $tablet) {
    padding: 40px 0;
  }
  &__title {
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: $tablet) {
      margin-bottom: 40px;
    }
  }

  &__action {
    max-width: 645px;
    margin: 0 auto;
  }

  &__input {
    margin-bottom: 20px;
  }
}
</style>
