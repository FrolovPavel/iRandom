<template lang="pug">
.input
  input.input__field(

  )
  ButtonComponent Копировать
</template>

<script>
import ButtonComponent from "@/components/UI/ButtonComponent";
export default {
  name: "GenerateInputComponent",
  components: {ButtonComponent},
  props: {
    placeholder: {
      type: String,
      required: false
    }

  }
}
</script>

<style lang="scss">
.input {

  &__field {
    width: 430px;
    height: 44px;
    border-radius: 24px;
    padding: 14px 20px;

    outline: none;
  }
}
</style>
