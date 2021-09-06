<template>
  <div class="rowFlex">
    <Header></Header>

    <main>
      <div class="container-menu padding">
        <div class="top-header">
          <div class="globalFlex">
            <span class="title">Dashboard</span>
            <span id="h2TopHeader">See all payments and lot of thing</span>
          </div>
        </div>

        <div class="block-expenses">
          <expenses></expenses>
          <expenses></expenses>
          <expenses></expenses>
        </div>

        <div style="margin-top: 25px">
          <graphic-dashboard></graphic-dashboard>
        </div>

        <div id="container-informations" class="rowFlex">

        </div>

      </div>

      <div class="container-footer">
        <BlockProfil style="margin-top: 80px"></BlockProfil>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/layouts/header"
import expenses from "../components/ui/dashboard/expenses";
import graphicDashboard from "../components/ui/dashboard/graphicDashboard";
import BlockProfil from "../components/ui/dashboard/block-profil";

export default {
  name: "DashBoard",
  components: {
    BlockProfil,
    Header,
    expenses,
    graphicDashboard,
  }
}
</script>

<style scoped>
  .rowFlex{
    display: flex;
    flex-direction: row;
    flex-basis: auto;
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

  .container-footer{
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    background: white;
    align-items: center;
    z-index: 1;
  }

  .top-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  .title{
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  .padding{
    padding: 30px 50px 0px 50px;
  }

  #h2TopHeader{
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    margin-top: 4px;
    font-weight: 300;
  }

  .block-expenses{
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
  }

  #container-informations {
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px 40px;
    margin-top: 25px;
  }

</style>