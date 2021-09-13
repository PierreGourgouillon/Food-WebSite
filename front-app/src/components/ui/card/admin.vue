<template>
  <div id="card" class="col">
    <div id="container" class="col">
      <span id="title">Customers</span>
      <span id="number">45.5</span>
      <div id="up" class="row" v-if="graphic === 'up'">
        <div class="col">
          <img src="../../../assets/icons/up-arrow.svg">
        </div>
        <span style="margin-left: 4px">4.5%</span>
      </div>

      <div id="down" class="row" v-if="graphic === 'down'">
        <div class="col">
          <img src="../../../assets/icons/down-arrow.svg">
        </div>
        <span style="margin-left: 4px">4.5%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  props: {
    graphic: String,
  }
}
</script>

<style scoped>

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #card{
    background: white;
    border-radius: 8px;
    width: 240px;
    padding-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  #container{
    padding: 30px 30px;
  }

  #title{
    font-size: 22px;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    color: black;
  }

  #number{
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: black;
    margin-top: 15px;
    font-size: 20px;
  }

  #up{
    margin-top: 10px;
    color: #03a303;
    font-size: 16px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }

  #up div{
    width: 12px;
  }

  #up img{
    width: 100%;
    filter: invert(40%) sepia(50%) saturate(1871%) hue-rotate(89deg) brightness(95%) contrast(100%);
  }

  #down{
    margin-top: 10px;
    color: #cb0505;
    font-size: 16px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }

  #down div{
    width: 12px;
  }

  #down img{
    width: 100%;
    filter: invert(11%) sepia(65%) saturate(6690%) hue-rotate(359deg) brightness(99%) contrast(109%);
  }

  .col{
    display: flex;
    flex-direction: column;
  }

</style>