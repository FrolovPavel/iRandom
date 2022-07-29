import {reactive} from "vue";

export default function useWidth() {
  const deviceSizes = reactive({
    mobileSmall: 320,
    mobileMiddle: 360,
    tablet: 768,
    tabletLand: 1024,
    notebook: 1240,
    desktop: 1440
  })

  return {
    deviceSizes
  }
}
