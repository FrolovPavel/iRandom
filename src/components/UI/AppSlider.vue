<template lang="pug">
.slider
  .slider__title {{title}}
  .slider__wrapper
    a-slider.slider__runner(v-model:value='sliderValue' @change='onChange' :min='1' :max='20')
    a-input-number.slider__input(v-model:value='sliderValue' @change='onChange' :min='1' :max='20')
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "AppSlider",
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  emits: ['change'],
  setup(props, {emit}) {
    const sliderValue = ref(0);

    const onChange = () => {
      emit('change', sliderValue.value)
    }

    onMounted(() => {
      sliderValue.value = props.value
    })

    return {
      sliderValue,
      onChange
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
