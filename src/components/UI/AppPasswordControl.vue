<template lang="pug">
.password-control
  .password-control__left
    .password-control__checkboxes
      a-checkbox(:checked="isLowerCase" @change="toggleLowerCase") a-z
      a-checkbox(:checked="isUpperCase" @change="toggleUpperCase") A-Z
      a-checkbox(:checked="isNumeric" @change="toggleNumeric") 0-9
      a-checkbox(:checked="isSpecialCharacters" @change="toggleSpecialCharacters") #$@!
  .password-control__right
    AppSlider.password-control__slider(
      title="Размер паролей:"
      :value="lengthPassword"
      @change="onChangeLengthPassword"
    )
    AppSlider.password-control__slider(
      title="Кол-во паролей:"
      :value="quantityPasswords"
      @change="onChangeQuantityPasswords"
    )

</template>

<script>
import {computed, onUpdated, ref} from 'vue';
import AppSlider from "@/components/UI/AppSlider";
import {useStore} from "vuex";
export default {
  name: "AppPasswordControl",
  components: {AppSlider},
  setup() {
    const store = useStore()

    const isLowerCase = computed(() => store.getters['password/isLowerCase'])
    const isUpperCase = computed(() => store.getters['password/isUpperCase'])
    const isNumeric = computed(() => store.getters['password/isNumeric'])
    const isSpecialCharacters = computed(() => store.getters['password/isSpecialCharacters'])
    const timer = ref()

    const toggleLowerCase = () => {
      store.commit('password/setLowerCase')
    }
    const toggleUpperCase = () => {
      store.commit('password/setUpperCase')
    }
    const toggleNumeric = () => {
      store.commit('password/setNumeric')
    }
    const toggleSpecialCharacters = () => {
      store.commit('password/setSpecialCharacters')
    }
    const updatePassword = () => {
      clearTimeout(timer.value)

      timer.value = setTimeout(() => {
        store.commit('password/generatePassword')
      }, 500)
    }
    onUpdated( () => {
      updatePassword()
    })

    const lengthPassword = computed(() => store.getters['password/lengthPassword'])
    const onChangeLengthPassword = (length) => {
      store.commit('password/setLengthPassword', length)
    }

    const quantityPasswords = computed(() => store.getters['password/quantityPasswords'])
    const onChangeQuantityPasswords = (quantity) => {
      store.commit('password/setQuantityPasswords', quantity)
    }

    return {
      isLowerCase,
      isUpperCase,
      isNumeric,
      isSpecialCharacters,
      toggleLowerCase,
      toggleUpperCase,
      toggleNumeric,
      toggleSpecialCharacters,
      lengthPassword,
      onChangeLengthPassword,
      quantityPasswords,
      onChangeQuantityPasswords
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

  }

  &__checkboxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    @media (min-width: $tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 20px;
      margin-right: 10px;
      padding-right: 10px;
      border-right: $borderBase;
      margin-bottom: 0;
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
