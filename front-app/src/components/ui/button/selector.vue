<template>
  <div id="button" class="row" @click="click">
    <div class="row padding">
      <div>
        <span>{{ name }}</span>
      </div>
      <div id="circle" ref="circle"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "selector",
  props: {
    name:String
  },
  methods:{
    click: function () {
      let circle = this.$refs.circle

      if (circle.classList.contains("click")){
        circle.classList.remove("click")
      }else{
        circle.classList.add("click")
      }

    }
  }
}
</script>

<style scoped>

  .padding{
    padding: 10px 15px;
    justify-content: space-between;
    width: 90%;
  }

  .row{
    display: flex;
    flex-direction: row;
  }

  #button{
    width: 80%;
    background: white;
    border-radius: 55px;
    border:1px solid rgba(128, 128, 128, 0.5) ;
    margin-top: 5px;
    cursor: pointer;
  }

  #button:hover {
    background: #FB9400;
    transition: 0.3s;
  }

  #button:hover span{
    color: white;
  }

  #button:hover #circle {
    background: white;
  }

  span{
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
  }

  #circle{
    border-radius: 999px;
    border: 2px solid #FB9400;
    width: 15px;
    height: 15px;
  }

  .click{
    background: #FB9400;
    transition: 0.3s;
  }


</style>