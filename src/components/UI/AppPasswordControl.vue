<template lang="pug">
.password-control
  .password-control__left
    a-checkbox-group.password-control__checkboxes( v-model:value="checkboxGroup" name="checkboxgroup" :options="plainOptions")
      template(#label='{ checkboxGroup }')
        span {{ checkboxGroup }}
  .password-control__right
    AppSlider.password-control__slider(title="Размер паролей:")
    AppSlider.password-control__slider(title="Кол-во паролей:")

</template>

<script>
import { ref } from 'vue';
import AppSlider from "@/components/UI/AppSlider";
export default {
  name: "AppPasswordControl",
  components: {AppSlider},
  setup() {
    const checkboxGroup = ref([])
    const plainOptions = ['a-z', 'A-Z', '0-9', '#$@!'];

    const quantitySymbol = ref(0);
    return {
      checkboxGroup,
      plainOptions,
      quantitySymbol
    }
  },
}
</script>

<style lang="scss">
.password-control {
  @media (min-width: $tablet) {
    display: flex;
  }
  &__left {
    margin-bottom: 20px;
    @media (min-width: $tablet) {
      margin-bottom: 0;
    }
  }

  &__checkboxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (min-width: $tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 20px;
      margin-right: 10px;
      padding-right: 10px;
      border-right: $borderBase;
    }
  }

  &__right {
    @media (min-width: $tablet) {
      flex-grow: 1;
      margin-top: -3px;
    }
  }

  &__slider {
    margin-bottom: 20px;
    @media (min-width: $tablet) {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
  }

}
</style>
