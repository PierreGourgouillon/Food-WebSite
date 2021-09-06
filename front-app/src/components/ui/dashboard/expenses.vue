<template>
  <div class="column">
    <div class="row">
      <div class="column">
        <span id="title">Total income</span>
        <span id="price">$1200</span>
        <span id="percent">45%</span>
      </div>
      <div class="column" style="padding-left: 20px">
        <div id="img-graph">
          <img src="../../../assets/images/courbe1.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "expenses"
}
</script>

<style scoped>
  .column{
    display: flex;
    flex-direction: column;
  }

  .row{
    display: flex;
    flex-direction: row;
  }

  img{
    width: 100%;
    height: 100%;
  }

  #img-graph{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    user-select: none;
  }

  #img-graph img {
    width: 100px;
  }

  #title{
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 300;
  }

  #price{
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    font-weight: 500;
    margin-top: 7px;
  }

  #percent{
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FB9400;
    margin-top: 7px;
  }

</style>