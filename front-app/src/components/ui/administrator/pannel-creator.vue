<template>
  <div id="container" class="column">
    <div id="title" class="row">
      <span>Restaurant</span>
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
            <span>Product Name</span>
            <Input></Input>
          </div>

          <div class="input column">
            <span>Price (€) </span>
            <Input></Input>
          </div>

          <div class="input column" style="width: 100%">
            <span>Description (Optional) </span>
            <textarea></textarea>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../input"

export default {
  name: "pannel-creator",
  components: {
    Input,
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
  }

  #title{
    justify-content: center;
    padding: 20px 10px;
    border-bottom: 3px solid #FB9400;
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
  }

  #informations{
    border: 1px solid blue;
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
  }
</style>