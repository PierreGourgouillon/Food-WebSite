<template>
  <div class="rowFlex">
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/layouts/header"

export default {
  name: "Home",
  components:{
    Header
  }
}
</script>

<style scoped>
.rowFlex{
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  padding: 0;
  margin: 0;
}
</style>