<template>
  <div id="container" class="row">
    <div class="container row">
      <pannel-creator></pannel-creator>
    </div>

    <div class="container row" style="margin-left: 10%">
      <pannel-creator></pannel-creator>
    </div>
  </div>
</template>

<script>

import PannelCreator from "./pannel-creator";

export default {
  name: "adder",
  components: {
    PannelCreator
  },
}
</script>

<style scoped>

  .row{
    display: flex;
    flex-direction: row;
  }

  .col{
    display: flex;
    flex-direction: column;
  }

  #container{
    width: 100%;
    height: 100%;
  }

  .container{
    flex-basis: 45%;
  }


</style>