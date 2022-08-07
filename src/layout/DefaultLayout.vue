<template lang="pug">
TheHeader
main
  slot
</template>

<script>
import TheHeader from "@/components/Bloks/TheHeader";
export default {
  name: "DefaultLayout",
  components: {TheHeader}
}
</script>
