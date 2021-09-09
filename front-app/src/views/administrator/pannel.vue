<template>
  <div class="row">
    <Header></Header>

    <main>
      <div class="container-menu">
        <div class="row">
          <span id="title-panel">Administrator Panel</span>
        </div>

        <div id="top" class="row">
          <div id="cont-card">
            <div id="c-card" class="col">
              <div class="row">
                <card graphic="up"></card>
                <card style="margin-left: 30px;" graphic="down"></card>
              </div>
              <div class="row" style="margin-top: 40px">
                <card graphic="up"></card>
                <card style="margin-left: 30px;" graphic="down"></card>
              </div>
            </div>
          </div>

          <div id="graphic-fake"></div>
        </div>

      </div>
    </main>

  </div>
</template>

<script>
import Header from "../../components/layouts/header";
import card from "../../components/ui/card/admin"

export default {
  name: "pannel",
  components: {
    Header,
    card,
  }
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

  main{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
  }

  .container-menu {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    overflow: hidden;
    background: #f8f8f8;
    padding: 30px 60px;
  }

  #title-panel{
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 30px;
  }

  #top{
    margin-top: 30px;
  }

  #cont-card{
    display: flex;
  }

  #c-card{
    display: flex;
    justify-content: space-between;
    align-content: space-between;
  }

  #graphic-fake{
    display: flex;
    width: 60%;
    margin-left: 40px;
    height: 100%;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 8px;
  }

</style>