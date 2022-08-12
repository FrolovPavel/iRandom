<template lang="pug">
.slider
  .slider__title {{title}}
  .slider__wrapper
    a-slider.slider__runner(v-model:value='quantitySymbol' :min='1' :max='20')
    a-input-number.slider__input(v-model:value='quantitySymbol' :min='1' :max='20')
</template>

<script>
import {ref} from "vue";

export default {
  name: "AppSlider",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const quantitySymbol = ref(0);

    return {
      quantitySymbol
    }
  },
}
</script>

<style lang="scss" scoped>
.slider {

  &__title {
    line-height: 1;
    margin-bottom: 10px;
    @media (min-width: $tablet) {
      margin-bottom: 3px;
      margin-right: 20px;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    @media (min-width: $tablet) {
      flex-grow: 1;
    }
  }

  &__runner {
    flex-grow: 1;
    margin-left: 0;
    margin-right: 20px;
  }

  &__input {
    width: 56px;
    height: 26.5px;

  }
}
</style>
