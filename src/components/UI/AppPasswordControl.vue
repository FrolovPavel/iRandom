<template lang="pug">
.password-control
    a-checkbox-group.password-control__checkboxes( v-model:value="checkboxGroup" name="checkboxgroup" :options="plainOptions")
      template(#label='{ checkboxGroup }')
        span {{ checkboxGroup }}
    AppSlider.password-control__slider(title="Количество символов")
    AppSlider.password-control__slider(title="Количество паролей")

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

<style lang="scss" scoped>
.password-control {
  &__checkboxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__slider {
    margin-bottom: 20px;
  }

}
</style>
