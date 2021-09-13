<template>
  <div id="container" class="column">
    <div id="title" class="row">
      <span>{{ title }}</span>
    </div>
    <div class="column">
      <div id="informations" class="column">
        <div class="column">

          <div id="gallery">
            <div class="photo"></div>
            <div class="photo" style="margin-left: 10px"></div>
            <div class="photo" style="margin-left: 10px"></div>
          </div>

          <div class="input column">
            <span v-if="title === 'Food'">Product Name</span>
            <span v-if="title === 'Restaurant'">Restaurant Name</span>
            <Input></Input>
          </div>

          <div class="input column" v-if="title == 'Food'">
            <span>Price (€) </span>
            <Input></Input>
          </div>

          <div class="row" v-if="title == 'Restaurant'" style="justify-content: space-between;margin-right:15px">
            <div class="input column" style="width: 40%">
              <span>Street </span>
              <Input></Input>
            </div>

            <div class="input column" style="width: 40%">
              <span>City </span>
              <Input></Input>
            </div>
          </div>


          <div class="input column" style="width: 100%">
            <span>Description (Optional) </span>
            <textarea></textarea>
          </div>

          <div class="row" v-if="title == 'Food'" style="padding-top: 20px">
            <div class="input" style="margin-top: 0px">
              <span>Ingredients</span>
              <div class="column selector-list">
                <ingredients name="Potatoes"></ingredients>
                <ingredients name="Salade"></ingredients>
                <ingredients name="Steak"></ingredients>
                <ingredients name="bread"></ingredients>
              </div>
            </div>

            <div class="input" style="margin-top: 0px">
              <span>Restaurants</span>
              <div class="column selector-list">
                <ingredients name="Potatoes"></ingredients>
                <ingredients name="Salade"></ingredients>
                <ingredients name="Steak"></ingredients>
                <ingredients name="bread"></ingredients>
              </div>
            </div>

          </div>

          <div v-if="title == 'Restaurant'">

          </div>

          <div class="but">
            <Button name="Save"></Button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../input"
import ingredients from "../button/selector"
import Button from "../button/settings"

export default {
  name: "pannel-creator",
  props:{
    title:String
  },
  components: {
    Input,
    ingredients,
    Button
  }
}
</script>

<style scoped>

  .row{
    display: flex;
    flex-direction: row;
  }

  .column{
    display: flex;
    flex-direction: column;
  }

  #container{
    width: 100%;
    background: white;
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  #container::-webkit-scrollbar{
    display: none;
  }

  #title{
    justify-content: center;
    padding: 15px 10px;
    border-bottom: 3px solid #FB9400;
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
  }

  #informations{
    padding: 30px;
  }

  #gallery{
    display: flex;
    flex-direction: row;
  }

  .photo{
    background: #FB9400;
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }

  .input{
    margin-top: 30px;
    width: 350px;
  }

  .input Input{
    margin-top: 5px;
  }

  .input span{
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  textarea{
    margin-top: 5px;
    resize: none;
    height: 150px;
    outline: none;
    border-radius: 7px;
    color: black;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    box-shadow: 0 1px 1px rgba(182, 182, 182, 0.75);
  }

  .selector-list{
    border: 1px solid rgba(128, 128, 128, 0.5);
    overflow-y: scroll;
    width: 90%;
    height: 170px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 5px;
    border-radius: 10px;
    margin-top: 5px;
  }

  .selector-list::-webkit-scrollbar{
    display: none;
  }

  .but{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: 7px;
  }

</style>