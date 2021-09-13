<template>
  <div id="card" class="row center" @click="open">
    <div class="row center">
      <div class="row center">
        <span>+</span>
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from "../administrator/overlay-add.vue"
import Vue from "vue";

export default {
  name: "add",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    Overlay
  },
  methods:{
    open: function (){
      let componentClass = Vue.extend(Overlay)
      let overlay = new componentClass({
      })
      overlay.$mount()
      document.getElementById('doc').appendChild(overlay.$el)
    }
  }
}
</script>

<style scoped>

  span{
    color: white;
    font-size: 100px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  .center{
    align-items: center;
    justify-content: center;
  }

  .row{
    display: flex;
    flex-direction: row;
  }

  #card{
    border-radius: 8px;
    width: 240px;
    padding-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background: #FB9400;
    cursor: pointer;
    transition: 0.3s;
  }

  #card:hover{
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);
    transition: 0.3s;
  }

</style>