<template>
  <div id="option" class="row" style="padding-top: 20px; border-bottom: 1px solid rgba(128,128,128, 0.5)">

    <div id="icon">
        <img src="../../../assets/icons/settings.svg">
    </div>

    <div id="informations">
      <div>
          <span id="name-option">{{ name }}</span>
          <p id="para-option">{{ description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "option-settings",
  props: {
    name: String,
    description: String,
  }
}
</script>

<style scoped>

  #option:hover{
    background: rgba(251, 148, 0, 0.9);
    cursor: pointer;
    transition: 0.3s;
  }

  #option:hover span{
    color: white;
  }

  row{
    display: flex;
    flex-direction: row;
  }

  #icon{
    display: flex;
    flex-direction: row;
    padding-left: 40px;
  }

  img{
    width: 25px;
    height: 25px;
    filter: invert(53%) sepia(8%) saturate(329%) hue-rotate(197deg) brightness(96%) contrast(95%);
  }

  #informations{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 4px;
  }

  #name-option{
    color: black;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  #para-option{
    color: #2c3e50;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
  }
</style>