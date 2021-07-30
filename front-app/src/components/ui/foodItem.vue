<template>
  <div class="card">
      <div class="globalFlex">
        <div class="globalFlex" style="align-items: center">
          <div class="imageFood">
            <img :src="require(`../../assets/foodImages/${image}`)">
          </div>
        </div>
          <div class="globalFlex">
              <div class="rowFlex" style="margin-top: 20px;justify-content: space-between">
                  <div class="globalFlex">
                    <span class="fontStyle">{{ name }}</span>
                    <div class="rowFlex" style="padding-top: 5px;padding-bottom: 5px">
                      <img  class="stars" src="../../assets/icons/star_like.svg">
                      <img  class="stars" src="../../assets/icons/star_like.svg">
                      <img  class="stars" src="../../assets/icons/star_like.svg">
                      <img  class="stars" src="../../assets/icons/star_like.svg">
                      <img  class="stars" src="../../assets/icons/star_like.svg">
                    </div>
                    <span class="fontStyle"><span id="dollars">$</span>{{ price }}</span>
                  </div>
                  <div class="rowFlex" style="align-items: flex-end">
                      <div class="button" @click="add">
                        <span>+</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import CardFoodCheckout from "./card/cardFoodCheckout";
import Vue from 'vue'

export default {
  name: "foodItem",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    CardFoodCheckout
  },
  props:{
    name: String,
    image: String,
    price: String,
  },
  methods: {
    add: function () {
      let componentClass = Vue.extend(CardFoodCheckout)
      let cardCheckout = new componentClass({
        propsData:{
          image: this.image,
          numberItem: "1",
          nameFood: this.name,
          price: this.price,
        }
      })
      cardCheckout.$mount()
      document.getElementById("listCheckout").appendChild(cardCheckout.$el)
    }
  }
}
</script>

<style scoped>

  .card{
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 20px;
    border-radius: 20px;
    background: #FFFFFF;
    cursor: pointer;
  }

  .card:hover{
    background: #FB9400;
    transition: 0.3s;
    box-shadow: rgba(251, 148, 0, 0.3) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .card:hover .button{
    background: #FFFFFF;
    color: #FB9400;
  }

  .card:hover .fontStyle{
    color: #FFFFFF;
  }

  .card:hover .stars{
    filter: invert(100%) sepia(4%) saturate(17%) hue-rotate(224deg) brightness(106%) contrast(100%);
  }

  .card:hover #dollars{
    color: #FFFFFF;
  }

  .globalFlex{
    display: flex;
    flex-direction: column;
  }

  .rowFlex{
    display: flex;
    flex-direction: row;
  }

  .imageFood{
    width: 130px;
    height: 130px;
    margin-top: -80px;
  }

  img{
    width: 100%;
  }

  .fontStyle{
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: black;
  }

  #dollars{
    color: #FB9400;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 800;
    margin-right: 2px;
  }

  .stars{
    width: 20px;
    filter: invert(59%) sepia(38%) saturate(3515%) hue-rotate(4deg) brightness(103%) contrast(109%);
  }

  .button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: #FB9400;
    color: #FFFFFF;
    font-size: 25px;
  }
</style>