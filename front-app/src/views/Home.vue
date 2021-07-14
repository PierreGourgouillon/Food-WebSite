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

              <div class="rowFlex">
                <categoryBlock></categoryBlock>
              </div>
            </div>
            <div class="top-3"></div>
          </div>
        </div>

      </div>

      <div class="container-footer">
        <div class="container-profil padding">
          <profilBlock></profilBlock>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import Header from "../components/layouts/header"
import SearchBar from "../components/ui/searchBar";
import ProfilBlock from "../components/ui/profilBlock";
import CategoryBlock from "../components/ui/categoryBlock"
import ViewAll from "../components/ui/viewAll"

export default {
  name: "Home",
  components:{
    ProfilBlock,
    SearchBar,
    CategoryBlock,
    ViewAll,
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
}

.container-profil{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
</style>