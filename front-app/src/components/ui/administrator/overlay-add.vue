<template>
  <div id="overlay" class="row center">
    <div id="cont">
      <adder></adder>
    </div>
  </div>
</template>

<script>
import adder from "../administrator/adder"

export default {
  name: "overlay-add",
  components:{
    adder,
  }
}
</script>

<style scoped>

  .row{
    display: flex;
    flex-direction: row;
  }

  .center{
    align-items: center;
    justify-content: center;
  }

  #overlay{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(15px); /* assure la compatibilité avec safari */
    backdrop-filter: blur(4px);
    background-color: rgba(182, 182, 182, 0.2);
  }

  #cont{
    width: 90%;
    height: 90%;
  }

</style>