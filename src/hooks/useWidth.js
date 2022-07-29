import {onDeactivated, onMounted, ref} from "vue";

export default function useWidth() {
  let windowWidth = ref(window.innerWidth)

  onMounted(() => {
    window.addEventListener('resize', changeWidth)
  })

  onDeactivated(() => {
    window.removeEventListener('resize', changeWidth)
  })


  const changeWidth = () => {
    windowWidth.value = window.innerWidth
  }

  return {
    windowWidth
  }
}
