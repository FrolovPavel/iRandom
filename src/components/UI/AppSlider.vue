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

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__runner {
    flex-grow: 1;
  }
}
</style>
