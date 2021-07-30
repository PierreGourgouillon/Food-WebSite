<template>
  <div id="button">
    <span>Checkout</span>
  </div>
</template>

<script>
export default {
  name: "checkout"
}
</script>

<style scoped>

  #button{
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    background: #FB9400;
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 999px;
    cursor: pointer;
  }

  #button:hover{
    background: rgb(234, 139, 3);
  }

  #button span{
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
  }

</style>