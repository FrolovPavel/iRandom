<template lang="pug">
span.badge(:class="`badge--${bg}`")
  slot
</template>

<script>
export default {
  name: "AppBadge",
  props: {
    bg: {
      type: String,
      default: 'green'
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
