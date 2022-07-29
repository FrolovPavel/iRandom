<template lang="pug">
HeaderComponent
main
  slot
</template>

<script>
import HeaderComponent from "@/components/Bloks/HeaderComponent";
export default {
  name: "DefaultLayout",
  components: {HeaderComponent}
}
</script>
