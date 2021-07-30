<template>
  <div class="rowFlex">
    <Header></Header>

    <main>
      <div class="globalFlex container-menu padding">
          <div class="top-header">
            <div>
              <span class="title">Today Menu</span>
            </div>
            <div><searchBar></searchBar></div>
          </div>

        <div class="globalFlex" style="height: 100vh">
          <div class="test"></div>

          <div class="container-foods">
            <div class="food-category globalFlex">

              <div class="rowFlex" style="justify-content: space-between;align-items: center">
                <div><span class="title" style="font-size: 25px">Menu Category</span></div>
                <ViewAll></ViewAll>
              </div>

              <div class="rowFlex" style="margin-top: 40px">
                <categoryCard title="Hamburger" image="hamburger.png" link="Home"></categoryCard>
                <categoryCard title="Drink" image="drink.png" link="Home"></categoryCard>
                <categoryCard title="Kebab" image="kebab.png" link="Home"></categoryCard>
                <categoryCard title="Sushi" image="sushi.png" link="Home"></categoryCard>
                <categoryCard title="Vegan" image="vegan.png" link="Home"></categoryCard>
                <categoryCard title="Chinois" image="chinease.png" link="Home"></categoryCard>
              </div>
            </div>
            <div class="top-3">
              <foodItem name="Pizza Bello" price="13.667" image="pizza.png"></foodItem>
              <foodItem name="Pizza Melozini" price="10" image="pizza.png"></foodItem>
              <foodItem name="Pizza Royale" price="15.45" image="pizza.png"></foodItem>
            </div>
          </div>
        </div>

      </div>

      <div class="container-footer">
        <div class="container-profil">
          <profilBlock></profilBlock>
        </div>
        <div style="margin-top: 50px">
          <cardPaiement></cardPaiement>

          <div class="globalFlex" style="margin-top: 90px">
            <div class="rowFlex" style="justify-content: space-between;align-items: center">

              <div><span class="title" style="font-size: 25px">Order Menu</span></div>
              <ViewAll></ViewAll>
            </div>

            <div class="listCheckout" id="listCheckout"></div>
            <button-checkout style="margin-top: 15px"></button-checkout>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import Header from "../components/layouts/header"
import SearchBar from "../components/ui/searchBar";
import ProfilBlock from "../components/ui/profilBlock";
import CategoryCard from "../components/ui/card/cardCategory"
import ViewAll from "../components/ui/viewAll"
import CardPaiement from "../components/ui/card/cardPaiement";
import foodItem from "../components/ui/foodItem";
import cardFoodCheckout from "../components/ui/card/cardFoodCheckout"
import buttonCheckout from "../components/ui/button/checkout"

export default {
  name: "Home",
  components:{
    foodItem,
    CardPaiement,
    ProfilBlock,
    SearchBar,
    CategoryCard,
    buttonCheckout,
    ViewAll,
    Header,
    // eslint-disable-next-line vue/no-unused-components
    cardFoodCheckout
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

.globalFlex{
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

main{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.container-menu {
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  border: 1px solid red;
  overflow: hidden;
  background: #f8f8f8;
}

.top-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.padding{
  padding: 30px 50px 0px 50px;
}

.title{
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.container-footer{
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  background: white;
  align-items: center;
  z-index: 1;
}

.container-profil{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 99%;
  margin-top: 30px;
  margin-right: 50px;
}

.test{
  width: 100%;
  background: #42b983;
  height: 250px;
  margin-top: 50px;
  border-radius: 20px;
}

.food-category{
  margin-top: 50px;
}

.top-3{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
}

.listCheckout{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  overflow-y: scroll;
  height: 350px;
}

.listCheckout::-webkit-scrollbar {
  display: none;
}

</style>