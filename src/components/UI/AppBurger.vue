<template lang="pug">
button.burger(
  v-on:click="toggleActive"
  :class="{active: isActive}"
  ref="burgerButton"
)
  span.burger__top
  span.burger__middle
  span.burger__bottom
</template>

<script>
import {onUnmounted, onMounted, ref} from "vue";
export default {
  name: 'AppBurger',
  setup() {
    const isActive = ref(false)
    const burgerButton = ref(null)
    const body = document.body

    const toggleActive = () => {
      isActive.value = !isActive.value
    }
    const bodyListener = (event) => {
      // console.log(!event.path.includes(burgerButton.value))
      // console.log(event.path)
      console.log(burgerButton.value)
      if(!event.path.includes(burgerButton.value)) {
        isActive.value = false
      }
    }
    onMounted(() => {
      console.log('mount')
      body.addEventListener('click', bodyListener)
    })
    onUnmounted(() => {
      console.log('deactiv')
      body.removeEventListener('click', bodyListener)
    })

    return {
      isActive,
      toggleActive,
      burgerButton
    }
  }
}
</script>

<style lang="scss" scoped>
.burger {
  width: 24px;
  height: 16px;
  position: relative;
  border: none;
  background-color: $white;

  &.active {
    .burger {
      &__top {
        top: 50%;
        transform: rotate(45deg);
      }

      &__middle {
        width: 0;
        animation: middle-active .3s forwards linear;
      }

      &__bottom {
        top: 50%;
        transform: rotate(-45deg);
      }
    }
  }

  &__top,
  &__middle,
  &__bottom{
    position: absolute;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: $dark;
    border-radius: $borderRadiusBase;
    transition: $transitionBase;
    transition-property: opacity, transform, top, width;
  }

  &__top {
    top: 0;
  }

  &__middle {
    top: 50%;
    transform: translateY(-50%);
  }

  &__bottom{
   bottom: 0;
  }
}

@keyframes middle-active {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
