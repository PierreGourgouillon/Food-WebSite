<template>
  <div id="container">
    <div id="image">
      <img src="../../../assets/foodImages/pizza.png">
    </div>
    <div id="pseudo">
      <span>Jean Michel</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "block-profil"
}
</script>

<style scoped>

  #container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #image{
    display: flex;
    border-radius: 999px;
  }

  #image img{
    width: 100px;
  }

  #pseudo{
    display: flex;
    margin-top: 10px;
  }

</style>