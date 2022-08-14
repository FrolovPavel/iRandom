<template lang="pug">
span.badge(:class="`badge--${stateBadge.color}`") {{stateBadge.text}}
</template>

<script>
import {computed} from "vue";

export default {
  name: "AppBadge",
  props: {
    security: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const stateBadge = computed(() => {
      let state = {text: '', color: ''}
      if(props.security === 1 || props.security === 2) {
        state.text = 'ненадежный'
        state.color = 'red'
      }
      if(props.security === 3) {
        state.text = 'хороший'
        state.color = 'yellow'
      }
      if(props.security === 4) {
        state.text = 'надежный'
        state.color = 'green'
      }
      return state
    })

    return {
      stateBadge
    }
  }
}
</script>

<style lang="scss">
.badge {
  color: $white;
  border-radius: $borderRadiusBase;

  height: 24px;
  width: 24px;

  @media (min-width: $tablet) {
    padding: 0 16px;
    width: auto;
  }

  &--red {
    background-color: $dangerColor;
  }

  &--yellow {
    background-color: $warnColor;
  }

  &--green {
    background-color: $successColor;
  }
}
</style>
