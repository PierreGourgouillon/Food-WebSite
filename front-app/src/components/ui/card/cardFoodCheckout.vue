<template>
  <div id="card" class="rowFlex" ref="card">
    <div class="columnFlex">
      <div id="image">
        <img :src="require(`../../../assets/foodImages/${image}`)">
      </div>
    </div>

    <div class="rowFlex" style="margin-left: 30px;justify-content: space-between; width: 100%;align-items: center">
      <div class="columnFlex">
        <span class="styleSpan" style="font-size: 18px;margin-bottom: 5px;font-weight: 500">{{ nameFood }}</span>
        <span class="styleSpan"><span id="x">x</span> {{ numberItem }}</span>
      </div>

      <div id="absolute" v-on:click="deleteFood">
        <span style="color: black">x</span>
      </div>

      <div class="columnFlex">
        <span class="styleSpan" style="font-size: 20px;font-weight: 600;margin-right: 10px"><span id="dollar">$</span>{{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardFoodCheckout",
  props: {
    image: String,
    numberItem: Number,
    nameFood: String,
    price: Number,
  },
  methods:{
    deleteFood: function () {
      this.$refs.card.remove()
    }
  }
}
</script>

<style scoped>

 #card{
   position: relative;
   background: #FFFFFF;
   border-radius: 10px;
   padding: 5px;
   transition: 0.3s;
   cursor: pointer;
 }

 #card:hover{
   background: #FB9400;
 }

 #card:hover span{
   color: #FFFFFF;
 }

 #card:hover #absolute{
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1px;
 }

  .columnFlex{
    display: flex;
    flex-direction: column;
  }

  .rowFlex{
    display: flex;
    flex-direction: row;
  }

  #image{
    background: #42b983;
    padding: 10px;
    border-radius:10px;
    width: 60px;
    height: 60px;
  }

  #image img {
    width: 100%;
  }

  .styleSpan{
    font-family: "Roboto", sans-serif;
    color: #000000;
  }

  #x{
    color: #FB9400;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  #dollar{
    color: #FB9400;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 13px;
  }

  #absolute{
    display: none;
    position: absolute;
    right: 10px;
    top: 5px;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 999px;
  }

  #absolute span{
    margin-right: 1px;
  }

</style>